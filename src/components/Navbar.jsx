import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <>
            <h1
              style={{
                color: "var(--text-primary, #ffffff)",
                fontFamily: "Poppins",
                fontSize: "28px",
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: "100%" /* 28px */,
                letterSpacing: "2.8px",
              }}
            >
              Udality
            </h1>
            <h1
              style={{
                color: "var(--primary, #007DFA)",
                fontFamily: "Poppins",
                fontSize: "28px",
                fontStyle: "italic",
                fontWeight: 700,
                lineHeight: "100%" /* 28px */,
                letterSpacing: "2.8px",
              }}
            >
              .
            </h1>
          </>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle style={{ fontFamily: "Poppins" }}>
            About
          </NavLink>
          <NavLink to="/services" activeStyle style={{ fontFamily: "Poppins" }}>
            Services
          </NavLink>
          <NavLink
            to="/contact-us"
            activeStyle
            style={{ fontFamily: "Poppins" }}
          >
            Contact Us
          </NavLink>
          <NavLink to="/sign-up" activeStyle style={{ fontFamily: "Poppins" }}>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin" style={{ fontFamily: "Poppins" }}>
            Sign In
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
