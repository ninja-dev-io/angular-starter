import {AppState} from '../../app-state';
import {FeatureState} from '../states/feature.state';
import {createSelector} from '@ngrx/store';

export const selectFeatureState = (state: AppState) => state.featureState;

export const selectData = createSelector(
  selectFeatureState,
  (state: FeatureState) => state.data
)
