import React from 'react';

const PlatilloCard = ({ platillo, cantidad, onSumar, onRestar, onQuitar, onCantidadChange }) => {
  const { nombre, precio, categoria } = platillo;
  return (
    <div className="col-md-6 mb-2">
      <div className="card h-100">
        <div className="card-body d-flex align-items-center justify-content-between p-2">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-2">
              <h6 className="mb-0 fw-bold">{nombre}</h6>
              <span className="small text-muted">{categoria}</span>
            </div>
            <div className="d-flex align-items-center gap-3 mt-1">
              <span className="small text-primary fw-bold">${precio}</span>
              <span className="small text-muted">Cant: {cantidad}</span>
            </div>
          </div>
          <div className="d-flex align-items-center gap-1">
            <button className="btn btn-sm btn-warning p-2 m-1" onClick={onRestar}>-</button>
            <input type="number" min="0" value={cantidad} onChange={onCantidadChange} className="form-control form-control-sm text-center p-2 m-1" style={{ width: '60px' }} />
            <button className="btn btn-sm btn-success p-2 m-1" onClick={onSumar}>+</button>
            <button className="btn btn-sm btn-danger p-2 m-1" onClick={onQuitar}>Quitar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatilloCard;
