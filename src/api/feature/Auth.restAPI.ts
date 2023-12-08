import { HTTP } from '../../enum/HTTP.enum';
import { BasePublicRestApi } from '../BasePublic.restAPI';
import { FeatureEnum } from '../feature.enum';

export class AuthRestApi extends BasePublicRestApi {
	constructor() {
		super(FeatureEnum.AUTH);
	}

	public async register<T>(data: T): Promise<string | Error> {
		const response: Response | Error = await this.request({
			method: HTTP.POST,
			url: 'register',
			data
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async login<T>(data: T): Promise<{
		data: { jwtToken: string; refreshToken: string; userId: string; username: string };
		exp: number;
		statusCode: number;
	}> {
		const response: Response | Error = await this.request({
			method: HTTP.POST,
			url: 'login',
			data
		});
		if (response instanceof Response) {
			return response.json();
		}
		console.error('error json : ', response);
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
