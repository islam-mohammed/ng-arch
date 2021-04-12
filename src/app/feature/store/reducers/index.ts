import { ModelName } from '@app/models/model';
import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { FetureActionTypes } from '../action-types';

export const featureFeatureKey = 'feature';

export interface FeatureState {
  model?: ModelName;
}

export const initFeatureState: FeatureState = {
  model: undefined,
};

export const fetureReducer = createReducer(
  initFeatureState,
  on(FetureActionTypes.action1, (state, action) => {
    return {
      model: action.model,
    };
  })
);
