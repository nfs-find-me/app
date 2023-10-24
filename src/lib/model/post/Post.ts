export class Post {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	
	userId?: string;
	picture?: string;
	description?: string;
	geolocation?: PostGeolocation;
	view?: PostView;
	like?: PostLike;
	verified: boolean = false;
}

export interface PostGeolocation {
	posX: number;
	posY: number;
	zip?: number;
	city?: string;
	country?: string;
	address?: string;
}

export interface PostView {
	userId: string;
	createdAt: Date;
}

export interface PostLike {
	userId: string;
	createdAt: Date;
}