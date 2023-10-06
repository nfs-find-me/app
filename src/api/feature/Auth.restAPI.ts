import { HTTP } from '../../enum/HTTP.enum';
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
		const type = BasePublicRestApi.getType(this.feature) as T;
		console.log({ data, g: JSON.stringify(data) });

		try {
			const init = {
				method: 'POST',
				headers: this.header,
				body: JSON.stringify(data)
			};
			console.log({ init });

			const response = await fetch(this.server + this.feature + '/login', init);

			if (response.status === 200 || response.status === 201) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			throw error;
		}
	}

	public async login2<T>(data: T): Promise<string | Error> {
		const response: Response | Error = await this.request({
			method: HTTP.POST,
			url: 'login',
			data
		});
		if (response instanceof Response) {
			return response.json();
		}
		throw response;
	}
}
