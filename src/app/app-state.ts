import {FeatureState, initialFeatureState} from './feature/states/feature.state';
import {RouterReducerState} from '@ngrx/router-store';

export interface AppState {
  routerState?: RouterReducerState;
  featureState: FeatureState;
}

export const initialState: AppState = {
  featureState: initialFeatureState,
};
