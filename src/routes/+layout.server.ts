import type { PageServerLoad } from './$types';
import { CookiesHelper } from '$lib/helpers/cookies/cookies.helper';

export const load = (async ({ cookies }) => {
	try {
		const cookiesHelper = new CookiesHelper(cookies);
		await cookiesHelper.refreshCookies(cookies);
	} catch {
		return null;
	}

	return {};
}) satisfies PageServerLoad;
