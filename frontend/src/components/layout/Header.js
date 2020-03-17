import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../../../travel_app/redux/actions/authActions";
import { changeNavbar } from "../../../../travel_app/redux/actions/navbarActions";
import { withRouter } from "react-router-dom";
import axios from "axios";

export class Header extends Component {
  constructor(props) {
    super(props);
  }

  onClickLogout = e => {
    console.log();
    this.props.logout("");
    this.props.changeNavbar(false);
  };

  onClickChangePassword = e => {
    this.props.history.push("/change_password");
  };

  onClickDelete = e => {
    e.preventDefault();
    const payload = {
      token: this.props.token
    };
    console.log(payload);
    axios.post("http://localhost:8000/resources/delete", payload);
  };

  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <Link className="navbar-brand" to="/">
          Acasa
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {this.props.isAuthenticated ? (
            <div className="navbar-nav">
              <Link
                className="nav-item nav-link active"
                to="#"
                onClick={this.onClickChangePassword}
              >
                Schimba parola <span className="sr-only">(current)</span>
              </Link>
              <Link
                className="nav-item nav-link active"
                to="#"
                onClick={this.onClickDelete}
              >
                Sterge ultima comanda <span className="sr-only">(current)</span>
              </Link>
              <Link
                className="nav-item nav-link active"
                to="#"
                onClick={this.onClickLogout}
              >
                Delogare <span className="sr-only">(current)</span>
              </Link>
            </div>
          ) : (
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/login">
                Logare <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link active" to="/register">
                Inregistrare
              </Link>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.navbarReducer.isAuthenticated,
    token: state.authReducer.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: payload => dispatch(logout(payload)),
    changeNavbar: payload => dispatch(changeNavbar(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
