import type { Cookies } from '@sveltejs/kit';
import { BaseRestApi } from '../Base.restAPi';
import { BasePrivateRestApi } from '../BasePrivate.restAPI';
import { FeatureEnum } from '../feature.enum';

export class PostRestApi extends BasePrivateRestApi {
	constructor(cookies: Cookies) {
		super(FeatureEnum.POST, cookies);
	}
}
