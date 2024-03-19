import "./App.css";
import Logo from "../src/assets/components/Logo";
import LogoPic from "./assets/imgs/Netflix-Logo.png";
import Section from "./assets/components/Section";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <Logo src={LogoPic} />
        </div>

        <div className="contenu">
          {data.map((elem) => {
            console.log(elem);
            return (
              <div>
                {elem.category}

                {data.map((elem) => {
                  console.log(elem.images);
                  return <img src={elem.images} />;
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
