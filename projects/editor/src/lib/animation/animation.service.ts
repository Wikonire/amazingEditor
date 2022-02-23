import { Injectable } from '@angular/core';
import {animate, AnimationBuilder, AnimationMetadata, keyframes, style} from '@angular/animations';
import {AeAnimationKeyframeStep, Styles} from './animation-keyframe-step';

@Injectable({
  providedIn: 'root'
})
export class AeAnimationService {

  constructor() { }


  public getAnimationMetadataList(steps: AeAnimationKeyframeStep[], duration: number = 500, startStyles: Styles):AnimationMetadata[] {
    let keyframeSteps = [];
    for (let i = 0; i < steps.length; i++) {
      keyframeSteps.push(style({[steps[i].property]:steps[i].value, offset: steps[i].offset}))
    }
    return [style(startStyles.tokens), animate(`${duration}ms`, keyframes(keyframeSteps))];
  }
}
