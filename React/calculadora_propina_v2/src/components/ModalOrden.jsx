import React, { useState, useEffect } from "react";
import "../css/ModalOrden.css";

// Modal para crear una nueva orden (numero de mesa y hora)
export default function ModalOrden({
  isOpen = false,
  initialMesa = "",
  initialHora = "",
  onClose = () => {},
  onGuardar = () => {},
}) {
  // Guardamos el número de mesa que escribe el usuario
  const [mesa, setMesa] = useState(initialMesa);
  // Guardamos la hora que escoge el usuario
  const [hora, setHora] = useState(initialHora);

  // Actualiza el estado si vienen datos nuevos de afuera
  useEffect(() => {
    setMesa(initialMesa);
  }, [initialMesa]);

  useEffect(() => {
    setHora(initialHora);
  }, [initialHora]);

  // Si el modal está cerrado, no lo mostramos
  if (!isOpen) return null;

  // Función que valida si la mesa y hora son válidas antes de guardar
  const handleGuardar = () => {
    // Validar que la mesa esté entre 1 y 12
    const mesaNum = Number(mesa);
    if (!mesa || Number.isNaN(mesaNum) || mesaNum < 1 || mesaNum > 12) {
      alert("Por favor ingresa una mesa válida (1-12).");
      return;
    }
    // Validar que haya una hora seleccionada
    if (!hora) {
      alert("Por favor selecciona una hora.");
      return;
    }

    // Si todo está bien, guardar y cerrar
    onGuardar({ mesa: mesaNum, hora });
    onClose();
  };

 
  return (
    <div className="modal-orden-overlay">
      <div className="modal-orden-box">
        <header>
          <h2>Crear orden</h2>
        </header>

        <section style={{ marginTop: 12 }}>
          <label>
            Mesa
            {/* Input para que el usuario escriba el número de mesa (1-12) */}
            <input
              className="modal-input"
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
            {/* Input para que el usuario seleccione la hora */}
            <input
              className="modal-input"
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />
          </label>
        </section>

        <div className="modal-footer">
          {/* Botón para cerrar sin guardar */}
          <button type="button" onClick={onClose} className="modal-btn modal-btn-close">
            Cerrar
          </button>
          {/* Botón para guardar la orden */}
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
