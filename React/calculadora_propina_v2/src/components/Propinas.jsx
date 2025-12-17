// Componente que muestra botones para elegir el porcentaje de propina
import React from "react";
import "../css/Propinas.css";

const Propinas = ({
  opciones = [0, 5, 10, 15], // Opciones de propina disponibles
  onSeleccionar = () => {}, // Función que se ejecuta cuando el usuario elige una propina
}) => {
  return (
    <main className="container-propinas">
      <h2 className="titulo">Propina</h2>

      {/* Contenedor de los botones de propina */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Crear un botón para cada opción de propina */}
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
