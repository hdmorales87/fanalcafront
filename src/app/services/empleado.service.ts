import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	create(empleado: any): Observable<any> {
		delete empleado.id;
		return this._http.post(this.url + 'empleados/', empleado);
	}

	update(empleado: any, id: any): Observable<any> {
		return this._http.put(this.url + 'empleados/' + id, empleado);
	}

	getEmpleado(id: any): Observable<any> {
		return this._http.get(this.url + 'empleados/' + id);
	}

	getEmpleados(): Observable<any> {
		return this._http.get(this.url + 'empleados/');
	}

	deleteEmpleado(id: any): Observable<Object> {
		return this._http.delete(this.url + 'empleados/' + id);
	}
}
