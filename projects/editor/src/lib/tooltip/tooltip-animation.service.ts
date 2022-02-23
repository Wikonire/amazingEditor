import { Injectable } from '@angular/core';
import {defaultTooltipAnimations} from './default-tooltip-animations';
import {TooltipDefaultAnimation, TooltipPlacement, TooltipShowHideAnimation} from './tooltip.types';
import {
  animation,
  AnimationBuilder,
  AnimationFactory,
  AnimationMetadata,
  AnimationMetadataType,
  AnimationPlayer
} from '@angular/animations';
import {AeAnimationService} from '../animation/animation.service';
import {AeAnimationKeyframeStep, AeAnimationKeyframeSteps} from '../animation/animation-keyframe-step';

@Injectable({ providedIn: 'root'})
export class AeTooltipAnimationService {

  constructor(private animationService: AeAnimationService, private animationBuilder: AnimationBuilder) { }

  private tooltipAnimations = defaultTooltipAnimations;

  public createTooltipAnimationPlayer(animation: TooltipShowHideAnimation, placement: TooltipPlacement, duration:number, tooltipElement: HTMLElement): AnimationPlayer {
    let metadata: AnimationMetadata[];
    let steps: AeAnimationKeyframeStep[];
     if(typeof animation === 'string') {
       steps = this.tooltipAnimations[animation].keyframes;
       metadata = this.animationService.getAnimationMetadataList(steps, duration, {tokens: '*'});
       return this.getAnimationPlayer(metadata,tooltipElement);
    } else if (typeof animation === 'object') {
       metadata = animation as AnimationMetadata[];
        return this.getAnimationPlayer(metadata,tooltipElement);
     } else {
      throw Error(`could not create animation for ${animation}`)
    }
  }



  private getAutoAnimationType(placement: TooltipPlacement): TooltipDefaultAnimation {
    let autoAnimationType: TooltipShowHideAnimation = 'transformBottom';
    switch (placement) {
      case TooltipPlacement.right: {
        autoAnimationType = 'transformRight';
        break;
      }
      case TooltipPlacement.left: {
        autoAnimationType = 'transformLeft';
        break;
      }
      case TooltipPlacement.top: {
        autoAnimationType = 'transformTop';
        break;
      }
      case TooltipPlacement.bottom: {
        autoAnimationType = 'transformBottom';
        break;
      }
    }
    return autoAnimationType;
  }



  private getAnimationPlayer(keyframes: AnimationMetadata[], element: HTMLElement):AnimationPlayer {
    const animationFactory = this.animationBuilder.build(keyframes);
    return animationFactory.create(element);
  }
}
