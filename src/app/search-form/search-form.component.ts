import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, FormControl, REACTIVE_FORM_DIRECTIVES, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/Rx';

const INPUT_BASE_DELAY:number = 350; // ms

@Component({
	selector: 'search-form',
	template: require('./search-form.component.html'),
	styles: [require('./search-form.component.scss')],
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class SearchFormComponent {
	form:FormGroup;
	private usernameControl:FormControl;
	private changesSubscription:Subscription;

	@Output() onUserNameEntered:EventEmitter<string>;

	constructor() {
		this.onUserNameEntered = new EventEmitter<string>();
		this.usernameControl =  new FormControl('', Validators.required);
		this.form = new FormGroup({username: this.usernameControl});
		this.changesSubscription = this.usernameControl.valueChanges
			.debounceTime(INPUT_BASE_DELAY)
			.distinctUntilChanged()
			.subscribe((username:string) => this.onUserNameEntered.emit(username));
	}

	ngOnDestroy() {
		this.changesSubscription.unsubscribe();
	}
}