export default {
  // compares dates as Date() objects
  // dates represented by an ISO string should use the STRING enum value
  DATE: 'date',
  // compares numbers (does do Number(fieldValue)) conversion so it is safe to pass strings as numbers)
  NUMBER: 'number',
  // does simple localeCompare() string comparison; is safe for null strings
  STRING: 'string',
};
