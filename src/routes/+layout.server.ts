import type { LayoutServerLoad } from './$types';
import { CookiesHelper } from '../helpers/cookies/cookies.helper';

export const load: LayoutServerLoad = (async ({ cookies }) => {
	let sendIsLoggedToFront: Boolean = false;
	try {
		const cookiesHelper = new CookiesHelper(cookies);
		await cookiesHelper.refreshCookies(cookies);
		sendIsLoggedToFront = true;
	} catch {
		sendIsLoggedToFront = false;
	}
	return {
		sendIsLoggedToFront
	};
}) satisfies PageServerLoad;
