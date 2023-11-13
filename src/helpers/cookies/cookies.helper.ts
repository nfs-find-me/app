import { AuthRestApi } from '../../api/feature/Auth.restAPI';
import type { Cookies } from '@sveltejs/kit';

export class CookiesHelper {
	private cookies: Cookies;

	constructor(cookies: Cookies) {
		this.cookies = cookies;
	}
	public setAuthCookies(login: string, jwt: string, refreshToken: string, expireTime: number) {
		this.cookies.set('login', login, {
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

	public setTokenCookies(jwt: string, refreshToken: string, expireTime: number) {
		this.cookies.set('jwt', jwt, {
			httpOnly: true,
			sameSite: 'lax',
			secure: false,
			path: '/',
			maxAge: expireTime
		});
		this.cookies.set('refresh', refreshToken, {
			httpOnly: true,
			sameSite: 'lax',
			secure: false,
			path: '/',
			maxAge: expireTime
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
		cookiesHelper.setTokenCookies(tokens.jwtToken, tokens.refreshToken, expireTime);
	}
}
