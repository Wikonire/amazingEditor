export interface AeAnimationKeyframeStep {
  property: string;
  value: string;
  offset: number;
}
export interface AeAnimationKeyframeSteps {
  [animationName:string]: AeAnimationKeyframeStep[];
}

export interface Styles {
  tokens:"*" | {[p: string]: string | number} | ("*" | {[p: string]: string | number})[]
}
