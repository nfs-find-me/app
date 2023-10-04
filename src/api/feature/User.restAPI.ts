import { BaseRestApi } from '../Base.restAPi';
import { FeatureEnum } from '../feature.enum';

export class UserRestApi extends BaseRestApi {
	constructor() {
		super(FeatureEnum.USER);
	}

	protected async register<T>(data: T): Promise<T | Error> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature + '/register', {
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
			console.log(error);
			throw new Error(`Erreur lors de la récupération du ${this.feature}`);
		}
	}
}
