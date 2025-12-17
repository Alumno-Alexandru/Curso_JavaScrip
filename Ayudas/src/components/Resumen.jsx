import React from 'react';

const Resumen = ({ pedido, platillos, total, propina, onPropinaChange }) => (
  <section id="resumen" className="resumen bg-light container-fluid mt-5 p-4">
    <h2 className="text-center my-4">Resumen De Consumo</h2>
    <div className="contenido row">
      <div className="col-md-6">
        {pedido.length === 0 ? (
          <p className="text-center">Añade los elementos del pedido</p>
        ) : (
          <ul>
            {pedido.map(item => {
              const platillo = platillos.find(p => p.id === item.id);
              return (
                <li key={item.uid}>{platillo?.nombre} x {item.cantidad} = ${((platillo?.precio || 0) * item.cantidad).toFixed(2)}</li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="col-md-6">
        <p className="text-center">Factura</p>
        <div className="mb-2">Total: ${total.toFixed(2)}</div>
        <div className="mb-2">
          <label>Propina: </label>
          <input type="number" min="0" value={propina} onChange={onPropinaChange} className="form-control form-control-sm d-inline w-auto ms-2" />
        </div>
        <div className="fw-bold">Total a pagar: ${(total + Number(propina || 0)).toFixed(2)}</div>
      </div>
    </div>
  </section>
);

export default Resumen;
