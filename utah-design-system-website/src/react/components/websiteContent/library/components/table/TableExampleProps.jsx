import { Form, Switch, TextInput } from '@utahdts/utah-design-system';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import TableExamplePropsShape from '../../../../../propTypesShapes/TableExamplePropsShape';

const propTypes = {
  setState: PropTypes.func.isRequired,
  state: PropTypes.shape({
    props: TableExamplePropsShape.isRequired,
  }).isRequired,
};
const defaultProps = {};

function TableExampleProps({ setState, state }) {
  // default property values
  useEffect(
    () => {
      setState((draftState) => {
        draftState.props.isFiltering = false;
        draftState.props.isPaginating = false;
        draftState.props.isSorting = false;
      });
    },
    [setState]
  );

  return (
    <Form
      // onSubmit(({ state, validationErrors }) => ... do whatever ...)
      state={state}
      setState={setState}
      className="form--stacked"
    >
      <Switch id="props.isFiltering" label="Filters" />
      <Switch id="props.isPaginating" label="Pagination" />
      <Switch id="props.isSorting" label="Sortable" />

      <TextInput id="props.className" label="Class" className="input--height-small1x" />

      <TextInput id="props.id" label="ID" className="input--height-small1x" />

    </Form>
  );
}

TableExampleProps.propTypes = propTypes;
TableExampleProps.defaultProps = defaultProps;

export default TableExampleProps;
