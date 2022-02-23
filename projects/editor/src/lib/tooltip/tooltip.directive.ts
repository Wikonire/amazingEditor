import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {AnimationBuilder, AnimationMetadata, AnimationPlayer} from '@angular/animations';
import {TooltipCloseKeys, TooltipPlacement, TooltipSemantic, TooltipShowHideAnimation} from './tooltip.types';
import {AeTooltipAnimationService} from './tooltip-animation.service';
import {AeAnimationKeyframeStep} from '../animation/animation-keyframe-step';
import {defaultTooltipAnimations} from './default-tooltip-animations';
import {AeAnimationService} from '../animation/animation.service';


@Directive({
  selector: '[aeTooltip]',
})
export class AeTooltipDirective {
  @Input('aeTooltip') tooltipText: string = '';
  @Input() placement: TooltipPlacement = TooltipPlacement.right;
  @Input() showArrow: boolean = true;
  @Input() animationDuration: number = 800;
  @Input() showDelay: number = 800;
  @Input() hideDelay: number = 800;
  @Input() positionOffset: number = 10;
  @Input() visibleByFocus: boolean = true;
  @Input() closeByPress: TooltipCloseKeys[] = ['escape', 'space'];
  @Input() tooltipSemantic: TooltipSemantic = 'descriptive';
  @Input() tooltipShowHideAnimation: TooltipShowHideAnimation = 'fadeInOut';

  private aeTooltip?: HTMLElement;
  private animationPlayer?: AnimationPlayer;

  constructor(private animationBuilder: AnimationBuilder, private animationService: AeAnimationService, private elementRef: ElementRef, private renderer: Renderer2, private overlayPositionBuilder: OverlayPositionBuilder,
              private overlay: Overlay) {
  }

  @HostListener('mouseenter') onMouseEnter() {
      this.setupTooltip();
    if (this.tooltipText !== '') {
      this.show();
    }
  }

  @HostListener(`window:keyup`, ['$event']) onKeyUpHandler(event: KeyboardEvent) {
    if (this.closeByPress.length > 0) {
      const isCloseKey = this.closeByPress.find((key: string) => {
        return key.toLowerCase() === event.code.toLowerCase();
      });
      if (isCloseKey) {
        this.hide();
      }
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
      this.hide();
  }

  private setupTooltip() {
    this.createTooltip();
    this.setPosition();
    this.addArrow(this.showArrow);
    this.createAnimation(this.tooltipShowHideAnimation);
  }

  private show() {
    window.setTimeout(() => {
      this.renderer.appendChild(this.elementRef.nativeElement, this.aeTooltip);
      this.addArrow(this.showArrow);
      if (this.tooltipShowHideAnimation) {
        this.animationPlayer?.play();
      }
    }, this.showDelay);
  }

  private hide() {
    window.setTimeout(() => {
      if (this.aeTooltip) {
        this.renderer.removeChild(this.elementRef.nativeElement, this.aeTooltip);
      }
    }, this.hideDelay);
  }

  private createTooltip(): void {
    this.aeTooltip = this.renderer.createElement('span');
    this.addTooltipText(this.aeTooltip, this.tooltipText);
    this.renderer.appendChild(this.elementRef.nativeElement, this.aeTooltip);
    this.renderer.addClass(this.aeTooltip, 'ae-tooltip');
  }

  private addArrow(showArrow: boolean) {
    if (showArrow) {
      this.renderer.addClass(this.aeTooltip, `ae-tooltip-${this.placement}`);
    }
  }

  private addTooltipText(tooltipElement?: HTMLElement, text?: string) {
    if (tooltipElement && text) {
      this.renderer.appendChild(
        this.aeTooltip,
        this.renderer.createText(this.tooltipText) // textNode
      );
    }
  }

  private tooltipAnimations = defaultTooltipAnimations;

  private createAnimation(animationType: TooltipShowHideAnimation) {
    let animation = animationType;
    if (this.aeTooltip) {
      let metadata: AnimationMetadata[] = [];
      let steps: AeAnimationKeyframeStep[];
      if (typeof animation === 'string') {
        steps = this.tooltipAnimations[animation].keyframes;
        console.log(steps)
        console.log(animation)
        metadata = this.animationService.getAnimationMetadataList(steps, this.animationDuration, {tokens: {'opacity': '1'}});
      } else if (typeof animation === 'object') {
        metadata = animation as AnimationMetadata[];
      }
      const animationFactory = this.animationBuilder.build(metadata);
      this.animationPlayer = animationFactory.create(this.aeTooltip);
    }
  }

  private setupPlacement(tooltipRectangle?: DOMRect,
                         hostRectangle?: DOMRect,
                         placement?: TooltipPlacement,
                         scrollPosition: number = 0) {
    let top: number = 0;
    let left: number = 0;
    if (tooltipRectangle && hostRectangle) {
      switch (placement) {
        case TooltipPlacement.bottom: {
          top = hostRectangle.bottom + this.positionOffset;
          left = hostRectangle.left + (hostRectangle.width - tooltipRectangle.width) / 2;
          break;
        }
        case TooltipPlacement.top: {
          top = hostRectangle.top - tooltipRectangle.height - this.positionOffset;
          left = hostRectangle.left + (hostRectangle.width - tooltipRectangle.width) / 2;
          break;
        }
        case TooltipPlacement.left: {
          top = hostRectangle.top + (hostRectangle.height - tooltipRectangle.height) / 2;
          left = hostRectangle.left - tooltipRectangle.width - this.positionOffset;
          break;
        }
        case TooltipPlacement.right: {
          top = hostRectangle.top + (hostRectangle.height - tooltipRectangle.height) / 2;
          left = hostRectangle.right + this.positionOffset;
          break;
        }
      }
      this.renderer.setStyle(this.aeTooltip, 'top', `${top + scrollPosition}px`);
      this.renderer.setStyle(this.aeTooltip, 'left', `${left}px`);
    }
  }



  setPosition() {
    const hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    const tooltipPosition = this.aeTooltip?.getBoundingClientRect();
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.setupPlacement(tooltipPosition, hostPos, this.placement, scrollPosition);
  }
}
