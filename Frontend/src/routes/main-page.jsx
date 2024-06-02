import React from "react";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../components/Footer";
import Section from "../components/Section";

// import background from "../images/voiture.jpeg";

const MainPage = () => {
  const { isAuthenticated } = useAuth0();
  const location = useLocation();
  return (
    // <main style={{backgroundImage: `url("${background}")`}}>
    <div className="main">
      {!isAuthenticated && (
        <>
          {location.pathname === "/" ? (
            <>
            <Navbar />
              <Body />
              <Section />
            </>
          ) : (
            ""
          )}
        </>
      )}
      <Outlet />
    </div>
  );
};

export default MainPage;
