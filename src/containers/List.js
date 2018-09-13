import { connect } from 'react-redux';

import List from 'src/components/List';
import { orderedTasks } from 'src/store/selectors';

// Read from state.
const mapStateToProps = state => ({
  tasks: orderedTasks(state.tasks)
});

const ListContainer = connect(
  mapStateToProps
)(List);

export default ListContainer;
