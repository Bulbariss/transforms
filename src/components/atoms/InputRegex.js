const angle = /^(\+|-)?\d*\.?\d+(e(\+|-)?\d+)?(deg|rad|grad|turn)$/; // add or 0
// const number = /^(\+|-)?\d*\.?\d+(e(\+|-)?\d+)?\d+)$/;
// const matrix 6 numbers separated by comma
// const matrix3d 16 numbers separated by comma
// const perspective length 1
// const rotate angle 1
// const rotate3d 3 number, 1 angle or 0
// scale - 1 or 2 numbers
// scale3d - 3 numbers
// scalexyz - 1 number
// skew - 1 or 2 angles or 0
// skewXY - 1 angle or 0
//  translate 1 or 2 length-percentage or 1 or 2 "0"
//  translate3d <length> or <percentage> and <length> or <percentage> and <length>
//  translateXYZ <length> or <percentage>
export function CheckAngle(str) {
  return angle.test(str);
}
