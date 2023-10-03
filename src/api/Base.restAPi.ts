import { API_SERVER } from '$env/static/private';
import { Post } from '../model/post/Post';
import { User } from '../model/user/User';
import { FeatureEnum } from './feature.enum';

export class BaseRestApi {
	protected server = API_SERVER;
	protected feature?: FeatureEnum;
	protected header = new Headers({
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('token')}`
	});

	constructor(feature: FeatureEnum) {
		this.feature = feature;
	}

	protected async getOne<T>(): Promise<T | Error> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature, {
				method: 'GET',
				headers: this.header
			});

			if (response.status === 200) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			console.log(error);
			throw new Error(`Erreur lors de la récupération du ${this.feature}`);
		}
	}

	protected async getAll<T>(): Promise<T[] | Error> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature, {
				method: 'GET',
				headers: this.header
			});

			if (response.status === 200) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			throw new Error(`Erreur lors de la récupération des ${this.feature}s`);
		}
	}

	protected async post<T>(data: T): Promise<T | Error> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature, {
				method: 'POST',
				headers: this.header,
				body: JSON.stringify(data)
			});

			if (response.status === 201) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			console.error({ error });
			throw new Error(`Erreur lors de l'ajoute de l'object : ${this.feature}`);
		}
	}

	protected async update<T>(data: T, id: string = ''): Promise<T> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature + `/${id}`, {
				method: 'PUT',
				headers: this.header,
				body: JSON.stringify(data)
			});

			if (response.status === 200 || response.status === 201) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			console.error({ error });
			throw new Error(`Erreur lors de la modification de l'object : ${this.feature}`);
		}
	}

	protected async delete<T>(id: string): Promise<T> {
		const type = BaseRestApi.getType(this.feature) as T;
		try {
			const response = await fetch(this.server + this.feature + `/${id}`, {
				method: 'DELETE',
				headers: this.header
			});

			if (response.status === 204) {
				return await response.json();
			} else {
				throw new Error(response.statusText);
			}
		} catch (error) {
			console.error({ error });
			throw new Error(`Erreur lors de la suppression de l'object : ${this.feature}`);
		}
	}

	private static getType(feature: FeatureEnum | undefined): any {
		switch (feature) {
			case FeatureEnum.USER:
				return User;
			case FeatureEnum.POST:
				return Post;
			default:
				throw new Error(`Feature ${feature} is not supported`);
		}
	}
}
