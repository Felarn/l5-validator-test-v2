export default class ArraySchema {
  constructor() {
    this.validators = [(value) => Array.isArray(value)];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  maxDepth(depth) {
    const depthCheck = (value, depthAllowed) => {
      console.log(value, depthAllowed);
      if (!Array.isArray(value)) return true;
      if (depthAllowed < 0) return false;
      return value.every((elem) => depthCheck(elem, depthAllowed - 1));
    };

    this.validators.push((arrayToCheck) => depthCheck(arrayToCheck, depth));
    return this;
  }
}
