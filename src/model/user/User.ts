import { Role } from '../../enum/Role.enum';

export class User {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;

	username?: string;
	email?: string;
	password?: string;
	avatar?: string;
	followers?: User[];
	following?: User[];
	roles?: Role[] = [Role.USER, Role.UNVERIFIED];
	score?: number;
	biography?: string;
}
