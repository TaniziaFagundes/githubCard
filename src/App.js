import { useState } from "react";
import "./App.css";
import Card from "./components/Card/";
import Alert from "./components/Alert/";

function App() {
  const [input, setInput] = useState("");
  const [resultList, setResultList] = useState([]);
  const [displayAlert, setDisplayAlert] = useState(false);

  const apiResult = (input) => {
    fetch("https://api.github.com/repos/" + input)
      .then((response) => response.json())
      .then((response) => setResultList([...resultList, response]))
      .catch((err) =>
        displayAlert ? (
          <Alert
            title={"Repositorio inserido não foi encontrado"}
            setDisplayAlert={setDisplayAlert}
          ></Alert>
        ) : (
          ""
        )
      );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container_busca">
          <input
            value={input.value}
            onChange={(e) => {
              setInput(e.target.value);
              console.log(e.target.value);
              e.preventDefault();
            }}
            placeholder="ex: nameUser/nameRepository"
          ></input>

          <button
            type="submit"
            onClick={() => {
              input === "" ? setDisplayAlert(true) : apiResult(input);
            }}
          >
            Buscar
          </button>
        </div>
        <div className="container_card">
          {resultList.map((item) => (
            <Card itemList={item}></Card>
          ))}
        </div>
        <div className="container_alert">
          {displayAlert ? (
            <Alert
              title={"Insira valor de Busca"}
              setDisplayAlert={setDisplayAlert}
            ></Alert>
          ) : (
            ""
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
