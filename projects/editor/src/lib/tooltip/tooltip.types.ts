import {AnimationMetadata} from '@angular/animations';

export enum TooltipPlacement {
  'top'=  'top',
'right' = 'right',
  'bottom'= 'bottom',
  'left' = 'left'
};
export type TooltipCloseKeys = 'escape' | 'space'|'tab';
export type TooltipSemantic = 'label'|'descriptive';
export type TooltipShowHideAnimation = 'transformLeft'|'transformRight'|'transformBottom'|'transformTop'|'fadeInOut'|'rotateInOut'| { auto: TooltipPlacement }|AnimationMetadata[];
export type TooltipDefaultAnimation = 'transformLeft'|'transformRight'|'transformBottom'|'transformTop'|'fadeInOut'|'rotateInOut';
