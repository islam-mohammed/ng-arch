import { ModelName } from '@app/models/model';
import { createAction, props } from '@ngrx/store';

export enum featureActions {
  ACTION_1 = '[Action 1 Src Page] User Acrion 1',
  ACTION_2 = '[Action 2 Src Page] User Acrion 2',
}

export const action1 = createAction(
  featureActions.ACTION_1,
  props<{ model: ModelName }>()
);

export const action2 = createAction(
  featureActions.ACTION_2,
  props<{ model: ModelName }>()
);

// this.store.dispatch(action1({model: {}}))
