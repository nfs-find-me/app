import type { PageServerLoad } from './$types';
import { CookiesHelper } from '../helpers/cookies/cookies.helper';
import { connected } from '../store/isLogged';

export const load = (async ({ cookies }) => {
	try {
		const cookiesHelper = new CookiesHelper(cookies);
		await cookiesHelper.refreshCookies(cookies);
		connected(true);
	} catch {
		connected(false);
		return null;
	}

	return {};
}) satisfies PageServerLoad;
