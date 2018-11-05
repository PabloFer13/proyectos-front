import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appActions } from '../../redux/actions';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeForm = this.changeForm.bind(this);
  }

  handleInputs(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { logIn } = this.props;
    const { email, password } = this.state;
    logIn({ email, password });
  }

  changeForm() {
    const { toggleLogInForm } = this.props;
    toggleLogInForm(true);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="container-fluid">
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ height: '100vh' }}
        >
          <div className="card">
            <div className="card-header">
              <h4>Log In</h4>
            </div>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={email}
                    onChange={this.handleInputs}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Constraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={password}
                    onChange={this.handleInputs}
                  />
                </div>
                <div className="d-flex justify-content-around">
                  <div>
                    <button type="submit" className="btn btn-primary">
                      Iniciar Sesion
                    </button>
                  </div>
                  <div>
                    <span
                      className="align-middle"
                      onClick={this.changeForm}
                      style={{ cursor: 'pointer' }}
                    >
                      Crear Cuenta
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const { logIn, toggleLogInForm } = appActions;
  return bindActionCreators({ logIn, toggleLogInForm }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(LogIn);
