export const defaultTooltipAnimations = {
  transformLeft: {
    keyframes:[
      {  property: "opacity",
        value:  "1",
        offset: 0
      },
      {  property: "transform",
        value: "translate(-7px, 0px)",
        offset: .4
      },
      {  property: "transform",
        value: "translate(-3px, 0px)",
        offset: .8
      },
      {  property: "transform",
        value: "translate(0px, 0px)",
        offset: 1
      }]
  },
  transformRight: {
    keyframes:[
      {  property: "opacity",
        value:  "1",
        offset: 0
      },
      {  property: "transform",
        value: "translate(7px, 0px)",
        offset: .4
      },
      {  property: "transform",
        value: "translate(3px, 0px)",
        offset: .8
      },
      {  property: "transform",
        value: "translate(0px, 0px)",
        offset: 1
      }]
  },
  transformBottom: {
    keyframes:[
      {  property: "opacity",
        value:  "1",
        offset: 0
      },
      {  property: "transform",
        value: "translate(0px, 7px)",
        offset: .4
      },
      {  property: "transform",
        value: "translate(0px, 3px)",
        offset: .8
      },
      {  property: "transform",
        value: "translate(0px, 0px)",
        offset: 1
      }]
  },
  transformTop: {
      keyframes:[
        {  property: "opacity",
          value:  "1",
          offset: 0
        },
  {  property: "transform",
    value: "translate(0px, -7px)",
    offset: .4
  },
  {  property: "transform",
    value: "translate(0px, -3px)",
    offset: .8
  },
  {  property: "transform",
    value: "translate(0px, 0px)",
    offset: 1
  }]
  },
  fadeInOut: {
    keyframes:[
      {  property: "opacity",
        value: "0.1",
        offset: 0
      },
      {  property: "opacity",
        value:  "1",
        offset: 1
      }]
  },
  rotateInOut: {
    keyframes:[
      {  property: "opacity",
        value:  "1",
        offset: .1
      },
      {  property: "transform",
        value: "rotate(0deg)",
        offset: .1
      },
      {  property: "transform",
        value: "rotate(10deg)",
        offset: .4
      },
      {  property: "transform",
        value: "rotate(0deg)",
        offset: 1
      }]
  }
}
