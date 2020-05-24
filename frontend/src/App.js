import React, { useState } from "react";
import "./App.css";
import Number from "./components/Number";
import NumbersForm from "./components/NumbersForm";
import Spin from "./components/Spin";
import Message from "./components/Message";

function App() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [isFormPending, setIsFormPending] = useState(false);
  const [isFormSubmitedWithSuccess, setIsFormSubmitedWithSuccess] = useState(
    undefined
  );

  const successMessage = "Tudo certo";
  const errorMessage = "Houve um erro durante a operação";

  const beginFormSubmition = () => {
    setIsFormSubmited(false);
    setIsFormPending(true);
  };

  const endFormSubmition = (isSuccess) => {
    setIsFormPending(false);
    setIsFormSubmited(true);
    setIsFormSubmitedWithSuccess(isSuccess);
  };

  const provideFeedback = () => {
    if (!isFormSubmited && !isFormPending) {
      return null;
    }
    if (isFormSubmited) {
      return isFormSubmitedWithSuccess ? (
        <Message isSuccess={isFormSubmitedWithSuccess} value={successMessage} />
      ) : (
        <Message isSuccess={isFormSubmitedWithSuccess} value={errorMessage} />
      );
    }
    return <Spin />;
  };
  return (
    <div className="App">
      <main>
        <h1 className="heading">Insira 5 números</h1>
        <NumbersForm
          beginFormSubmition={beginFormSubmition}
          endFormSubmition={endFormSubmition}
        >
          <Number isRequired label="1º número" min={1} max={10} />
          <Number isRequired label="2º número" min={1} max={10} />
          <Number isRequired label="3º número" min={1} max={10} />
          <Number isRequired label="4º número" min={1} max={10} />
          <Number isRequired label="5º número" min={1} max={10} />
          <p className="small-gray-text">* Campos obrigatórios</p>
        </NumbersForm>
        {provideFeedback()}
      </main>
    </div>
  );
}

export default App;
