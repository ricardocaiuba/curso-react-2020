import React, { useState } from "react";

function UseState() {
  const [number, setNumero] = useState(0);
  const [secondNumber, setSecondNumber] = useState(10);
  const [result, setResult] = useState(10);

  const [state, setState] = useState({
    number: 30,
    secondNumber: 40,
    result: 70,
  });

  const somar = () => {
    const numberInt = parseInt(number);
    const secondNumberInt = parseInt(secondNumber);

    setResult(numberInt + secondNumberInt);
  };

  const somarComSetState = () => {
    const numberInt = parseInt(state.number);
    const secondNumberInt = parseInt(state.secondNumber);

    setState({
      ...state,
      result: numberInt + secondNumberInt,
    });
  };

  return (
    <div>
      Número 1: <br />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumero(e.target.value)}
      />
      <br />
      Número 2: <br />
      <input
        type="text"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <br />
      <button onClick={somar}>Somar</button>
      <br />
      Resultado: <br />
      <input
        type="text"
        value={result}
        disabled={true}
        onChange={(e) => setResult(e.target.value)}
      />
      <hr />
      <input
        type="text"
        value={state.number}
        onChange={(e) => setState({ ...state, number: e.target.value })}
      />
      <br />
      <input
        type="text"
        value={state.secondNumber}
        onChange={(e) => setState({ ...state, secondNumber: e.target.value })}
      />
      <br />
      <input
        type="text"
        disabled
        value={state.result}
        onChange={(e) => setState({ ...state, result: e.target.value })}
      />
      <button onClick={somarComSetState}>Somar</button>
    </div>
  );
}

export default UseState;
