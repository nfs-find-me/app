import type { Cookies } from '@sveltejs/kit';
import { BaseRestApi } from './Base.restAPi';
import type { FeatureEnum } from './feature.enum';
import { HTTP } from '../enum/HTTP.enum';
export abstract class BasePrivateRestApi extends BaseRestApi {
	protected header?: Headers;
	protected headerFormData?: Headers;

	constructor(feature: FeatureEnum, cookies: Cookies) {
		super(feature);
		if (cookies.get('jwt')) {
			this.header = new Headers({
				'Content-Type': 'application/json',
				Authorization: `Bearer ${cookies.get('jwt')}`
			});
			this.headerFormData = new Headers({
				Authorization: `Bearer ${cookies.get('jwt')}`
			});
		}
	}

	protected async request<T>(options: {
		method: string;
		url?: string;
		data?: T;
	}): Promise<Response | Error> {
		if (!options.method) {
			throw new Error('La méthode HTTP est obligatoire');
		}
		const init: RequestInit = {
			method: options.method,
			headers: this.header
		};
		if (options.data && options.method !== HTTP.GET) {
			init.body = JSON.stringify(options.data);
		}
		const response = await fetch(
			this.server + this.feature + (!!options.url ? '/' + options.url : ''),
			init
		);
		if (response.status === 200 || response.status === 201) {
			return response;
		} else {
			throw new Error(await response.text());
		}
	}

	protected async requestFormData<T>(formData: FormData): Promise<Response | Error> {
		const response = await fetch(this.server + this.feature, {
			method: 'POST',
			headers: this.headerFormData,
			body: formData
		});
		console.log({ formData, response, header: this.headerFormData });

		// @ts-ignore
		// if (!formData.file) {
		// 	throw new Error('Please provide a image');
		// }
		// @ts-ignore
		// if (formData.data instanceof T === false) {
		// 	throw new Error('Invalid data received');
		// }
		if (response.status === 201 || response.status === 200) {
			return await response.json();
		} else {
			throw new Error(response.statusText);
		}
	}
}
