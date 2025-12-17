import React, { useState } from "react";
import "./App.css";
import db from "./components/db.json";

// Importar los componentes que necesitamos
import PlatilloCard from "./components/PlatilloCard";
import Resumen from "./components/Resumen";
import ModalOrden from "./components/ModalOrden";

function App() {
  // Estado para guardar los platillos que el cliente pide
  const [pedido, setPedido] = useState([]);
  // Estado para el porcentaje de propina elegido
  const [propinaPorcentaje, setPropinaPorcentaje] = useState(0);
  // Estado para abrir o cerrar el modal de crear orden (abierto por defecto)
  const [modalOpen, setModalOpen] = useState(true);
  // Estado para guardar los datos de la orden (mesa y hora)
  const [ordenData, setOrdenData] = useState(null);

  // Función que actualiza el pedido cuando el cliente cambia la cantidad de un platillo
  const actualizarPedido = (platillo, cantidad) => {
    setPedido((prev) => {
      const existe = prev.find((p) => p.id === platillo.id);

      if (cantidad === 0) {
        return prev.filter((p) => p.id !== platillo.id);
      }

      if (existe) {
        return prev.map((p) =>
          p.id === platillo.id ? { ...p, cantidad } : p
        );
      }

      return [...prev, { id: platillo.id, cantidad }];
    });
  };

  // Limpia el pedido y la propina cuando el usuario quiere empezar de nuevo
  const limpiarPedido = () => {
    setPedido([]);
    setPropinaPorcentaje(0);
  };

  // Función para crear una nueva mesa - reseta los datos de la orden y abre el modal
  const crearNuevaMesa = () => {
    setOrdenData(null);
    limpiarPedido();
    setModalOpen(true);
  };

  // Función que calcula el total y lo muestra en la consola del navegador
  const guardarEnConsola = () => {
    const subtotal = pedido.reduce((total, item) => {
      const platillo = db.platillos.find(p => p.id === item.id);
      return total + (platillo ? platillo.precio * item.cantidad : 0);
    }, 0);

    const propina = (subtotal * propinaPorcentaje) / 100;
    const total = subtotal + propina;

    const recibo = {
      pedido: pedido.map(item => {
        const platillo = db.platillos.find(p => p.id === item.id);
        return {
          nombre: platillo?.nombre,
          cantidad: item.cantidad,
          precio: platillo?.precio,
          subtotal: platillo?.precio * item.cantidad
        };
      }),
      subtotal: subtotal.toFixed(2),
      propinaPorcentaje: propinaPorcentaje,
      propina: propina.toFixed(2),
      total: total.toFixed(2),
      fecha: new Date().toLocaleString()
    };

    console.log('=== RECIBO DE CONSUMO ===');
    console.log(recibo);
    alert('Recibo guardado en consola. Abre la consola del navegador (F12) para verlo.');
  };

  return (
    <>
      {/* ================= MODAL ORDEN ================= */}
      <ModalOrden
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onGuardar={(data) => {
          // Guardar los datos de la orden y cerrar el modal
          setOrdenData(data);
          setModalOpen(false);
          console.log("ORDEN CREADA:", {
            ...data,
            pedido,
            propinaPorcentaje,
          });
        }}
      />

      {/* ================= CONTENIDO PRINCIPAL ================= */}
      {ordenData && (
        <main style={{ padding: 24 }}>
          {/* Mostrar datos de la orden actual */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, marginTop: 20, marginBottom: 30 }}>
            <div style={{ color: "#000000ff", fontWeight: "bold", fontSize: 18 }}>
              Mesa {ordenData.mesa} - Hora: {ordenData.hora}
            </div>
            <button
              onClick={crearNuevaMesa}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "none",
                background: "#fffb00ff",
                color: "#000000ff",
                fontSize: 14,
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Mesa
            </button>
          </div>

          {/* ================= PLATILLOS ================= */}
          <h1 style={{ textAlign: "center" }}>Platillos Disponibles</h1>

          {/* ================= PRODUCTOS EN GRID ================= */}
          <section className="productos-grid">
            {db.platillos.map((platillo) => (
              <PlatilloCard
                key={platillo.id}
                platillo={platillo}
                onCantidadChange={(cantidad) =>
                  actualizarPedido(platillo, cantidad)
                }
              />
            ))}
          </section>

          {/* ================= RESUMEN Y FACTURA ================= */}
          <Resumen
            pedido={pedido}
            platillos={db.platillos}
            propinaPorcentaje={propinaPorcentaje}
            onPropinaChange={setPropinaPorcentaje}
            onLimpiar={limpiarPedido}
            onImprimir={guardarEnConsola}
          />
        </main>
      )}
    </>
  );
}

export default App;
