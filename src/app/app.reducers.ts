import {ActionReducerMap} from '@ngrx/store';
import {AppState} from './app-state';
import {routerReducer} from '@ngrx/router-store';
import * as CryptoCurrencyReducer from './feature/reducers/feature.reducer';
import * as CryptoCurrencyDetailsReducer from './feature/reducers/cryptocurrency-details.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  routerState: routerReducer,
  cryptoCurrencyState: CryptoCurrencyReducer.reducer,
  cryptoCurrencyDetailsState: CryptoCurrencyDetailsReducer.reducer,
}
