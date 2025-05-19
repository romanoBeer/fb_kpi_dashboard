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
      <section className="w-full h-screen flex flex-col">
        <NavBar />
        <div className="grid grid-cols-[1fr_2fr_1fr] bg-base-200 flex-1">
          <div className="m-2 rounded-lg p-4 bg-base-100">Hi There</div>
          <div className="flex flex-col gap-2">
            <div className="mt-2 rounded-lg p-4 bg-base-100 flex-none">
              <Podium />
            </div>
            <div className="mb-2 rounded-lg p-4 bg-base-100 h-[553px] overflow-hidden">
              <LeaderBoard />
            </div>
          </div>
          <div className="m-2 rounded-lg p-4 bg-base-100">Hi There</div>
        </div>
      </section>
    </>
  );
}

export default App;
