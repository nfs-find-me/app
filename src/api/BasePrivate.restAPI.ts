import type { Cookies } from '@sveltejs/kit';
import { BaseRestApi } from './Base.restAPi';
import type { FeatureEnum } from './feature.enum';
import { HTTP } from '../enum/HTTP.enum';
export abstract class BasePrivateRestApi extends BaseRestApi {
	protected header?: Headers;
	protected headerFormHeader?: Headers;

	constructor(feature: FeatureEnum, cookies: Cookies) {
		super(feature);
		if (cookies.get('jwt')) {
			this.header = new Headers({
				'Content-Type': 'application/json',
				Authorization: `Bearer ${cookies.get('jwt')}`
			});
			this.headerFormHeader = new Headers({
				'Content-Type': 'multipart/form-data',
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
		console.info('INFO ', {
			method: options.method,
			url: this.server + this.feature + (!!options.url ? '/' + options.url : ''),
			statusCode: response.status,
			bearer: this.header?.get('Authorization'),
			headersRes: response.headers
		});
		if (response.status === 200 || response.status === 201) {
			return response;
		} else {
			throw new Error(await response.text());
		}
	}

	protected async requestFormData<T>(formData: FormData): Promise<T | Error> {
		const response = await fetch(this.server + this.feature, {
			method: 'POST',
			headers: this.headerFormHeader,
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

	protected async getAll<T>(): Promise<T[] | Error> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature, {
				method: 'GET',
				headers: this.header
			});

			if (response.status === 200) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			throw new Error(`Erreur lors de la récupération des ${this.feature}s`);
		}
	}

	protected async post<T>(data: T): Promise<T | Error> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature, {
				method: 'POST',
				headers: this.header,
				body: JSON.stringify(data)
			});

			if (response.status === 201) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			console.error({ error });
			throw new Error(`Erreur lors de l'ajoute de l'object : ${this.feature}`);
		}
	}

	protected async update<T>(data: T, id: string = ''): Promise<T> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature + `/${id}`, {
				method: 'PUT',
				headers: this.header,
				body: JSON.stringify(data)
			});

			if (response.status === 200 || response.status === 201) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			console.error({ error });
			throw new Error(`Erreur lors de la modification de l'object : ${this.feature}`);
		}
	}

	protected async delete<T>(id: string): Promise<T> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature + `/${id}`, {
				method: 'DELETE',
				headers: this.header
			});

			if (response.status === 204) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			console.error({ error });
			throw new Error(`Erreur lors de la suppression de l'object : ${this.feature}`);
		}
	}
}
