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

	protected async requestFormData<T>(formData: FormData): Promise<T | Error> {
		const response = await fetch(this.server + this.feature, {
			method: 'POST',
			headers: this.headerFormData,
			body: formData
		});
		// @ts-ignore
		if (!formData.file) {
			throw new Error('Please provide a image');
		}
		// @ts-ignore
		if (formData.data instanceof T === false) {
			throw new Error('Invalid data received');
		}
		if (response.status === 201 || response.status === 200) {
			return await response.json();
		} else {
			throw new Error(response.statusText);
		}
	}

	protected async request<T>(options: {
		method: string;
		url?: string;
		data?: T;
		customData?: number;
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
		} else if (options.customData && options.method !== HTTP.GET) {
			init.body = JSON.stringify(options.customData);
		}
		console.log('init', init);
		const response = await fetch(
			this.server + this.feature + (!!options.url ? '/' + options.url : ''),
			init
		);
		console.log('base private', response);
		if (response.status === 200 || response.status === 201) {
			return response;
		} else {
			throw new Error(await response.text());
		}
	}
}
