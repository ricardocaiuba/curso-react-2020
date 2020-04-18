import React, { useState, useEffect } from "react";
import useStore from "./somaReducer";

function ReducerHook() {
  const [number, setNumero] = useState(0);
  const [secondNumber, setSecondNumber] = useState(10);
  const [store, dispatch] = useStore();

  const [state, setState] = useState({
    number: 30,
    secondNumber: 40,
    result: 70,
  });

  useEffect(() => {
    console.log("variavel numero: ", number);
  }, [number]);

  const somar = () => {
    const numberInt = parseInt(number);
    const secondNumberInt = parseInt(secondNumber);

    console.log("dispachando a action");

    dispatch({
      type: "SOMA",
      payload: numberInt + secondNumberInt,
    });
  };

  const subtracao = () => {
    const numberInt = parseInt(number);
    const secondNumberInt = parseInt(secondNumber);

    console.log("dispachando a action de subtracao");

    dispatch({
      type: "SUBTRACAO",
      payload: numberInt - secondNumberInt,
    });
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
      <button onClick={subtracao}>Subtrair</button>
      <br />
      Resultado: <br />
      <input type="text" value={store.result} disabled={true} />
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

export default ReducerHook;
