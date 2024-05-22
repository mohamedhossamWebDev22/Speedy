import React from "react";
import NavBar from "../components/navBar";
import FooterComp from "../components/FooterComp";
import Plan from "../components/Plan";

const Plans = () => {
  return (
    <>
      <div className="bg">
        <NavBar />

        <div className="row">
          <Plan title="Basic" price="2" quote="140" speed="50" />
          <Plan title="Office" price="5" quote="300" speed="60" />
          <Plan title="Freelancer" price="3.5" quote="250" speed="60" />
          <Plan title="Gamer" price="4" quote="560" speed="100" />
        </div>

        <FooterComp />
      </div>
    </>
  );
};

export default Plans;
