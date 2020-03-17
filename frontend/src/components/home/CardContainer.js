import React, { Component } from "react";
import ImageCard from "./ImageCard";
import "../../../static/styles/home/CardStyle.css";
import axios from "axios";

export class CardContainer extends Component {
  state = {
    loaded: false
  };

  constructor(props) {
    super(props);
    axios
      .get("http://localhost:8000/resources/images")
      .then(res => {
        this.setState({ loaded: true, imageList: res.data });
      })
      .catch(err => console.log(err));
  }

  RenderImages() {
    if (this.state.loaded) {
      return <h1>salut</h1>;
    }
  }

  render() {
    const rowStyle = {
      paddingTop: "2rem"
    };

    const divStyle = {
      justifyContent: "center",
      flexWrap: "wrap"
    };

    return (
      <div className="container-fluid d-flex" style={divStyle}>
        <div className="row" style={rowStyle}>
          <div className="col-md-4">
            <ImageCard
              imageUrl={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[0]["url"]
              }
              imageDescription={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[0]["descriere"]
              }
              imageTitle={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[0]["oras"]
              }
            />
          </div>
          <div className="col-md-4">
            <ImageCard
              imageUrl={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[1]["url"]
              }
              imageDescription={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[1]["descriere"]
              }
              imageTitle={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[1]["oras"]
              }
            />
          </div>
          <div className="col-md-4">
            <ImageCard
              imageUrl={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[2]["url"]
              }
              imageDescription={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[2]["descriere"]
              }
              imageTitle={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[2]["oras"]
              }
            />
          </div>
        </div>
        <div className="row" style={rowStyle}>
          <div className="col-md-4">
            <ImageCard
              imageUrl={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[3]["url"]
              }
              imageDescription={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[3]["descriere"]
              }
              imageTitle={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[3]["oras"]
              }
            />
          </div>
          <div className="col-md-4">
            <ImageCard
              imageUrl={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[4]["url"]
              }
              imageDescription={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[4]["descriere"]
              }
              imageTitle={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[4]["oras"]
              }
            />
          </div>
          <div className="col-md-4">
            <ImageCard
              imageUrl={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[5]["url"]
              }
              imageDescription={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[5]["descriere"]
              }
              imageTitle={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[5]["oras"]
              }
            />
          </div>
        </div>
        <div className="row" style={rowStyle}>
          <div className="col-md-4">
            <ImageCard
              imageUrl={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[6]["url"]
              }
              imageDescription={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[6]["descriere"]
              }
              imageTitle={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[6]["oras"]
              }
            />
          </div>
          <div className="col-md-4">
            <ImageCard
              imageUrl={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[7]["url"]
              }
              imageDescription={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[7]["descriere"]
              }
              imageTitle={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[7]["oras"]
              }
            />
          </div>
          <div className="col-md-4">
            <ImageCard
              imageUrl={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[8]["url"]
              }
              imageDescription={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[8]["descriere"]
              }
              imageTitle={
                this.state.imageList === undefined
                  ? ""
                  : this.state.imageList[8]["oras"]
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardContainer;
