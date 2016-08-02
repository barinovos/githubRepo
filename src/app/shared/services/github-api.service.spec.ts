import {fakeAsync, tick} from '@angular/core/testing';
import {Response, ResponseOptions, ResponseType} from '@angular/http';
import {GithubApiService} from './github-api.service';
import {Observable} from 'rxjs/Rx';

describe('Github Api Service', () => {
	let serviceInstance:GithubApiService;
	let mockedHttpService;

	beforeEach(() => {
		mockedHttpService = jasmine.createSpyObj('http', ['get']);
		serviceInstance = new GithubApiService(mockedHttpService);
	});

	it('fetch method should call http.get method with current username inside path', fakeAsync(() => {
		let mockUsername:string = 'kibo007';
		let mockResponseBody:any = {result: 'ok'};
		let mockedResponse:Response = new Response(new ResponseOptions({body: mockResponseBody}));
		let expectedResult:any = null;
		mockedHttpService.get.and.callFake((username:string) => Observable.of(mockedResponse));
		serviceInstance.fetch(mockUsername).subscribe((result:any) => expectedResult = result);
		tick();

		expect(expectedResult).toEqual(mockResponseBody);
		expect(mockedHttpService.get).toHaveBeenCalledWith(`https://api.github.com/users/${mockUsername}/repos`);
	}));

	it('fetch method should throw an Observable error if there is a server error thrown', fakeAsync(() => {
		let mockedError:any = {message: 'Not found'};
		let mockedErrorResponse:Response = new Response(new ResponseOptions({body: mockedError, type: ResponseType.Error}));
		let expectedError:any = null;
		mockedHttpService.get.and.callFake((username:string) => Observable.throw(mockedErrorResponse));
		serviceInstance.fetch('any_wrong_username').subscribe(() => void 0, (error:any) => expectedError = error);
		tick();

		expect(expectedError).toEqual(mockedError);
	}));
});
