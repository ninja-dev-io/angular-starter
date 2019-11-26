import {IApiDefinition} from '../../common/base/api.interface';
import {HttpObservers, Methods, ResponseTypes} from '../../common/constants/constants';

export class FeatureApi {
  public static getData: () => IApiDefinition<any> = () => {
    return {
       method: Methods.GET,
       path: 'feature',
       options: {
         responseType: ResponseTypes.JSON,
         observe: HttpObservers.BODY
       }
    };
  }
}
