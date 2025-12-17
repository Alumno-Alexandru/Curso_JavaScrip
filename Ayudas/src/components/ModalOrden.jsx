import React from 'react';

const ModalOrden = ({ mesa, hora, onMesaChange, onHoraChange, onGuardar }) => (
  <div className="modal fade" id="formulario" tabIndex="-1">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Restaurant App</h2>
          <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Mesa</label>
              <input id="mesa" type="number" className="form-control" min="1" max="12" placeholder="Seleccione mesa del 1-12" value={mesa} onChange={onMesaChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Hora</label>
              <input id="hora" type="time" className="form-control" value={hora} onChange={onHoraChange} />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button id="guardar-cliente" type="button" className="btn btn-primary" onClick={onGuardar}>Crear Orden</button>
        </div>
      </div>
    </div>
  </div>
);

export default ModalOrden;
