import { AuthRestApi } from '../../api/feature/Auth.restAPI';
import type { User } from '../../model/user/User';

const api = new AuthRestApi();

export async function register(user: User) {
	return await api.register(user);
}
