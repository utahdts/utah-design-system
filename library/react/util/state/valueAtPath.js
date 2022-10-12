import split from 'lodash/split';

export default function valueAtPath({ object, path }) {
  return split(path, '.').reduce((obj, field) => ((field && obj) ? obj[field] : obj), object);
}
