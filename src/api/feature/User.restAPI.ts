import { BaseRestApi } from '../Base.restAPi';
import { FeatureEnum } from '../feature.enum';

export class UserRestApi extends BaseRestApi {
	constructor() {
		super(FeatureEnum.USER);
	}
}
