import { joinClassNames, stringToId } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  quickTips: PropTypes.node,
  renderedExample: PropTypes.node.isRequired,
  title: PropTypes.string,
};
const defaultProps = {
  className: null,
  id: null,
  quickTips: null,
  title: null,
};

function StaticExample({
  className,
  id,
  quickTips,
  renderedExample,
  title,
}) {
  return (
    <div className={joinClassNames('static-example', className)} id={id}>
      {
        title
          ? <h3 id={stringToId(title)} className="static-example__title">{title}</h3>
          : null
      }
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
