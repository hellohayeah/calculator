import { useState } from "react";
import "./style.css";

const methods = ["+", "-", "*", "/"];

const Hooks = () => {
  const [total, setTotal] = useState(0);
  const [method, setMethod] = useState("");

  const inputNumber = (num) => {
    switch (method) {
      case "+":
        setTotal((prevT) => prevT + num);
        break;
      case "-":
        setTotal((prevT) => prevT - num);
        break;
      case "*":
        setTotal((prevT) => prevT * num);
        break;
      case "/":
        setTotal((prevT) => prevT / num);
        break;
      default:
        break;
    }
    setMethod("");
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 9; i >= 0; i--) {
      buttons.push(
        <button onClick={() => inputNumber(i)} key={i}>
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="calculator">
      <h2>Hooks</h2>
      <header>
        <p>{total}</p>
        <p>{method}</p>
      </header>
      <main>
        <aside>
          {methods.map((m) => (
            <button onClick={() => setMethod(m)} key={m}>
              {m}
            </button>
          ))}
        </aside>
        <section>
          {renderButtons()}
          <button onClick={() => setTotal(0)}>C</button>
        </section>
      </main>
    </div>
  );
};

export default Hooks;
