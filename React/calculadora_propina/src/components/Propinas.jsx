// Propinas.jsx
import React from "react";
import "../css/Propinas.css";

const Propinas = ({
  opciones = [0, 5, 10, 15],
  onSeleccionar = () => {},
}) => {
  return (
    <main className="container bg-light mt-5 p-3">
      <h2 className="text-center mb-3">Propina</h2>

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {opciones.map((valor) => (
          <button
            key={valor}
            onClick={() => onSeleccionar(valor)}
            className="button1"
          >
            {valor === 0 ? "Sin propina" : `${valor}%`}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Propinas;
