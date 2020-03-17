import React, { Component } from "react";
import styled from "styled-components";

export class Footer extends Component {
  render() {
    const FooterDiv = styled.div({
      position: "fixed",
      bottom: "0",
      backgroundColor: "#e3f2fd",
      width: "100%"
    });

    return (
      <div>
        <FooterDiv id="sticky-footer" className="py-3 text-black-80">
          <div className="container text-center">
            <small>Copyright &copy; Stoica Alexandru 331AB</small>
          </div>
        </FooterDiv>
      </div>
    );
  }
}

export default Footer;
