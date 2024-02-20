import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/server")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
