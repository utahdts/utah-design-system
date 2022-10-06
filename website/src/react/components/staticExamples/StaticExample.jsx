import PropTypes from 'prop-types';

const propTypes = {
  quickTips: PropTypes.node,
  renderedExample: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
const defaultProps = {
  quickTips: null,
};

function StaticExample({ quickTips, renderedExample, title }) {
  return (
    <div className="static-example">
      <h3 className="static-example__title">{title}</h3>
      <div className="static-example__component-wrapper">
        {renderedExample}
      </div>
      {
        quickTips
          ? <div className="static-example__quick-tips">{quickTips}</div>
          : null
      }
    </div>
  );
}

StaticExample.propTypes = propTypes;
StaticExample.defaultProps = defaultProps;

export default StaticExample;
