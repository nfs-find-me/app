import type { Actions, PageServerLoad } from './$types';
import path from 'path';
import fs from 'fs/promises';
import { fail } from '@sveltejs/kit';
import { Post, PostGeolocation } from '../../../model/post/Post';
import { CookiesHelper } from '../../../helpers/cookies/cookies.helper';
import { log } from 'console';
import { PostRestApi } from '../../../api/feature/Post.restAPI';
import { PostService } from '$lib/services/postService';
export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies: cookies, request }) => {
		const formData = await request.formData();
		const cookiesHelper = new CookiesHelper(cookies);
		const userId = cookiesHelper.getUserId(cookies);
		let file = (await formData.get('file')?.valueOf()) as File;
		const data: Post = new Post();
		const geoloc: string = formData.get('geoloc') as string;
		data.geolocation.posX = Number(formData.get('posX') as string);
		data.geolocation.posY = Number(formData.get('posY') as string);
		data.userId = userId;
		data.geolocation.address = formData.get('address') as string;
		data.geolocation.zip = Number(formData.get('zip') as string);
		data.geolocation.country = 'France';
		data.geolocation.city = formData.get('city') as string;

		const dataStringify = JSON.stringify(data);
		const sendFormData = new FormData();
		sendFormData.append('file', file);
		sendFormData.append('data', dataStringify);

		const api = new PostRestApi(cookies);

		if (userId) {
			try {
				await new PostService(cookies).sendFormData(sendFormData);
			} catch (error) {
				console.error({ error });
			}
		} else {
			return { errorMessage: 'Vous devez être connecté.' };
		}
	}
};
