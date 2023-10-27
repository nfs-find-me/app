export type ViewType = {
	userId: string;
	createdAt: Date;
};
export type PictureType = {
	url: string;
	thumbnail_url: string;
};
export type GeolocType = {
	posX: number;
	posY: number;
	zip: number;
	country: string;
	address: string;
};
export type UserType = {
	_id: string;
	username?: string;
	email?: string;
	password?: string;
	friends?: string[] | UserType[];
	followers?: string[] | UserType[];
	following?: string[] | UserType[];
	roles?: string[];
	score?: number;
};
export type PostType = {
	_id: string;
	userId?: string;
	user?: UserType;
	view: ViewType[];
	like: ViewType[];
	verified: boolean;
	createdAt: Date;
	updatedAt: Date;
	picture?: PictureType;
	geolocation?: GeolocType;
};
