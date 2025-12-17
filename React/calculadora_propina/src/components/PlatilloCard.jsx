import React, { useState } from "react";
import db from "./db.json";
import "../css/PlatilloCard.css";

function currencyFormat(n) {
  return `€${Number(n).toFixed(2)}`;
}

export default function PlatilloCard({
  platillo,
  platilloId,
  initialCantidad = 0,
  onSumar = () => { },
  onRestar = () => { },
  onQuitar = () => { },
  onCantidadChange = () => { },
}) {
  //  obtener el platillo SIN usar estado
  const data =
    platillo ||
    db.platillos?.find((p) => Number(p.id) === Number(platilloId));

  const [cantidad, setCantidad] = useState(Number(initialCantidad) || 0);

  if (!data) {
    return (
      <div className="platillo-card">
        <p>Platillo no encontrado</p>
      </div>
    );
  }

  function changeCantidad(next) {
    const n = Math.max(0, Math.floor(next));
    if (n > cantidad) onSumar(n);
    if (n < cantidad) onRestar(n);
    setCantidad(n);
    onCantidadChange(n);
  }

  return (
    <article className="platillo-card">
      {/* Información */}
      <div className="platillo-info">
        <h3 className="platillo-title">{data.nombre}</h3>

        <div className="platillo-meta">
          <span className="platillo-pill">
            Categoría: {data.categoria}
          </span>
          <span className="platillo-id">
            Precio: {currencyFormat(data.precio)}
          </span>
        </div>

        {/* Controles */}
        <div className="platillo-controls">
          <div className="platillo-qty">
            <button
              className="qty-btn"
              onClick={() => changeCantidad(cantidad - 1)}
            >
              -
            </button>

            <input
              className="qty-input"
              type="number"
              min="0"
              value={cantidad}
              onChange={(e) => changeCantidad(e.target.value)}
            />

            <button
              className="qty-btn"
              onClick={() => changeCantidad(cantidad + 1)}
            >
              +
            </button>
          </div>

          <div className="platillo-actions">
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

            <button
              className="btn-add"
              onClick={() => {
                const nuevaCantidad = cantidad === 0 ? 1 : cantidad;
                changeCantidad(nuevaCantidad);
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
