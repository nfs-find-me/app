import { redirect, type Cookies } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { connected } from '../../store/isLogged';
import { CookiesHelper } from '../../helpers/cookies/cookies.helper';

export const load = (async ({ cookies }) => {
	let sendIsLoggedToFront: Boolean = false;
	connected(false);
	await new CookiesHelper(cookies).logout();
	throw redirect(302, '/');
}) satisfies PageServerLoad;
