import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FetureActionTypes } from './action-types';

@Injectable()
export class FeatureEffects {
  constructor(private actions$: Actions) {}

  // effect1$ = createEffect(() => {
  //   this.actions$.pipe(
  //     ofType(FetureActionTypes.action1),
  //     switch
  //   )
  // })
}
