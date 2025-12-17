import React from "react";
import "../css/Resumen.css";

const Resumen = ({
  pedido = [],
  platillos = [],
  propinaPorcentaje = 0,
  onPropinaChange = () => {},
}) => {
  // Subtotal
  const subtotal = pedido.reduce((total, item) => {
    const platillo = platillos.find(p => p.id === item.id);
    return total + (platillo ? platillo.precio * item.cantidad : 0);
  }, 0);

  // Propina
  const propina = (subtotal * propinaPorcentaje) / 100;

  // Total
  const total = subtotal + propina;

  return (
    
    <section className="resumen">
      <h2 className="resumen-title">Resumen de Consumo</h2>

      <div className="resumen-content">
        {/* Pedido */}
        <div className="resumen-card">
          <h3>Pedido</h3>

          {pedido.length === 0 ? (
            <p className="empty">Añade platillos al pedido</p>
          ) : (
            <ul className="pedido-list">
              {pedido.map(item => {
                const platillo = platillos.find(p => p.id === item.id);
                return (
                  <li key={item.id}>
                    <span>
                      {platillo?.nombre} x {item.cantidad}
                    </span>
                    <span>
                      €{(platillo?.precio * item.cantidad).toFixed(2)}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Factura */}
        <div className="resumen-card">
          <h3>Factura</h3>

          <div className="line">
            <span>Subtotal</span>
            <span>€{subtotal.toFixed(2)}</span>
          </div>

          <div className="line">
            <span>Propina (%)</span>
            <input
              type="number"
              min="0"
              value={propinaPorcentaje}
              onChange={e => onPropinaChange(Number(e.target.value))}
            />
          </div>

          <div className="line">
            <span>Propina</span>
            <span>€{propina.toFixed(2)}</span>
          </div>

          <div className="line total">
            <span>Total a pagar</span>
            <span>€{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumen;
