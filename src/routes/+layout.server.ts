import type { LayoutServerLoad } from './$types';
import { CookiesHelper } from '../helpers/cookies/cookies.helper';
import { json, type RequestHandler } from '@sveltejs/kit';

export const load: LayoutServerLoad = (async ({ cookies }) => {
	let sendIsLoggedToFront: Boolean = false;
	try {
		console.log('ON PASSE ICI?');

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
