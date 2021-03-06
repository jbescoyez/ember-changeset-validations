import buildMessage from 'ember-changeset-validations/utils/validation-errors';
import { validate } from 'ember-validators';

export default function validateExclusion(options = {}) {
  if (options.list) {
    options.in = options.list;
  }

  return (key, value) => {
    let result = validate('exclusion', value, options, null, key);
    return (result === true) ? true : buildMessage(key, result);
  };
}
