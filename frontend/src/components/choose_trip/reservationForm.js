import React, { Component, Fragment } from "react";
import PersonalData from "./personalData";
import TripData from "./tripData";
import ImageCard from "../home/ImageCard";
import { connect } from "react-redux";

export class ReservationForm extends Component {
  render() {
    console.log(this.props);

    const cardStyle = {
      justifyContent: "center",
      alignItems: "center",
      display: "flex"
    };

    return (
      <Fragment>
        <div className="row">
          <div style={cardStyle}>
            <ImageCard
              imageTitle={this.props.imageInfo.oras}
              imageUrl={this.props.imageInfo.url}
              imageDescription={this.props.imageInfo.descriere}
            />
          </div>
          <PersonalData />
          <TripData />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    imageInfo: state.imageCardReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationForm);
