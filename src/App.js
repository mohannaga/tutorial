import { useState } from "react";
import "./App.css";
import Primarybtn from "./Primarybtn";
import Maininput from "./Maininput";

const App = () => {
  const [name, setName] = useState("hello");
  return (
    <div className="container">
      <br />
      <Maininput setName={setName} />
      {name === "go" ? (
        <Primarybtn fullName="go" />
      ) : (
        <Primarybtn fullName="submit" />
      )}
    </div>
  );
};

export default App;
