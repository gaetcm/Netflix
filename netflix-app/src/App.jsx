import "./App.css";
import Logo from "../src/assets/components/Logo";
import LogoPic from "./assets/imgs/Netflix-Logo.png";
import Section from "./assets/components/Section";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <div className="container kanit-semibold">
        <div className="logo">
          <Logo src={LogoPic} />
        </div>

        <div className="contenu">
          {data.map((elem) => {
            return (
              <>
                <div className="titre">{elem.category}</div>

                <div className="show">
                  {elem.images.map((pic) => {
                    return <img src={pic} />;
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
