import * as FeatureActions from '../actions/feature.actions';
import {FeatureState, initialFeatureState} from '../states/feature.state';
import {Action, createReducer, on} from '@ngrx/store';

const featureReducer = createReducer(
  initialFeatureState,
  on(FeatureActions.getDataSuccess, (state, { data }) => ({ data }))
);

export function reducer(state: FeatureState | undefined, action: Action) {
  return featureReducer(state, action);
}


