import Card from "./components/card";
import NavBar from "./components/navBar";
import FooterComp from "./components/FooterComp";

function App() {
  return (
    <>
      <div id="up" className="bg">
        <div className="glassBox landing">
          <h1>
            <i>Speedy</i>
          </h1>
          <p>
            Fast, Secure, Private & <a>The Best</a>
          </p>

          <br />
          <br />
          <br />
          <br />
          <br />
          <a id="scroll" href="#first">
            See More
          </a>
        </div>

        <NavBar />

        <hr />

        <br />
        <br />
        <br />

        <div id="first" className="glassBox normal">
          <h1>We Will Give You ...</h1>
          <br />
          <br />
          <div className="row">
            <Card icon="fa-solid fa-ethernet" txt="The Best Ethernet" />
            <Card
              icon="fa-solid fa-tower-broadcast"
              txt="Radius For 50 meter"
            />
            <Card icon="fa-solid fa-rss" txt="4G, 5G !!" />
          </div>
        </div>

        <div className="glassBox normal">
          <p>
            Looking for lightning-fast and secure internet? Look no further than
            Speedy WiFi! Our plans boast speeds of 10mbps, letting you stream,
            download, and browse with ease. We prioritize your privacy and
            security, so you can relax knowing your data is protected. With
            Speedy, experience the internet the way it's meant to be: fast,
            private, and reliable.
          </p>
        </div>

        <i id="mark1" className="fa-brands fa-connectdevelop fa-spin"></i>

        <div className="row">
          <Card icon="fa-solid fa-dollar-sign" txt={`The Best Prices`} />
          <Card
            icon="fa-solid fa-gauge-simple-high"
            txt={`10 mb/s!! \n Fastest WiFi In World`}
          />
          <Card icon="fa-solid fa-globe" txt={`International Servers.`} />
        </div>

        <FooterComp/>
      </div>
    </>
  );
}

export default App;
