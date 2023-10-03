import { BaseRestApi } from '../Base.restAPi';
import { FeatureEnum } from '../feature.enum';

export class PostRestApi extends BaseRestApi {
	constructor() {
		super(FeatureEnum.POST);
	}
}
