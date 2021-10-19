import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	create(tipoDocumento: any): Observable<any> {
		delete tipoDocumento.id;
		return this._http.post(this.url + 'tiposdocumento/', tipoDocumento);
	}

	update(tipoDocumento: any, id: any): Observable<any> {
		return this._http.put(this.url + 'tiposdocumento/' + id, tipoDocumento);
	}

	getTipoDocumento(id: any): Observable<any> {
		return this._http.get(this.url + 'tiposdocumento/' + id);
	}

	getTiposDocumento(): Observable<any> {
		return this._http.get(this.url + 'tiposdocumento/');
	}

	deleteTipoDocumento(id: any) {
		return this._http.delete(this.url + 'tiposdocumento/' + id);
	}
}
