import React from "react";
import "./App.css";
import Number from "./components/Number";
import NumbersForm from "./components/NumbersForm";

function App() {
  return (
    <div className="App">
      <main>
        <h1 className="heading">Insira 5 números</h1>
        <NumbersForm>
          <Number label="1º número" min={1} max={10} />
          <Number label="2º número" min={1} max={10} />
          <Number label="3º número" min={1} max={10} />
          <Number label="4º número" min={1} max={10} />
          <Number label="5º número" min={1} max={10} />
        </NumbersForm>
      </main>
    </div>
  );
}

export default App;
