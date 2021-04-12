import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromFeature from './store/reducers';
import { FeatureEffects } from './store/feature.effects';

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    EffectsModule.forFeature([FeatureEffects]),
    StoreModule.forFeature(
      fromFeature.featureFeatureKey,
      fromFeature.fetureReducer
    ),
  ],
})
export class FeatureModule {}
