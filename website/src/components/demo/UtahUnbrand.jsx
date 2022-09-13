import React from 'react';
import PropTypes from 'prop-types';
import joinClassNames from '../../util/joinClassNames';

const propTypes = {
  className: PropTypes.string,
};
const defaultProps = {
  className: undefined,
};

function UtahUnbrand({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234 52" className={joinClassNames(['utah-brand', className])}>
      <g>
        <circle cx="26" cy="26" r="26" />
        <path d="M22.978,8.151q-9.623,0-14.295-5.584T4.012-14.748v-23.6H16.094v25.007q0,6.111,1.651,8.6a5.821,5.821,0,0,0,5.233,2.494,6,6,0,0,0,5.3-2.494Q30-7.232,30-13.343V-38.35h11.66v23.6q0,11.731-4.566,17.315T22.978,8.151Zm37.229-.843V-28.235H48.125V-38.35H84.37v10.115H72.289V7.308Zm39.9-22.2-.773,3.161h8.429l-.773-3.161q-.843-3.3-1.686-7.165t-1.686-7.305h-.281q-.773,3.512-1.58,7.34T100.1-14.889ZM82.544,7.308,96.452-38.35h14.611L124.971,7.308H112.187l-2.248-9.694H97.155L94.907,7.308Zm46.782,0V-38.35h12.082v17h13.627v-17h12.082V7.308H155.035V-10.815H141.408V7.308Z" transform="translate(65.883 40.35)" />
      </g>
    </svg>
  );
}

UtahUnbrand.propTypes = propTypes;
UtahUnbrand.defaultProps = defaultProps;

export default UtahUnbrand;
