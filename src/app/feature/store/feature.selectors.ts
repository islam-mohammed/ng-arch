import { FeatureState } from './reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectFeatureState = createFeatureSelector<FeatureState>('feature');

export const q = createSelector(selectFeatureState, (feature) => feature.model);
