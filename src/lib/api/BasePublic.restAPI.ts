import { HTTP } from '../enum/HTTP.enum';
import { BaseRestApi } from './Base.restAPi';

export abstract class BasePublicRestApi extends BaseRestApi {
	protected header = new Headers({
		'Content-Type': 'application/json'
	});

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

	protected async post<T>(data: T, link = ''): Promise<T | Error> {
		const type = BaseRestApi.getType(this.feature) as T;
		const url = this.server + this.feature + '/' + link;
		try {
			const response = await fetch(url, {
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
}
