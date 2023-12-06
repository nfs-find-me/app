import type { Cookies } from '@sveltejs/kit';
import { BasePrivateRestApi } from '../BasePrivate.restAPI';
import { FeatureEnum } from '../feature.enum';
import { HTTP } from '../../enum/HTTP.enum';

export class UserRestApi extends BasePrivateRestApi {
	constructor(cookies: Cookies) {
		super(FeatureEnum.USER, cookies);
	}

	public async getOne(id: string) {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: id
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async getAll() {
		const response: Response | Error = await this.request({
			method: HTTP.GET
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async banUser(userId: string) {
		const response: Response | Error = await this.request({
			method: HTTP.POST,
			url: 'ban/' + userId
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}
}
