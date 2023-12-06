import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ cookies: cookies, request }) => {
        const data = await request.formData();
        console.log();

    }
}
