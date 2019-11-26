import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {FeatureService} from '../services/feature.service';
import {ResponseBody} from '../../common/base/response-body.interface';
import * as CryptoCurrencyActions from '../actions/feature.actions';

import {AppState} from '../../app-state';
import {Store} from '@ngrx/store';

@Injectable()
export class FeatureEffects {

  @Effect()
  getData = createEffect(() =>
    this.actions.pipe(
      ofType('[Feature] Get Data'),
      switchMap((action) => this.featureService.getData(action['id'])),
        switchMap((responseBody: ResponseBody<any>) => of(CryptoCurrencyActions.getDataSuccess({data: responseBody.data})))
    )
  );

  constructor(
    private store: Store<AppState>,
    private actions: Actions,
    private featureService: FeatureService
  ) {
  }
}
