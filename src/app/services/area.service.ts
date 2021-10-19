import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable({
	providedIn: 'root'
})
export class AreaService {

	public url: string;

	constructor(
		private _http: HttpClient
	) {
		this.url = global.url;
	}

	create(area: any): Observable<any> {
		delete area.id;
		return this._http.post(this.url + 'areas/', area);
	}

	update(area: any, id: any): Observable<any> {
		return this._http.put(this.url + 'areas/' + id, area);
	}

	getArea(id: any): Observable<any> {
		return this._http.get(this.url + 'areas/' + id);
	}

	getAreas(): Observable<any> {
		return this._http.get(this.url + 'areas/');
	}

	deleteArea(id: any) {
		return this._http.delete(this.url + 'areas/' + id);
	}

}
