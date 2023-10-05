import { BaseRestApi } from './Base.restAPi';

export abstract class BasePublicRestApi extends BaseRestApi {
	protected header = new Headers({
		'Content-Type': 'application/json'
	});
}
