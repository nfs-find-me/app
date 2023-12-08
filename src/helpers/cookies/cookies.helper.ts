import { AuthRestApi } from '../../api/feature/Auth.restAPI';
import type { Cookies } from '@sveltejs/kit';

export class CookiesHelper {
	private cookies: Cookies;

	constructor(cookies: Cookies) {
		this.cookies = cookies;
	}
	public setAuthCookies(
		login: string,
		userId: string,
		jwt: string,
		refreshToken: string,
		expireTime: number
	) {
		this.cookies.set('login', login, {
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			path: '/',
			maxAge: expireTime
		});
		this.cookies.set('userId', userId, {
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			path: '/',
			maxAge: expireTime
		});
		this.cookies.set('jwt', jwt, {
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			path: '/',
			maxAge: expireTime
		});
		this.cookies.set('refresh', refreshToken, {
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			path: '/',
			maxAge: 60 * 60 * 24 * 7
		});
	}

	public async logout() {
		try {
			this.cookies.delete('jwt', { path: '/' });
			this.cookies.delete('refresh', { path: '/' });
			this.cookies.delete('userId', { path: '/' });
		} catch (e) {
			console.error('pb lors de suppression');
		}
	}

	public setTokenCookies(jwt: string, refreshToken: string) {
		this.cookies.set('jwt', jwt, {
			httpOnly: true,
			sameSite: 'lax',
			secure: false,
			path: '/'
		});
		this.cookies.set('refresh', refreshToken, {
			httpOnly: true,
			sameSite: 'lax',
			secure: false,
			path: '/'
		});
	}

	public async refreshCookies(cookies: Cookies) {
		const login = cookies.get('login');
		const refreshToken = cookies.get('refresh');
		if (login === undefined || refreshToken === undefined) {
			throw Error;
		}
		const data = { login, refreshToken };
		const api = new AuthRestApi();
		const response = await api.refreshToken(data);
		const tokens = response.data;
		const expireTime = response.exp;
		const cookiesHelper = new CookiesHelper(cookies);
		cookiesHelper.setTokenCookies(tokens.jwtToken, tokens.refreshToken);
	}

	public getUserId(cookies: Cookies) {
		return cookies.get('userId');
	}
}
