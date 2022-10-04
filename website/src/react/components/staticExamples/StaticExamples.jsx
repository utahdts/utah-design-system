import PropTypes from 'prop-types';

const propTypes = {
  quickTips: PropTypes.node,
  renderedExample: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
const defaultProps = {
  quickTips: null,
};

function StaticExamples({ quickTips, renderedExample, title }) {
  return (
    <div className="static-example">
      <h3>{title}</h3>
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

StaticExamples.propTypes = propTypes;
StaticExamples.defaultProps = defaultProps;

export default StaticExamples;
