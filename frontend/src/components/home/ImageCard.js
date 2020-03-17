import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectImageCard } from "../../../../travel_app/redux/actions/imageCardActions";

export class ImageCard extends Component {
  render() {
    // CSS
    const DivStyle = styled.div({
      width: "20rem",
      "&:hover": {
        boxShadow: "5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important"
      }
    });

    const cardBodyStyle = {
      padding: "3rem 0"
    };

    const cardTextStyle = {
      fontSize: ".9rem",
      padding: "0.4rem 1.9rem"
    };

    const imgTopStyle = {
      transform: "scale(1)"
    };

    const Img = styled.img({
      transform: "scale(1)",
      transition: "transform 0.5s ease",
      "&:hover": {
        transform: "scale(1.8)"
      }
    });

    const overflowStyle = {
      overflow: "hidden"
    };

    return (
      <DivStyle
        className="card text-center"
        onClick={e => {
          this.props.selectImageCard({
            oras: this.props.imageTitle,
            descriere: this.props.imageDescription,
            url: this.props.imageUrl
          });
          this.props.history.push("/city-selected");
        }}
      >
        <div className="overflow" style={overflowStyle}>
          <Img
            src={this.props.imageUrl}
            alt="image 1"
            className="card-img-top"
          />
        </div>
        <div className="text-dark" style={cardTextStyle}>
          <h4 className="card-title">{this.props.imageTitle}</h4>
          <p className="text-secondary" style={cardTextStyle}>
            {this.props.imageDescription}
          </p>
        </div>
      </DivStyle>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    selectImageCard: payload => dispatch(selectImageCard(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ImageCard));
