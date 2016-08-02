import {fakeAsync, tick} from '@angular/core/testing';
import {SearchFormComponent} from './search-form.component';
import {FormControl} from '@angular/forms';

const INPUT_BASE_DELAY:number = 350;

describe('Search Form Component', () => {
	let componentInstance:SearchFormComponent;

	beforeEach(() => {
		componentInstance = new SearchFormComponent();
	});

	it('constructor should define onUserNameEntered output emitter', () => {
		expect(componentInstance.onUserNameEntered).toBeDefined();
	});

	it('constructor should define pristine form prop and username control on it', () => {
		expect(componentInstance.form).toBeDefined();
		expect(componentInstance.form.pristine).toBeTruthy();
		expect(componentInstance.form.controls['username']).toBeDefined();
	});

	it('constructor should set username control value to empty string', () => {
		expect(componentInstance.form.controls['username'].value).toEqual('');
	});

	it('update of username should trigger an output event with current value and update the model', fakeAsync(() => {
		let mockUsername:string = 'kibo007';
		let usernameControl:FormControl = (<FormControl>componentInstance.form.controls['username']);
		spyOn(componentInstance.onUserNameEntered, 'emit');
		usernameControl.updateValue(mockUsername);
		tick(INPUT_BASE_DELAY);

		expect(componentInstance.form.controls['username'].value).toEqual(mockUsername);
		expect(componentInstance.onUserNameEntered.emit).toHaveBeenCalledWith(mockUsername);
	}));

	it('update of username should not trigger an output event after OnDestroy', fakeAsync(() => {
		let usernameControl:FormControl = (<FormControl>componentInstance.form.controls['username']);
		spyOn(componentInstance.onUserNameEntered, 'emit');
		componentInstance.ngOnDestroy();
		usernameControl.updateValue('any value');
		tick(INPUT_BASE_DELAY);

		expect(componentInstance.onUserNameEntered.emit).not.toHaveBeenCalled();
	}));
});
