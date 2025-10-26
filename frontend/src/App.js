import React, { useState, useCallback } from "react";
import "./App.css";

const Resultado = React.memo(({ valor }) => {
  console.log("Renderizando Resultado");
  return (
    valor !== null && (
      <div className="success">
        Mínimo múltiplo comum do intervalo: {valor}
      </div>
    )
  );
});

function App() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularLCM = useCallback(async () => {
    setErro(null);
    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/lcm/?x=${x}&y=${y}`
      );
      const data = await response.json();

      if (response.ok) {
        setResultado(data.lcm);
      } else {
        setErro(data.error || "Erro desconhecido");
      }
    } catch (error) {
      setErro("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  }, [x, y]);

  const handleXChange = useCallback(
    (e) => {
      const val = e.target.value;
      setX(val);

      // validação de número positivo e menor que y
      if (val !== "" && (parseInt(val) <= 0 || val.includes("-"))) {
        setWarning("Digite apenas números positivos maiores que zero");
      } else if (val !== "" && y !== "" && parseInt(val) >= parseInt(y)) {
        setWarning("Digite x menor que y");
      } else {
        setWarning("");
      }
    },
    [y]
  );

  const handleYChange = useCallback(
    (e) => {
      const val = e.target.value;
      setY(val);

      // validação de número positivo e maior que x
      if (val !== "" && (parseInt(val) <= 0 || val.includes("-"))) {
        setWarning("Digite apenas números positivos maiores que zero");
      } else if (val !== "" && x !== "" && parseInt(val) <= parseInt(x)) {
        setWarning("Digite y maior que x");
      } else {
        setWarning("");
      }
    },
    [x]
  );

  const botaoDesativado =
    loading ||
    warning ||
    !x ||
    !y ||
    parseInt(x) <= 0 ||
    parseInt(y) <= 0 ||
    parseInt(x) >= parseInt(y);

  return (
    <div className="container">
      <h1>Calculadora de Mínimo Múltiplo Comum</h1>

      <div>
        <input
          type="number"
          placeholder="Valor inicial (x)"
          value={x}
          onChange={handleXChange}
        />
        <input
          type="number"
          placeholder="Valor final (y)"
          value={y}
          onChange={handleYChange}
        />
      </div>

      {warning && <div className="warning">{warning}</div>}

      <button onClick={calcularLCM} disabled={botaoDesativado}>
        {loading ? "Calculando..." : "Calcular"}
      </button>

      <Resultado valor={resultado} />

      {erro && <div className="error">{erro}</div>}
    </div>
  );
}

export default App;
