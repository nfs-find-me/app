import { AuthRestApi } from '../api/feature/Auth.restAPI';
import { UserRestApi } from '../api/feature/User.restAPI';
import { CookiesHelper } from '../helpers/cookies/cookies.helper';
import type { PageServerLoad } from './$types';

export const load:PageServerLoad = (async ({ cookies }) => {

    const api = new UserRestApi(cookies);
    const cookiesHelper = new CookiesHelper(cookies);
    const userId = cookiesHelper.getUserId(cookies);

    // @ts-ignore
    const user = await api.getOne(userId);
    return {user: user.data};
    
}) satisfies PageServerLoad;