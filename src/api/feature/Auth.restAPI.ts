import { BasePublicRestApi } from '../BasePublic.restAPI';
import { FeatureEnum } from '../feature.enum';

export class AuthRestApi extends BasePublicRestApi {
	constructor() {
		super(FeatureEnum.AUTH);
	}

	public async register<T>(data: T): Promise<T | Error> {
		const type = BasePublicRestApi.getType(this.feature) as T;
		console.log({ link: this.server + this.feature + '/register' });
		console.log({ userFromRegister: data });
		console.log({ userFromLoginJSON: JSON.stringify(data) });
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

	public async login<T>(data: T): Promise<T | Error> {
		const type = BasePublicRestApi.getType(this.feature) as T;
		console.log({ link: this.server + this.feature + '/login' });
		console.log({ userFromLogin: data });
		console.log({ userFromLoginJSON: JSON.stringify(data) });
		try {
			const response = await fetch(this.server + this.feature + '/login', {
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
			throw new Error(`Erreur la connexion de : ${this.feature}`);
		}
	}
}
