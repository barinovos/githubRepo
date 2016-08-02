import {Component, ViewEncapsulation} from '@angular/core';
import {SearchFormComponent} from './search-form';
import {RepositoriesListComponent} from './repos-list';
import {GithubApiService, MessageType, GhubMessage, Repository} from './shared';

const NO_REPOS_MESSAGE:string = 'No repositories for current user';

@Component({
	selector: 'app',
	directives: [SearchFormComponent, RepositoriesListComponent],
	providers: [GithubApiService],
	styles: [require('./../scss/app.scss')],
	encapsulation: ViewEncapsulation.None,
	template: require('./app.html')
})
export class AppComponent {
	constructor(private githubApiService:GithubApiService) {
	}

	repoList:Array<Repository>;
	notification:GhubMessage;
	// To provide an access to Enum for a view
	MessageType = MessageType;

	onUserNameEntered(userName:string) {
		if (!userName) {
			this.notification = new GhubMessage(MessageType.Error, '');
			return;
		}
		this.githubApiService.fetch(userName)
			.subscribe((list:Array<Repository>) => {
				this.repoList = list;
				this.repoList.length ?
					this.notification = null :
					this.notification = new GhubMessage(MessageType.Warning, NO_REPOS_MESSAGE);
			}, (error:Error) => {
				this.notification = new GhubMessage(MessageType.Error, error.message);
			});
	}
}
