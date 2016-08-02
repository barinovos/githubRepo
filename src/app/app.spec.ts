import {fakeAsync, tick} from '@angular/core/testing';
import {AppComponent} from './app';
import {MessageType, GhubMessage, Repository} from './shared';
import {Observable} from 'rxjs/Rx';

const NO_REPOS_MESSAGE:string = 'No repositories for current user';

describe('App Component', () => {
	let componentInstance:AppComponent;
	let mockGithubApiService:any;

	beforeEach(() => {
		mockGithubApiService = jasmine.createSpyObj('githubApiService', ['fetch']);
		componentInstance = new AppComponent(mockGithubApiService);
	});

	it('onUserNameEntered method should set the repoList and notification to null if list is not empty', fakeAsync(() => {
		let validUsername:string = 'kibo007';
		let mockList:Array<Repository> = [];
		mockList.push({owner: {avatar_url: '', login: 'test'}, name: 'test', html_url: 'test_url'});
		mockGithubApiService.fetch.and.callFake(() => Observable.of(mockList));
		componentInstance.onUserNameEntered(validUsername);
		tick();

		expect(mockGithubApiService.fetch).toHaveBeenCalled();
		expect(componentInstance.repoList).toEqual(mockList);
		expect(componentInstance.notification).toBe(null);
	}));

	it('onUserNameEntered method should set the notification to Warning type with proper message if no entries', fakeAsync(() => {
		let emptyUsername:string = 'username_with_no_repo';
		let mockList:Array<Repository> = [];
		mockGithubApiService.fetch.and.callFake(() => Observable.of(mockList));
		componentInstance.onUserNameEntered(emptyUsername);
		tick();

		expect(mockGithubApiService.fetch).toHaveBeenCalled();
		expect(componentInstance.repoList.length).toEqual(0);
		expect(componentInstance.notification).toEqual(new GhubMessage(MessageType.Warning, NO_REPOS_MESSAGE));
	}));

	it('onUserNameEntered method should set the notification to Error and show message of it if error happened', fakeAsync(() => {
		let invalidUsername:string = 'invalid_username';
		let mockMessage:string = 'Not found';
		mockGithubApiService.fetch.and.callFake(() => Observable.throw(new Error(mockMessage)));
		componentInstance.onUserNameEntered(invalidUsername);
		tick();

		expect(mockGithubApiService.fetch).toHaveBeenCalled();
		expect(componentInstance.notification).toEqual(new GhubMessage(MessageType.Error, mockMessage));
	}));

	it(`onUserNameEntered method should set the notification to Error and hide message of 
			it if error happened and username is empty and not call fetch method`, fakeAsync(() => {
		let emptyUsername:string = '';
		mockGithubApiService.fetch.and.callFake(() => void 0);
		componentInstance.onUserNameEntered(emptyUsername);
		tick();

		expect(mockGithubApiService.fetch).not.toHaveBeenCalled();
		expect(componentInstance.notification).toEqual(new GhubMessage(MessageType.Error, ''));
	}));
});
