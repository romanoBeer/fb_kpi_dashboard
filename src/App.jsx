import { useState } from "react";
// import './App.css'
import "./css/app.css";
import NavBar from "./components/NavBar";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <LeaderBoard />
    </>
  );
}

export default App;
