import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/";

function App() {
  const [input, setInput] = useState("");
  const [resultList, setResultList] = useState([]);
  const [busca, setBusca] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/repos/" + input)
      .then((response) => response.json())
      .then((response) => setResultList([...resultList, response]))
      .catch((err) => {
        <alert>Não encontrado</alert>;
      });
  }, [input, busca]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container_busca">
          <input
            value={input.value}
            onChange={(e) => {
              setInput(e.target.value);
              e.preventDefault();
            }}
          ></input>
          {console.log(input)}
          <button type="submit" onClick={() => setBusca({ busca: !busca })}>
            Buscar
          </button>
        </div>
        <div className="container_card">
          {input !== ""
            ? resultList.map((item) => <Card itemList={item}></Card>)
            : ""}
        </div>
      </header>
    </div>
  );
}

export default App;
