import { func, string } from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from './redux/actions';

const App = props => {
  App.propTypes = {
    name: string.isRequired,
    setUserName: func.isRequired,
  };

  const [tmpName, setTmpName] = useState('');

  return (
    <>
      <div>Hello, {props.name}</div>
      <input type='text' onChange={e => setTmpName(e.target.value)} />
      &nbsp;&nbsp;
      <button onClick={() => props.setUserName({ name: tmpName })}>Submit</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    name: state.userState.name,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setUserName: actions.setUserName,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);