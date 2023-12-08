import type { LayoutServerLoad } from './$types';
import { CookiesHelper } from '../helpers/cookies/cookies.helper';
import type { PageServerLoad } from '../../.svelte-kit/types/src/routes/login/$types';

export const load: LayoutServerLoad = (async ({ cookies }: any) => {
	let sendIsLoggedToFront: Boolean;
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
