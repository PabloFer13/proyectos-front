import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LogIn from './containers/LogIn';
import Register from './containers/Register';
import Layout from './containers/Layout';
import Routes from './routes';
import { appActions } from './redux/actions';

class App extends Component {
  componentDidMount() {
    const { autoLogin } = this.props;
    autoLogin();
  }

  render() {
    const { loggedIn, newUser } = this.props;
    if (loggedIn) {
      return (
        <Layout>
          <Routes />
        </Layout>
      );
    }

    return newUser ? <Register /> : <LogIn />;
  }
}

const mapStateToProps = ({ app }) => {
  const { status: loggedIn, newUser } = app;
  return { loggedIn, newUser };
};

const mapDispatchToProps = dispatch => {
  const { autoLogin } = appActions;
  return bindActionCreators({ autoLogin }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
