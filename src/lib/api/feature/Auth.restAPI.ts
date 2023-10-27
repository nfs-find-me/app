import { HTTP } from '$lib/enum/HTTP.enum';
import { BasePublicRestApi } from '../BasePublic.restAPI';
import { FeatureEnum } from '../feature.enum';

export class AuthRestApi extends BasePublicRestApi {
	constructor() {
		super(FeatureEnum.AUTH);
	}

	public async register<T>(data: T): Promise<T | Error> {
		const type = BasePublicRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature + '/register', {
				method: 'POST',
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
			throw new Error(`Erreur lors de l'ajoute de l'object : ${this.feature}`);
		}
	}

	public async login<T>(data: T): Promise<string | Error> {
		const response: Response | Error = await this.request({
			method: HTTP.POST,
			url: 'login',
			data
		});
		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async refreshToken(data: { login: string; refreshToken: string }) {
		const response: Response | Error = await this.request({
			method: HTTP.POST,
			url: 'refresh',
			data
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}
}
