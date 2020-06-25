const angle = /^(\+|-)?\d*\.?\d+(e(\+|-)?\d+)?(deg|rad|grad|turn)$/;
// const number = /^(\+|-)?\d*\.?\d+(e(\+|-)?\d+)?\d+)$/;

export function CheckAngle(str) {
  return angle.test(str);
}
