import { connect } from 'react-redux';

import Form from 'src/components/Form';
import { addTask } from 'src/store/actions';

// Write to state.
const mapDispatchToProps = dispatch => ({
  addTask: label => {
    const action = addTask(label);
    dispatch(action);
  }
});

const FormContainer = connect(
  null,
  mapDispatchToProps
)(Form);

export default FormContainer;
