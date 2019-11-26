import {createAction, props} from '@ngrx/store';

export const getData = createAction('[Feature] Get Data');
export const getDataSuccess = createAction('[Feature] Get Data Success', props<{data: any}>());



