import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";

export class ChangePassword extends Component {
  state = {
    old_password: "",
    new_password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const payload = {
      token: this.props.token,
      password: this.state.new_password
    };
    console.log(this.props.token);
    axios.post("http://localhost:8000/resources/change_password", payload);
  };

  render() {
    const { old_password, new_password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Detalii cont</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Old password</label>
              <input
                type="password"
                className="form-control"
                name="old_password"
                onChange={this.onChange}
                value={old_password}
              />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                className="form-control"
                name="new_password"
                onChange={this.onChange}
                value={new_password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ChangePassword));
