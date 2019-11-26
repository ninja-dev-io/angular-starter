import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../../common/services/http.service';
import {IApiDefinition} from '../../common/base/api.interface';
import {HttpParams} from '@angular/common/http';
import {ResponseBody} from '../../common/base/response-body.interface';
import {FeatureApi} from '../api/feature.api';

@Injectable()
export class FeatureService  {

  constructor(private restService: HttpService) {
  }

  getData(id: string): Observable<ResponseBody<any>> {
    const apiDef: IApiDefinition<any> = FeatureApi.getData();
    apiDef.options.params = new HttpParams()
      .set('id', id);
    return this.restService.sendRequest<ResponseBody<any>>(apiDef);
  }

}
