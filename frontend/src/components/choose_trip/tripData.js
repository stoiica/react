import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

export class TripData extends Component {
  state = {
    validation: {
      isValidatedColor: "",
      boxShadow: ""
    },
    transport: "Transport",
    nrNopti: "0",
    masa: "Optiuni masa",
    nrPersoane: "0",
    agentie: "Agentie",
    pretFinal: "Pret",
    ziIntoarcere: "",
    ziPlecare: ""
  };

  onChange = e => {
    console.log(this.state);
    console.log(this.props);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const divStyle = {
      margin: "48px 0 0"
    };

    const inputStyle = {
      backgroundColor: "white"
    };

    const dropDownStyle = {
      backgroundColor: "white",
      color: "black"
    };

    const buttonDivStyle = {
      textAlign: "center"
    };

    return (
      <div className="col-md-3 m-left">
        <div className="card card-body mt-5">
          <h2 className="text-center">Optiuni excursie</h2>
          <form>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={dropDownStyle}
              >
                {this.state.transport}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ transport: "autocar" });
                  }}
                >
                  autocar
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ transport: "zbor" });
                  }}
                >
                  avion
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={dropDownStyle}
              >
                {this.state.masa}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ masa: "1 masa" });
                  }}
                >
                  1 masa
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ masa: "2 mese" });
                  }}
                >
                  2 mese
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ masa: "all inclusive" });
                  }}
                >
                  all inclusive
                </a>
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="nrNopti"
                placeholder="Numar Nopti"
                style={inputStyle}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="ziPlecare"
                placeholder="Ziua plecarii"
                style={inputStyle}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="ziIntoarcere"
                placeholder="Ziua intoarcerii"
                style={inputStyle}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="nrPersoane"
                placeholder="Numar Persoane"
                style={inputStyle}
                onChange={this.onChange}
              />
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={dropDownStyle}
              >
                {this.state.agentie}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ agentie: "Sind Tour" });
                  }}
                >
                  Sind Tour
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    this.setState({ agentie: "Deity Travel" });
                  }}
                >
                  Deity Travel
                </a>
              </div>
              <div className="form-group" style={buttonDivStyle}>
                <button
                  className="btn btn-primary text-center"
                  onClick={e => {
                    e.preventDefault();
                    const getData = {
                      oras: "'" + this.props.imageInfo.oras + "'",
                      masa: "'" + this.state.masa + "'",
                      statut: "'" + this.props.info.statut + "'",
                      tip_transport: this.state.transport
                    };
                    console.log(JSON.stringify(getData));
                    axios
                      .post(
                        "http://localhost:8000/resources/pret_autocar",
                        getData
                      )
                      .then(res => {
                        console.log(res);
                        const { pret_masa, discount } = res.data;
                        const temp_transport =
                          this.state.transport === "zbor"
                            ? res.data.pret_zbor[0]
                            : res.data.pret_autocar[0];

                        const temp_pret =
                          ((pret_masa[0] + temp_transport) *
                            this.state.nrNopti *
                            this.state.nrPersoane *
                            (100 - discount[0])) /
                          100;

                        this.setState({ pretFinal: temp_pret });
                      });
                  }}
                >
                  Vezi pret
                </button>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="pretFinal"
                  readOnly
                  placeholder={this.state.pretFinal}
                  style={inputStyle}
                />
              </div>
              <div className="form-group" style={buttonDivStyle}>
                <button
                  className="btn btn-primary text-center"
                  onClick={e => {
                    e.preventDefault();

                    const data = {
                      nume: this.props.info.nume,
                      prenume: this.props.info.prenume,
                      email: this.props.info.email,
                      oras: this.props.info.oras,
                      telefon: parseInt(this.props.info.telefon),
                      numar_persoane: parseInt(this.state.nrPersoane),
                      id_transport: 2,
                      id_masa: 1,
                      id_agentie: 1,
                      statut: this.props.info.statut
                    };
                    console.log(data);
                    axios.post(
                      "http://localhost:8000/insert/reservation",
                      data
                    );

                    this.props.history.push("/thank_you");
                  }}
                >
                  Fa rezervare
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imageInfo: state.imageCardReducer,
    info: state.personalDataReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TripData));
