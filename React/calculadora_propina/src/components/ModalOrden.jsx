import React, { useState, useEffect } from "react";
import "../css/ModalOrden.css";
export default function ModalOrden({
  isOpen = false,
  initialMesa = "",
  initialHora = "",
  onClose = () => {},
  onGuardar = () => {},
}) {
  const [mesa, setMesa] = useState(initialMesa);
  const [hora, setHora] = useState(initialHora);

  // sincroniza si cambian las props iniciales
  useEffect(() => {
    setMesa(initialMesa);
  }, [initialMesa]);

  useEffect(() => {
    setHora(initialHora);
  }, [initialHora]);

  if (!isOpen) return null;

  const handleGuardar = () => {
    // validaciones simples
    const mesaNum = Number(mesa);
    if (!mesa || Number.isNaN(mesaNum) || mesaNum < 1 || mesaNum > 12) {
      alert("Por favor ingresa una mesa válida (1-12).");
      return;
    }
    if (!hora) {
      alert("Por favor selecciona una hora.");
      return;
    }

    onGuardar({ mesa: mesaNum, hora });
    // no hacemos auto-close obligatorio; llamamos onClose para que el padre decida
    onClose();
  };

 
  return (
    <div className="modal-orden-overlay">
      <div className="modal-orden-box">
        <header>
          <h2 style={{ margin: 0 }}>Crear orden</h2>
        </header>

        <section style={{ marginTop: 12 }}>
          <label>
            Mesa
            <input
              input className="modal-input"
              type="number"
              min={1}
              max={12}
              placeholder="1 - 12"
              value={mesa}
              onChange={(e) => setMesa(e.target.value)}
            />
          </label>
        </section>

        <section style={{ marginTop: 12 }}>
          <label>
            Hora
            <input
              input className="modal-input"
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </label>
        </section>

        <div className="modal-footer">
          <button type="button" onClick={onClose} className="modal-btn modal-btn-close">
            Cerrar
          </button>
          <button
            id="guardar-cliente"
            type="button"
            onClick={handleGuardar}
            className="modal-btn modal-btn-save"
          >
            Crear Orden
          </button>
        </div>
      </div>
    </div>
  );
}
