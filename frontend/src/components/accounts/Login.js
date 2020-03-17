import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../../travel_app/redux/actions/authActions";
import { changeNavbar } from "../../../../travel_app/redux/actions/navbarActions";
import axios from "axios";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;
    const login_payload = {
      username,
      password
    };
    axios.post("http://localhost:8000/auth/login", login_payload).then(res => {
      if (res.data.hasOwnProperty("auth_token")) {
        const { auth_token } = res.data;
        this.props.login(auth_token);
        this.props.changeNavbar(true);
        console.log("correct");
        console.log(localStorage);
        this.props.history.push("/");
      } else {
        console.log("incorrect");
      }
    });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    login: payload => dispatch(login(payload)),
    changeNavbar: payload => dispatch(changeNavbar(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
