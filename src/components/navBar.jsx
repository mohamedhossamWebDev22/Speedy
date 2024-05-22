import { useState } from "react";
import { Offline, Online } from "react-detect-offline";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [ShowMenu, setShowMenu] = useState("hide");

  return (
    <>
      <div className={`menu ${ShowMenu}`}>
        <i onClick={() => {setShowMenu("hide")}} className="fa-solid fa-xmark"></i>
        <Link to={"/"}>Home</Link>
        <Link to={"/plans"}>Plans</Link>
        <Link to={"/about"}>About Us</Link>
      </div>
      <div className="navBar">
        <p>
          <Online>
            <i className="fa-solid fa-rss conn"></i>
          </Online>
          <Offline>
            <i className="fa-solid fa-rss disConn"></i>
          </Offline>
        </p>
        <h1>
          <Link to={"/"}>Speedy</Link>
        </h1>

        <p>
          <a href="#up"><i onClick={() => {setShowMenu("show")}} className="fa-solid fa-bars"></i></a>
        </p>
      </div>
    </>
  );
};

export default NavBar;
