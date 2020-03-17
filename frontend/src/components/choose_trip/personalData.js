import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUser } from "../../../../travel_app/redux/actions/personalDataActions";

export class PersonalData extends Component {
  state = {
    validation: {
      isValidatedColor: "",
      boxShadow: ""
    },
    nume: "",
    prenume: "",
    oras: "",
    email: "",
    telefon: "",
    statut: ""
  };

  isValid = () => {
    const values = Object.values(this.state);
    console.log(values);
    for (let value of values) {
      console.log(value);
      if (value === "") {
        return false;
      }
    }
    return true;
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const buttonDivStyle = {
      textAlign: "center"
    };

    const mainDivStyle = {
      borderColor: this.state.isValidatedColor,
      boxShadow: this.state.boxShadow
    };

    const { nume, prenume, email, oras, telefon, statut } = this.state;

    return (
      <div className="col-md-3 m-left">
        <div className="card card-body mt-5" style={mainDivStyle}>
          <h2 className="text-center">Detalii Personale</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Nume</label>
              <input
                type="text"
                className="form-control"
                name="nume"
                onChange={this.onChange}
                value={nume}
              />
            </div>
            <div className="form-group">
              <label>Prenume</label>
              <input
                type="text"
                className="form-control"
                name="prenume"
                onChange={this.onChange}
                value={prenume}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group">
              <label>Oras</label>
              <input
                type="text"
                className="form-control"
                name="oras"
                onChange={this.onChange}
                value={oras}
              />
            </div>
            <div className="form-group">
              <label>Telefon</label>
              <input
                type="text"
                min="9"
                max="20"
                className="form-control"
                name="telefon"
                onChange={this.onChange}
                value={telefon}
              />
            </div>
            <div className="form-group">
              <label>Statut</label>
              <input
                type="text"
                min="9"
                max="20"
                className="form-control"
                name="statut"
                onChange={this.onChange}
                value={statut}
              />
            </div>
            <div className="form-group" style={buttonDivStyle}>
              <button
                className="btn btn-primary text-center"
                onClick={e => {
                  e.preventDefault();

                  if (this.isValid()) {
                    this.props.selectUser({
                      nume: nume,
                      prenume: prenume,
                      oras: oras,
                      email: email,
                      telefon: telefon,
                      statut: statut
                    });

                    this.setState({
                      isValidatedColor: "#32a875",
                      boxShadow: "5px 10px 20px 1px #32a875"
                    });
                  } else {
                    console.log("nu");
                  }
                }}
              >
                Valideaza
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
    test: state.personalDataReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectUser: payload => dispatch(selectUser(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData);
