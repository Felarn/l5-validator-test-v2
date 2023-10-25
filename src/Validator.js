import ArraySchema from "./ArraySchema.js";
import NumberSchema from "./NumberSchema.js";
import ObjectSchema from "./ObjectSchema.js";
import StringSchema from "./StringSchema.js";

export default class Validator {
  array() {
    return new ArraySchema();
  }

  number() {
    return new NumberSchema();
  }

  object() {
    return new ObjectSchema();
  }

  string() {
    return new StringSchema();
  }
}
