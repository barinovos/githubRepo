import {Owner} from './owner';

export interface Repository {
	owner:Owner;
	name:string;
	html_url:string;
}