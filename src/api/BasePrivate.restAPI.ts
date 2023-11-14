import type { Cookies } from '@sveltejs/kit';
import { BaseRestApi } from './Base.restAPi';
import type { FeatureEnum } from './feature.enum';
import { HTTP } from '../enum/HTTP.enum';
export abstract class BasePrivateRestApi extends BaseRestApi {
	protected header?: Headers;

	constructor(feature: FeatureEnum, cookies: Cookies) {
		super(feature);
		if (cookies.get('jwt')) {
			this.header = new Headers({
				'Content-Type': 'application/json',
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
		const response = await fetch(this.server + this.feature + '/' + options.url, init);
		if (response.status === 200 || response.status === 201) {
			return response;
		} else {
			throw new Error(await response.text());
		}
	}

	// protected async getOne<T>(id: string): Promise<T | Error> {
	// 	const type = BaseRestApi.getType(this.feature) as T;
	// 	try {
	// 		const response = await fetch(this.server + this.feature + id, {
	// 			method: 'GET',
	// 			headers: this.header
	// 		});

	// 		if (response.status === 200) {
	// 			return await response.json();
	// 		} else {
	// 			throw new Error(response.statusText);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 		throw new Error(`Erreur lors de la récupération du ${this.feature}`);
	// 	}
	// }

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
