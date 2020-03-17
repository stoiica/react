import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import register from "../../../../travel_app/redux/actions/authActions";
import axios from "axios";

export class Register extends Component {
  state = {
    nume_utilizator: "",
    prenume_utilizator: "",
    username: "",
    password: "",
    password2: ""
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      nume_utilizator,
      prenume_utilizator,
      username,
      password,
      password2
    } = this.state;
    if (password !== password2) {
      console.log("passwords dont match");
    } else {
      const register_payload = {
        nume_utilizator,
        prenume_utilizator,
        username,
        password
      };
      axios
        .post("http://localhost:8000/auth/register", register_payload)
        .then(res => {
          const { auth_token } = res.data;
          this.props.register(auth_token);
        })
        .catch(err => console_log(err));
      this.setState({
        nume_utilizator: "",
        prenume_utilizator: "",
        username: "",
        password: "",
        password2: ""
      });
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const {
      nume_utilizator,
      prenume_utilizator,
      username,
      password,
      password2
    } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Nume</label>
              <input
                type="text"
                className="form-control"
                name="nume_utilizator"
                onChange={this.onChange}
                value={nume_utilizator}
              />
            </div>
            <div className="form-group">
              <label>Prenume</label>
              <input
                type="text"
                className="form-control"
                name="prenume_utilizator"
                onChange={this.onChange}
                value={prenume_utilizator}
              />
            </div>
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
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
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
    register: payload => dispatch(register(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
