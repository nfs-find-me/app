import { AuthRestApi } from '../../api/feature/Auth.restAPI';

export class jwtHelper {
	public async getJwtAndGenerateNewRefreshToken(data: {
		login: string;
		refreshToken: string;
	}): Promise<string> {
		try {
			const api = new AuthRestApi();
			const token = await api.refreshToken(data);
			console.log({ token });

			return '';
		} catch {
			return '';
		}
	}
}
