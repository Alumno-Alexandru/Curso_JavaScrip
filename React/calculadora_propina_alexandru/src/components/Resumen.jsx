import React from "react";
import "../css/Resumen.css";
import "../css/Propinas.css";

// Componente que muestra el resumen del pedido y la factura
const Resumen = ({
  pedido = [], // Lista de platillos que pidió el cliente
  platillos = [], // Lista de todos los platillos disponibles
  propinaPorcentaje = 0, // Porcentaje de propina elegido
  onPropinaChange = () => {}, // Función cuando cambia la propina
  onLimpiar = () => {}, // Función para limpiar el pedido
  onImprimir = () => {}, // Función para guardar en consola
}) => {
  // Calcular el subtotal multiplicando el precio por la cantidad de cada platillo
  const subtotal = pedido.reduce((total, item) => {
    const platillo = platillos.find(p => p.id === item.id);
    return total + (platillo ? platillo.precio * item.cantidad : 0);
  }, 0);

  // Calcular cuánto es la propina basada en el porcentaje
  const propina = (subtotal * propinaPorcentaje) / 100;

  // Calcular el total
  const total = subtotal + propina;



  return (
    <section className="resumen">
      <h2 className="resumen-title">Resumen de Consumo</h2>

      <div className="resumen-content">
        {/* SECCIÓN IZQUIERDA: Mostrar los platillos que pidió el cliente */}
        <div className="resumen-card">
          <h3>Pedido</h3>

          {pedido.length === 0 ? (
            <p className="empty">Añade platillos al pedido</p>
          ) : (
            // Lista de todos los platillos en el pedido
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

        {/* SECCIÓN DERECHA: Factura con cálculos y botones */}
        <div className="resumen-card">
          <h3>Factura</h3>

          {/* Mostrar el subtotal */}
          <div className="line">
            <span>Subtotal</span>
            <span>€{subtotal.toFixed(2)}</span>
          </div>

          {/* Sección de propina con input y botones */}
          <div className="line" style={{ position: 'relative', alignItems: 'center' }}>
            <span>Propina (%)</span>
            <div className="propina-buttons">
                {[5, 10, 15].map((v) => (
                  <button key={v} onClick={() => onPropinaChange(v)} className="button1">
                    {v}%
                  </button>
                ))}
              </div>

            {/* Input para escribir manualmente el porcentaje de propina */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Otros % : </span>
              <input
                type="number"
                min="0"
                value={propinaPorcentaje}
                onChange={e => onPropinaChange(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Mostrar cuánto es la propina en dinero */}
          <div className="line">
            <span>Propina</span>
            <span>€{propina.toFixed(2)}</span>
          </div>

          {/* Mostrar el total a pagar */}
          <div className="line total">
            <span>Total a pagar</span>
            <span>€{total.toFixed(2)}</span>
          </div>

          {/* Botones: Limpiar y Guardar en Consola */}
          <div className="factura-actions">
            {/* Botón para limpiar todo el pedido */}
            <button className="btn-limpiar" onClick={onLimpiar}>
              Limpiar
            </button>
            {/* Botón para guardar el recibo en la consola */}
            <button className="btn-imprimir" onClick={onImprimir}>
              Guardar en Consola
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumen;
