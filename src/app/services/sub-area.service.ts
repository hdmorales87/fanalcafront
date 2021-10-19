import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class SubAreaService {

  public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	create(subarea: any): Observable<any> {
		delete subarea.id;
		return this._http.post(this.url + 'subareas/', subarea);
	}

	update(subarea: any, id: any): Observable<any> {
		return this._http.put(this.url + 'subareas/' + id, subarea);
	}

	getSubArea(id: any): Observable<any> {
		return this._http.get(this.url + 'subareas/subarea/' + id);
	}

	getSubAreas(): Observable<any> {
		return this._http.get(this.url + 'subareas/');
	}

	deleteSubArea(id: any) {
		return this._http.delete(this.url + 'subareas/' + id);
	}
}
