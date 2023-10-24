// @ts-ignore
import type { PageServerLoad } from './$types';
// @ts-ignore
export const load = (async ({ cookies }) => {
	const curentJwt = cookies.get('jwt');
	if (!curentJwt) {
		return;
	}

	const refreshJwtToken = '';

	return {};
}) satisfies PageServerLoad;
