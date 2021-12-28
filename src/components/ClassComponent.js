import React from "react";
import "./style.css";

const methods = ["+", "-", "*", "/"];

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, method: "" };
  }

  inputNumber(num) {
    switch (this.state.method) {
      case "+":
        this.setState({ total: this.state.total + num });
        break;
      case "-":
        this.setState({ total: this.state.total - num });
        break;
      case "*":
        this.setState({ total: this.state.total * num });
        break;
      case "/":
        this.setState({ total: this.state.total / num });
        break;
      default:
        break;
    }
    this.setState({ method: "" });
  }

  renderButtons() {
    const buttons = [];
    for (let i = 9; i >= 0; i--) {
      buttons.push(
        <button onClick={() => this.inputNumber(i)} key={i}>
          {i}
        </button>
      );
    }
    return buttons;
  }

  render() {
    return (
      <div className="calculator">
        <h2>Class Component</h2>
        <header>
          <p>{this.state.total}</p>
          <p>{this.state.method}</p>
        </header>
        <main>
          <aside>
            {methods.map((m) => (
              <button onClick={() => this.setState({ method: m })} key={m}>
                {m}
              </button>
            ))}
          </aside>
          <section>
            {this.renderButtons()}
            <button onClick={() => this.setState({ total: 0 })}>C</button>
          </section>
        </main>
      </div>
    );
  }
}

export default ClassComponent;
