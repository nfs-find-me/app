export class Post {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;

	userId?: string;
	picture?: Picture;
	description?: string;
	geolocation: PostGeolocation;
	view?: PostView[];
	like?: PostLike[];
	verified: boolean = false;

	constructor() {
		this.geolocation = new PostGeolocation();
	}
}

export class PostGeolocation {
	posX: number;
	posY: number;
	zip?: number;
	city?: string;
	country?: string;
	address?: string;

	constructor() {
		this.posX = 0;
        this.posY = 0;
	}
}

export interface PostView {
	userId: string;
	createdAt: Date;
}

export interface PostLike {
	userId: string;
	createdAt: Date;
}

export interface Picture {
	thumbnail_url: string;
	url: string;
}
