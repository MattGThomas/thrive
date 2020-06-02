import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import "./navbar.css";
// import logo from "../../images/reg-pics/IMG_3070.PNG";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <MDBNavbar color="black" dark expand="lg" scrolling fixed="top">
        <MDBNavbarBrand>
          <div>
            <strong className="red-text">Thrive Sports</strong>
          </div>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggle} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {/* <div className="nav-items"> */}
            <MDBNavItem>
              <MDBNavLink to="/" style={{ color: "red" }}>
                <strong>Home</strong>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about" style={{ color: "red" }}>
                About
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav>
                  <span className="mr-2 nav-items" style={{ color: "red" }}>
                    Players
                  </span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Basketball</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Football</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Baseball</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact-us" style={{ color: "red" }}>
                Contact Us
              </MDBNavLink>
            </MDBNavItem>
            {/* </div> */}
          </MDBNavbarNav>

          <MDBNavbarNav right>
            <MDBNavItem>
              <a target="_blank" rel="noopener noreferrer" href="#!">
                <MDBIcon
                  fab
                  icon="facebook-square"
                  right
                  size="2x"
                  style={{ color: "#bfbfbf" }}
                />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a target="_blank" rel="noopener noreferrer" href="#!">
                <MDBIcon
                  fab
                  icon="twitter-square"
                  right
                  size="2x"
                  style={{ color: "#bfbfbf" }}
                />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <MDBIcon
                fab
                icon="instagram"
                right
                size="2x"
                style={{ color: "#bfbfbf" }}
              />
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
