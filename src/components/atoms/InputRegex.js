/* eslint-disable no-useless-escape */
const num = `(\\+|-)?\\d*\\.?\\d+(e(\\+|-)?\\d+)?`;
const lengthUnits = `(cap|ch|em|ex|ic|lh|rem|rlh|vh|vw|vi|vb|vmin|vmax|px|cm|mm|Q|in|pc|pt|mozmm)`;
const angleUnits = `(deg|rad|grad|turn)`;
const length = `${num}${lengthUnits}`;
const angle = `${num}${angleUnits}`;
const lengthPercentage = `${num}(${lengthUnits}|%)`;
const comma = `\\s*,\\s*`;

const matrix = new RegExp(String.raw`^(${num}${comma}){5}(${num})\s*$`);
const matrix3d = new RegExp(String.raw`^(${num}${comma}){15}(${num})\s*$`);
const lengthOne = new RegExp(String.raw`^${length}|0$`);
const rotate3d = new RegExp(String.raw`^((${num}${comma}){3}(${angle})\s*)|0$`);
const angleOne = new RegExp(String.raw`^(${angle})|0$`);
const threeNumbers = new RegExp(String.raw`^(${num}${comma}){2}${num}$`);
const oneOrTwoNumbers = new RegExp(String.raw`^${num}(${comma}${num})?$`);
const oneOrTwoAngles = new RegExp(String.raw`^(${angle}${comma}${angle})|0$`);
const oneOrTwoLengthPercentages = new RegExp(
  String.raw`^(${angle}(${comma}${angle}))|0(${comma}0)?$`
);
const oneLengthPercentage = new RegExp(String.raw`^${lengthPercentage}|0$`);
const TwoLengthPercentagesAndLength = new RegExp(
  String.raw`^((${lengthPercentage}|0)${comma}(${lengthPercentage}|0)${comma}(${length}|0))|0$`
);

// const matrix 6 numbers separated by comma
// const matrix3d 16 numbers separated by comma
// const perspective length 1
// const rotate angle 1
// const rotate3d 3 number, 1 angle or 0
// scalexyz - 1 number
// skewXY - 1 angle or 0
// scale3d - 3 numbers
// scale - 1 or 2 numbers
// skew - 1 or 2 angles or 0
//  translate 1 or 2 length-percentage or 1 or 2 "0"
//  translate3d <length> or <percentage> and <length> or <percentage> and <length>
//  translateXYZ <length> or <percentage>

export function CheckInput(regex, str) {
  switch (regex) {
    case "matrix":
      return matrix.test(str);
    case "matrix3d":
      return matrix3d.test(str);
    case "lengthOne":
      return lengthOne.test(str);
    case "rotate3d":
      return rotate3d.test(str);
    case "angleOne":
      return angleOne.test(str);
    case "oneOrTwoNumbers":
      return oneOrTwoNumbers.test(str);
    case "threeNumbers":
      return threeNumbers.test(str);
    case "oneOrTwoAngles":
      return oneOrTwoAngles.test(str);
    case "oneOrTwoLengthPercentages":
      return oneOrTwoLengthPercentages.test(str);
    case "TwoLengthPercentagesAndLength":
      return TwoLengthPercentagesAndLength.test(str);
    case "oneLengthPercentage":
      return oneLengthPercentage.test(str);
    default:
      console.log("No regex found");
      break;
  }
}
