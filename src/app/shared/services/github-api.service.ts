import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class GithubApiService {
	constructor(private _http:Http) {
	}

	fetch(name:string) {
		return this._http.get(`https://api.github.com/users/${name}/repos`)
			.map((resp:Response) => resp.json())
			.catch((error:Response) => Observable.throw(error.json()));
	}
}