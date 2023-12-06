import type { Cookies } from '@sveltejs/kit';
import { BaseRestApi } from '../Base.restAPi';
import { BasePrivateRestApi } from '../BasePrivate.restAPI';
import { FeatureEnum } from '../feature.enum';
import { HTTP } from '../../enum/HTTP.enum';
import { format } from 'path';

export class PostRestApi extends BasePrivateRestApi {
	constructor(cookies: Cookies) {
		super(FeatureEnum.POST, cookies);
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

	public async getByCurrentUser(id: string) {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: "user/" + id
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async create(formData : FormData) {
		const response: Response | Error = await this.requestFormData(formData);

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}
}
