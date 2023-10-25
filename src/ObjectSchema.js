export default class ObjectSchema {
  constructor() {
    this.template = [];
    this.validators = [
      (objToCheck) =>
        Object.keys(objToCheck).length === Object.keys(this.template).length,
    ];
  }

  shape(template) {
    this.template = template;
    this.validators.push((objToCheck) =>
      Object.keys(this.template).every((key) =>
        this.template[key].isValid(objToCheck[key])
      )
    );
    return this;
  }

  isValid(objToCheck) {
    console.log("##==================>", objToCheck);
    const result = this.validators.every((validator) => validator(objToCheck));
    console.log("------------------------>", result);
    return result;
  }
}
