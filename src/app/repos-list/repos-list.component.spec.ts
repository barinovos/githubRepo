import {RepositoriesListComponent} from './repos-list.component';
import {Repository} from '../shared';

describe('Repositories List Component', () => {
	let componentInstance:RepositoriesListComponent;

	beforeEach(() => {
		componentInstance = new RepositoriesListComponent();
	});

	it('@Input property list should reflect on changes', () => {
		let mockList:Array<Repository> = [];
		mockList.push({owner: {avatar_url: '', login: 'test'}, name: 'test', html_url: 'test_url'});
		componentInstance.list = mockList;

		expect(componentInstance.list).toBe(mockList);
	});
});
