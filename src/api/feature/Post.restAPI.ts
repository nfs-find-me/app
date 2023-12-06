import type { Cookies } from '@sveltejs/kit';
import { BaseRestApi } from '../Base.restAPi';
import { BasePrivateRestApi } from '../BasePrivate.restAPI';
import { FeatureEnum } from '../feature.enum';
import { HTTP } from '../../enum/HTTP.enum';

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

	public async sendFormData(formData: FormData) {
		console.log({ formData , type: typeof formData });
		
		const response: Response | Error = await this.requestFormData(formData);
	}
}
