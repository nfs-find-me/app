import { Role } from '../../enum/Role.enum';

export class User {
	userId?: string;
	createdAt?: Date;
	updatedAt?: Date;

	username?: string;
	email?: string;
	password?: string;
	avatar?: string;
	friends?: User[];
	roles?: Role[] = [Role.USER, Role.UNVERIFIED];
	score?: number;
	biography?: string;
}
