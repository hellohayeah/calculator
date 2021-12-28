import { useState } from "react";
import "./App.css";
import Hooks from "./components/Hooks";
import ClassComponent from "./components/ClassComponent";

const App = () => {
  const [isHooks, setIsHooks] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsHooks(!isHooks)} className="switch">
        Switch
      </button>
      {isHooks ? <Hooks /> : <ClassComponent />}
    </div>
  );
};

export default App;
