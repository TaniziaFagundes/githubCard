import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/";

function App() {
  const [input, setInput] = useState("");
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    fetch(" https://api.github.com/repos/TaniziaFagundes/Next-Level-Week-2")
      .then((response) => response.json())
      .then((response) => setResultList([...resultList, response]));
  }, [input]);

  return (
    <div className="App">
      <header className="App-header">
        {resultList.map((item) => (
          <Card itemList={item}></Card>
        ))}
      </header>
    </div>
  );
}

export default App;
