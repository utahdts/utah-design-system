import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import joinClassNames from '../../../util/joinClassNames';
import TabGroupContext from './TabGroupContext';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tagName: PropTypes.string,
};
const defaultProps = {
  className: null,
  tagName: 'div',
};

function TabGroupTitle({ children, className, tagName: TagName }) {
  const { tabGroupId } = useContext(TabGroupContext);
  return (
    <TagName id={`tab-group-${tabGroupId}`} className={joinClassNames('tag-group__title', className)}>
      {children}
    </TagName>
  );
}

TabGroupTitle.propTypes = propTypes;
TabGroupTitle.defaultProps = defaultProps;

export default TabGroupTitle;
