import { useState } from "react";
// import './App.css'
import "./css/app.css";
import NavBar from "./components/NavBar";
import LeaderBoard from "./components/LeaderBoard";
import Podium from "./components/Podium";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="bg-base-200 flex flex-row justify-between">
        <div className="w-full p-2 bg-base-100 rounded-lg m-2 h-screen">Hi There</div>
        <div className="h-screen">
          <Podium />
          <LeaderBoard />
        </div>
        <div className="w-full p-2 bg-base-100 rounded-lg m-2 h-screen">Hi There</div>
      </div>
    </>
  );
}

export default App;
