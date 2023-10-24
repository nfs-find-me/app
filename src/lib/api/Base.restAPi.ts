import { API_SERVER } from '$env/static/private';
import { Post } from '../model/post/Post';
import { User } from '../model/user/User';
import { FeatureEnum } from './feature.enum';

export abstract class BaseRestApi {
	protected server = API_SERVER;
	protected feature?: FeatureEnum;

	constructor(feature: FeatureEnum) {
		this.feature = feature;
	}

	protected static getType(feature: FeatureEnum | undefined): any {
		switch (feature) {
			case FeatureEnum.USER:
				return User;
			case FeatureEnum.AUTH:
				return User;
			case FeatureEnum.POST:
				return Post;
			default:
				throw new Error(`Feature ${feature} is not supported`);
		}
	}
}
