import identity from 'lodash/identity';

export default (classNames = []) => classNames.filter(identity).join(' ');
