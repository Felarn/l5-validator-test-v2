export default class StringSchema {
  constructor() {
    this.validators = [(value) => typeof value === "string"];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  startsFromUpperCase() {
    this.validators.push((str) => {
      console.log(`=========================>${str}<===`);
      return (
        str.length > 0 &&
        str[0] === str[0].toUpperCase() &&
        str[0] !== str[0].toLowerCase()
      );
    });
    return this;
  }

  length(length) {
    this.validators.push((str) => str.length === length);
    return this;
  }

  hasExclamation() {
    this.validators.push((str) => str.includes("!"));
    return this;
  }
}
