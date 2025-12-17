import React, { useState } from "react";
import "./App.css";
import db from "./components/db.json";

// Componentes
import PlatilloCard from "./components/PlatilloCard";
import Propinas from "./components/Propinas";
import Resumen from "./components/Resumen";
import ModalOrden from "./components/ModalOrden";

function App() {
  const [pedido, setPedido] = useState([]);
  const [propinaPorcentaje, setPropinaPorcentaje] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  //  Manejo del pedido
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

  return (
    <main style={{ padding: 24 }}>
      {/* ================= PLATILLOS ================= */}
      <h1 style={{ textAlign: "center" }}>Platillos Disponibles</h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginTop: 30,
        }}
      >
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

      {/* ================= RESUMEN ================= */}
      <Resumen
        pedido={pedido}
        platillos={db.platillos}
        propinaPorcentaje={propinaPorcentaje}
        onPropinaChange={setPropinaPorcentaje}
      />

      {/* ================= BOTÓN ORDEN ================= */}
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <button
          onClick={() => setModalOpen(true)}
          style={{
            padding: "12px 24px",
            borderRadius: 10,
            border: "none",
            background: "#0b78ff",
            color: "#000000ff",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Crear Orden
        </button>
      </div>
      {/* ================= MODAL ORDEN ================= */}
      <ModalOrden
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onGuardar={(data) => {
          console.log("ORDEN CREADA:", {
            ...data,
            pedido,
            propinaPorcentaje,
          });
        }}
      />
    </main>
  );
}

export default App;
