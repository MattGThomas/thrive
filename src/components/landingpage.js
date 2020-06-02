import React, { Component } from "react";
import {
  MDBCard,
  MDBRow,
  MDBCardTitle,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBCardBody,
  MDBIcon,
} from "mdbreact";
import thrive from "../images/thrive.jpg";
import tuggle from "../images/tuggle.jpg";
import tuggle_dark from "../images/tuggle_dark.jpg";
import r_thomas from "../images/r_thomas.jpg";
import Navbar from "../components/navbar/navbar.js";
import "./landingpage.css";

class Landingpage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <img src={thrive} alt="" className="landing-pictures" />
        {/* <MDBContainer>
          <MDBRow>
          
            <MDBCol> */}
        <h1 className="body-header">Thrive Sports Management</h1>
        <div className="tuggle-picture">
          <img src={tuggle} alt="" width="50%" />
          <img src={tuggle_dark} alt="" width="50%" />
          <div className="tuggle-about">
            <p>
              "Impossible is just a big word thrown around by small men who find
              it easier to live in the world they’ve been given than to explore
              the power they have to change it. Impossible is not a fact. It’s
              an opinion. Impossible is not a declaration. It’s a dare.
              Impossible is potential. Impossible is temporary. Impossible is
              nothing.”
              <br />
              <span>- Muhammad Ali</span>
            </p>
          </div>
        </div>
        {/* </MDBCol>
          </MDBRow>
        </MDBContainer> */}
        <MDBContainer>
          <h1 className="body-header">Thrive Sports Management</h1>
          <MDBRow style={{ paddingBottom: "5%" }} className="player-row">
            <MDBCol>
              <div className="card-container">
                <MDBCard style={{ height: "300px", background: "red" }}>
                  <MDBCardTitle>
                    {/* Thrive Sports <br />
                    Presents <br /> */}
                    Robert Thomas
                  </MDBCardTitle>

                  <MDBCardImage src={r_thomas} className="card-image" />
                  <MDBCardBody>Position, Team</MDBCardBody>
                </MDBCard>
                <div className="card-overlay">
                  <div className="card-description">
                    {/* hello world
                    <br /> */}
                    <a target="_blank" rel="noopener noreferrer" href="#!">
                      <MDBIcon
                        fab
                        icon="facebook-square"
                        // right
                        size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/RobThomas98?lang=en"
                    >
                      <MDBIcon
                        fab
                        icon="twitter-square"
                        // right
                        size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/robthomas98/"
                    >
                      <MDBIcon
                        fab
                        icon="instagram"
                        //   right
                        size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div className="card-container">
                <MDBCard style={{ height: "300px" }}>
                  <MDBCardTitle>
                    Thrive Sports <br />
                    Presents <br />
                    player name
                  </MDBCardTitle>

                  <MDBCardImage
                    src="https://placedog.net/640/480?random"
                    className="card-image"
                  />
                </MDBCard>
                <div className="card-overlay">
                  <div className="card-description">
                    hello world
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://m.facebook.com/CMIYCProd/"
                    >
                      <MDBIcon
                        fab
                        icon="facebook-square"
                        // right
                        // size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/ChasertheEraser"
                    >
                      <MDBIcon
                        fab
                        icon="twitter-square"
                        // right
                        // size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <MDBIcon
                      fab
                      icon="instagram"
                      //   right
                      //   size="2x"
                      style={{ color: "#bfbfbf" }}
                    />
                    <MDBIcon
                      fab
                      icon="snapchat-ghost"
                      //   size="2x"
                      style={{ color: "#bfbfbf" }}
                    />
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div className="card-container">
                <MDBCard style={{ height: "300px" }}>
                  <MDBCardTitle>
                    Thrive Sports <br />
                    Presents <br />
                    player name
                  </MDBCardTitle>

                  <MDBCardImage
                    src="https://placedog.net/640/480?random"
                    className="card-image"
                  />
                </MDBCard>
                <div className="card-overlay">
                  <div className="card-description">
                    hello world
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://m.facebook.com/CMIYCProd/"
                    >
                      <MDBIcon
                        fab
                        icon="facebook-square"
                        // right
                        // size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/ChasertheEraser"
                    >
                      <MDBIcon
                        fab
                        icon="twitter-square"
                        // right
                        // size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <MDBIcon
                      fab
                      icon="instagram"
                      //   right
                      //   size="2x"
                      style={{ color: "#bfbfbf" }}
                    />
                    <MDBIcon
                      fab
                      icon="snapchat-ghost"
                      //   size="2x"
                      style={{ color: "#bfbfbf" }}
                    />
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>

          <MDBRow className="player-row">
            <MDBCol>
              <div className="hello">
                <div className="card-container">
                  <MDBCard style={{ height: "300px" }}>
                    <MDBCardTitle>
                      Thrive Sports <br />
                      Presents <br />
                      player name
                    </MDBCardTitle>

                    <MDBCardImage
                      src="https://placedog.net/640/480?random"
                      className="card-image"
                    />
                  </MDBCard>
                  <div className="card-overlay">
                    <div className="card-description">
                      hello world
                      <br />
                      <a target="_blank" rel="noopener noreferrer" href="#1">
                        <MDBIcon
                          fab
                          icon="facebook-square"
                          // right
                          // size="2x"
                          style={{ color: "#bfbfbf" }}
                        />
                      </a>
                      <a target="_blank" rel="noopener noreferrer" href="#!">
                        <MDBIcon
                          fab
                          icon="twitter-square"
                          // right
                          // size="2x"
                          style={{ color: "#bfbfbf" }}
                        />
                      </a>
                      <MDBIcon
                        fab
                        icon="instagram"
                        //   right
                        //   size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                      <MDBIcon
                        fab
                        icon="snapchat-ghost"
                        //   size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div className="card-container">
                <MDBCard style={{ height: "300px" }}>
                  <MDBCardTitle>
                    Thrive Sports <br />
                    Presents <br />
                    player name
                  </MDBCardTitle>

                  <MDBCardImage
                    src="https://placedog.net/640/480?random"
                    className="card-image"
                  />
                </MDBCard>
                <div className="card-overlay">
                  <div className="card-description">
                    hello world
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://m.facebook.com/CMIYCProd/"
                    >
                      <MDBIcon
                        fab
                        icon="facebook-square"
                        // right
                        // size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/ChasertheEraser"
                    >
                      <MDBIcon
                        fab
                        icon="twitter-square"
                        // right
                        // size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <MDBIcon
                      fab
                      icon="instagram"
                      //   right
                      //   size="2x"
                      style={{ color: "#bfbfbf" }}
                    />
                    <MDBIcon
                      fab
                      icon="snapchat-ghost"
                      //   size="2x"
                      style={{ color: "#bfbfbf" }}
                    />
                  </div>
                </div>
              </div>
            </MDBCol>
            <MDBCol>
              <div className="card-container">
                <MDBCard style={{ height: "300px" }}>
                  <MDBCardTitle>
                    Thrive Sports <br />
                    Presents <br />
                    player name
                  </MDBCardTitle>

                  <MDBCardImage
                    src="https://placedog.net/640/480?random"
                    className="card-image"
                  />
                </MDBCard>
                <div className="card-overlay">
                  <div className="card-description">
                    hello world
                    <br />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://m.facebook.com/CMIYCProd/"
                    >
                      <MDBIcon
                        fab
                        icon="facebook-square"
                        // right
                        // size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/ChasertheEraser"
                    >
                      <MDBIcon
                        fab
                        icon="twitter-square"
                        // right
                        // size="2x"
                        style={{ color: "#bfbfbf" }}
                      />
                    </a>
                    <MDBIcon
                      fab
                      icon="instagram"
                      //   right
                      //   size="2x"
                      style={{ color: "#bfbfbf" }}
                    />
                    <MDBIcon
                      fab
                      icon="snapchat-ghost"
                      //   size="2x"
                      style={{ color: "#bfbfbf" }}
                    />
                  </div>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Landingpage;
