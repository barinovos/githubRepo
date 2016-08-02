import {MessageType} from './message-type.enum';

export class GhubMessage {
	messageType:MessageType;
	message:string;

	constructor(messageType:MessageType, message:string) {
		this.messageType = messageType;
		this.message = message;
	}
}