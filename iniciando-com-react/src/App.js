import React, { Fragment } from "react";

function App(props) {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const comboboxCreate = () => {
    const options = [
      "Americana",
      "Santa Bárbara D´Oeste",
      "Piracicaba",
      "Limeira",
      "Nova Odessa",
      "Campinas",
    ];
    const comboBoxOptions = options.map((opc) => (
      <option key={opc}>{opc}</option>
    ));

    return <select>{comboBoxOptions}</select>;
  };

  const MyCombobox = () => comboboxCreate();

  return (
    <Fragment>
      <input
        type="text"
        className="text-centralizado"
        value={props.nome}
        onChange={handleChange}
      />
      <h1>
        Hello {props.nome}. You are {props.idade} yers old
      </h1>

      <MyCombobox />
    </Fragment>
  );
}

export default App;
