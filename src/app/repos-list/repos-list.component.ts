import {Component, Input} from '@angular/core';
import {Repository} from '../shared';

@Component({
	selector: 'repos-list',
	template: require('./repos-list.component.html'),
	styles: [require('./repos-list.component.scss')]
})
export class RepositoriesListComponent {
	@Input() list:Array<Repository>;
}