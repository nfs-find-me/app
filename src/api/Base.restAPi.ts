import { FeatureEnum } from "./feature.enum";

export class BaseRestApi {
	protected  server = ''
	protected  feature?: FeatureEnum
	protected  header = new Headers({
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${localStorage.getItem('token')}`,
	});

	constructor(feature:FeatureEnum) {
		this.feature = feature
	}

	protected async get(): Promise<any> {
		const response = await fetch(this.server + this.feature , {
			method: 'GET',
			headers: this.header,
		});
		if (response.status === 200) {
			return await response.json();
		} else {
			throw new Error(response.statusText);
		}
	}

	private static getType(feature: FeatureEnum): T {
		switch (feature) {
			case FeatureEnum.USER:
			//return User;
		case FeatureEnum.POST:
			//return Car;
		default:
			throw new Error(`Feature ${feature} is not supported`);
		}
	}
}