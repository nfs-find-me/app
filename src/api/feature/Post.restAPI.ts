import type { Cookies } from '@sveltejs/kit';
import { BaseRestApi } from '../Base.restAPi';
import { BasePrivateRestApi } from '../BasePrivate.restAPI';
import { FeatureEnum } from '../feature.enum';
import { HTTP } from '../../enum/HTTP.enum';
import { format } from 'path';

export class PostRestApi extends BasePrivateRestApi {
	constructor(cookies: Cookies) {
		super(FeatureEnum.POST, cookies);
	}
	public async getOne(id: string) {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: id
		});
		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async getAll() {
		const response: Response | Error = await this.request({
			method: HTTP.GET
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async sendFormData(formData: FormData) {
		const response: Response | Error = await this.requestFormData(formData);
	}

	public async getByCurrentUser(id: string) {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: 'user/' + id
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async create(formData: FormData) {
		const response: Response | Error = await this.requestFormData(formData);

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async searchPost(search: string) {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: 'search/' + search
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async getMostRecentPost() {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: 'filters/most-recent'
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async getOldestPost() {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: 'filters/oldest'
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async getMostViewedPost() {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: 'filters/most-viewed'
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async getMostLikedPost() {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: 'filters/most-liked'
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async getMostPopularPost() {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: 'filters/most-popular'
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}

	public async getFollowingPost(userId: string) {
		const response: Response | Error = await this.request({
			method: HTTP.GET,
			url: 'filters/following/' + userId
		});

		if (response instanceof Response) {
			return response.json();
		}
		throw response as Error;
	}
}
