import React from "react";
import NavBar from "../components/navBar";
import FooterComp from "../components/FooterComp";

const About = () => {
  return (
    <>
      <div className="bg">
        <NavBar />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <i id="mark1" className="fa-brands fa-connectdevelop fa-spin"></i>
        <br />
        <br />

        <p className="aboutTxt">
          Is your current internet provider leaving you lagging behind? Are you
          tired of waiting for videos to load or files to download? If so, then
          Speedy WiFi is the answer! We offer reliable, high-speed internet with
          incredible 10mbps download speeds, putting an end to frustrating
          buffering and lag. Stream your favorite shows in stunning HD quality,
          download large files in a flash, and navigate the web with ease. But
          Speedy WiFi isn't just about breakneck speeds. We understand that
          affordability is a major concern, which is why we offer our
          high-performance plans at competitive prices. Unlike other providers
          who may charge a premium for speed, Speedy gives you the best bang for
          your buck. You won't have to overpay to get the internet speeds you
          deserve. On top of that, security is our top priority. Speedy WiFi
          prioritizes your online safety with top-tier security measures that
          safeguard your data. Shop online, bank securely, and connect with
          friends and family with complete peace of mind, knowing your
          information is protected. Don't settle for a mediocre internet
          experience that disrupts your daily activities. Upgrade to Speedy WiFi
          today and experience the perfect combination of speed, security, and
          affordability. Speedy WiFi – it's the clear choice for a superior
          internet experience.
        </p>

        <br />
        <br />
        <br />
        <br />
        <FooterComp/>
      </div>
    </>
  );
};

export default About;
