import React, { useState } from "react";
import db from "./db.json";
import "../css/PlatilloCard.css";

// Función para formatear el precio con el símbolo del euro
function currencyFormat(n) {
  return `€${Number(n).toFixed(2)}`;
}

// Objeto que mapea números de categoría a nombres descriptivos
const CATEGORIAS = {
  1: "Comida Rápida",
  2: "Bebidas",
  3: "Pizza",
  4: "Bebidas Alcohólicas",
  5: "Café"
};

// Función para obtener el nombre de la categoría
function getNombreCategoria(numeroCategoria) {
  return CATEGORIAS[numeroCategoria] || "Desconocida";
}

// Componente que muestra cada platillo en una tarjeta
export default function PlatilloCard({
  platillo,
  platilloId,
  initialCantidad = 0,
  onSumar = () => { },
  onRestar = () => { },
  onQuitar = () => { },
  onCantidadChange = () => { },
}) {
  // Obtener los datos del platillo desde el archivo de datos
  const data =
    platillo ||
    db.platillos?.find((p) => Number(p.id) === Number(platilloId));

  // Guardar la cantidad de platillos que el usuario selecciona
  const [cantidad, setCantidad] = useState(Number(initialCantidad) || 0);

  // Si el platillo no existe, mostrar mensaje de error
  if (!data) {
    return (
      <div className="platillo-card">
        <p>Platillo no encontrado</p>
      </div>
    );
  }

  // Función que maneja los cambios de cantidad
  function changeCantidad(next) {
    // Asegurarse que la cantidad sea un número positivo
    const n = Math.max(0, Math.floor(next));
    if (n > cantidad) onSumar(n);
    if (n < cantidad) onRestar(n);
    setCantidad(n);
    // Avisar al componente padre que cambió la cantidad
    onCantidadChange(n);
  }

  return (
    <article className="platillo-card">
      {/* Información del platillo */}
      <div className="platillo-info">
        {/* Nombre del platillo */}
        <h3 className="platillo-title">{data.nombre}</h3>

        {/* Detalles como categoría y precio */}
        <div className="platillo-meta">
          <span className="platillo-pill">
            Categoría: {getNombreCategoria(data.categoria)}
          </span>
          <span className="platillo-id">
            Precio: {currencyFormat(data.precio)}
          </span>
        </div>

        {/* Controles para cambiar la cantidad */}
        <div className="platillo-controls">
          {/* Botones de - y + para aumentar/disminuir cantidad */}
          <div className="platillo-qty">
            {/* Botón para restar cantidad */}
            <button
              className="qty-btn btn-menos"
              onClick={() => changeCantidad(cantidad - 1)}
            >
              -
            </button>

            {/* Campo donde se muestra la cantidad actual */}
            <input
              className="qty-input"
              type="number"
              min="0"
              value={cantidad}
              onChange={(e) => changeCantidad(e.target.value)}
            />

            {/* Botón para sumar cantidad */}
            <button
              className="qty-btn btn-mas"
              onClick={() => changeCantidad(cantidad + 1)}
            >
              +
            </button>
          </div>

          {/* Botones de acción: Quitar y Agregar/Actualizar */}
          <div className="platillo-actions">
            {/* Botón para quitar el platillo del pedido */}
            <button
              className="btn-remove"
              onClick={() => {
                setCantidad(0);
                onQuitar();
                onCantidadChange(0);
              }}
            >
              Quitar
            </button>

            {/* Botón para agregar o actualizar el platillo */}
            <button
              className="btn-add"
              onClick={() => {
                changeCantidad(cantidad + 1);
              }}
            >
              {cantidad === 0 ? "Agregar" : "Actualizar"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
