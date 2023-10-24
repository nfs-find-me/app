import { BasePrivateRestApi } from '../BasePrivate.restAPI';
import { FeatureEnum } from '../feature.enum';

export class UserRestApi extends BasePrivateRestApi {
	constructor() {
		super(FeatureEnum.USER);
	}
}
