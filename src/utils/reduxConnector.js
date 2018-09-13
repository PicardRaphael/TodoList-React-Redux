import React from 'react';
import store from 'src/store';

/**
 * A wrapper component. It connects to the global state (using a Redux store).
 */
class ConnectedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.buildLocalState();
  }

  componentDidMount() {
    // Trigger a local state sync upon the global state being modified.
    store.subscribe(this.syncState);
  }

  /**
   * Sync local state with global state.
   */
  syncState = () => {
    this.setState(this.buildLocalState());
  }

  /**
   * Build a new local state (object filled with keys which values are sync with
   * the global, Redux state).
   */
  buildLocalState = () => {
    const globalState = store.getState();
    return {
      ...this.props.mapStateToProps(globalState),
      ...this.props.mapDispatchToProps(store.dispatch)
    };
  }

  render() {
    // We expect a single element in this.props.children, which must get props
    // corresponding to the wrapper's local state.
    // @see https://reactjs.org/docs/react-api.html#reactchildren
    // @see https://reactjs.org/docs/react-api.html#cloneelement
    const wrappedComponent = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { ...this.state });
    })[0];
    return <React.Fragment>{wrappedComponent}</React.Fragment>;
  }
};

/**
 * Curried component wrapper, which is:
 * - connected to the Redux store
 * - delegating its rendering to the wrapped, parameter-specified component
 *
 * Use-case
 *
 *     const MyComponent = ({ name, generateName }) => {
 *       return <div onClick={generateName}>Hello {name !}</div>;
 *     };
 *
 *     // Read from state.
 *     const mapStateToProps = state => ({
 *       name: state.username
 *     });
 *
 *     // Write to state (actions dispatching).
 *     const mapDispatchToProps = dispatch => ({
 *       generateName: () => {
 *         dispatch({ type: 'CHANGE_NAME' });
 *       }
 *     });
 *
 *     withReduxAccess(
 *       mapStateToProps,
 *       mapDispatchToProps
 *     )(MyComponent);
 */
const withReduxAccess = (
  mapStateToProps = () => {}, // how to read from global state
  mapDispatchToProps = () => {} // how to edit the global state
) => Component => {
  return (
    <ConnectedComponent
      mapStateToProps={mapStateToProps}
      mapDispatchToProps={mapDispatchToProps}
    >
      <Component />
    </ConnectedComponent>
  );
};

export default withReduxAccess;
