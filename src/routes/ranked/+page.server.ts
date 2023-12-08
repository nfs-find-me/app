import { UserService } from '$lib/services/userService';
import { CookiesHelper } from '../../helpers/cookies/cookies.helper';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = (async ({ cookies }) => {
	return {
		user: new UserService(cookies).getAllRanks(),
		userId: new CookiesHelper(cookies).getUserId(cookies)
	};

}) satisfies PageServerLoad;


