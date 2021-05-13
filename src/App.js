import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [resultList, setResultList] = useState([]);

  useEffect(() => {
    fetch(" https://api.github.com/repos/")
      .then((response) => response.json())
      .then((response) => setResultList([...resultList, response]));
  }, [input]);

  return (
    <div className="App">
      <header className="App-header">
        {resultList.map((item) => console.log("list - " + item.name))}
      </header>
    </div>
  );
}

export default App;
