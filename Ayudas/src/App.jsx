import { useState, useEffect } from 'react';
import ModalOrden from './components/ModalOrden';
import Platillos from './components/Platillos';
import Resumen from './components/Resumen';
import './App.css';

const CATEGORIAS = { comida: 'Comida', bebida: 'Bebidas', postre: 'Postres' };

function App() {
  const [mesa, setMesa] = useState('');
  const [hora, setHora] = useState('');
  const [modalOpen, setModalOpen] = useState(true);
  const [platillos, setPlatillos] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [pedido, setPedido] = useState([]);
  const [propina, setPropina] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/platillos')
      .then(r => r.json())
      .then(data => setPlatillos(data));
  }, []);

  const handleMesaChange = e => setMesa(e.target.value);
  const handleHoraChange = e => setHora(e.target.value);
  const handleGuardar = () => {
    if (!mesa || !hora) {
      alert('Todos los campos son obligatorios');
      return;
    }
    setModalOpen(false);
  };

  const handleSumar = uid => {
    setCantidades(prev => ({ ...prev, [uid]: (prev[uid] || 0) + 1 }));
  };
  const handleRestar = uid => {
    setCantidades(prev => ({ ...prev, [uid]: Math.max((prev[uid] || 0) - 1, 0) }));
  };
  const handleQuitar = uid => {
    setCantidades(prev => {
      const nuevo = { ...prev };
      delete nuevo[uid];
      return nuevo;
    });
  };
  const handleCantidadChange = (uid, value) => {
    const val = Math.max(Number(value), 0);
    setCantidades(prev => ({ ...prev, [uid]: val }));
  };

  useEffect(() => {
    const nuevoPedido = Object.entries(cantidades)
      .filter(([_, cantidad]) => cantidad > 0)
      .map(([uid, cantidad]) => ({ uid, id: Number(String(uid).split('-')[0]), cantidad }));
    setPedido(nuevoPedido);
  }, [cantidades]);

  const total = pedido.reduce((acc, item) => {
    const platillo = platillos.find(p => p.id === item.id);
    return acc + (platillo ? platillo.precio * item.cantidad : 0);
  }, 0);

  return (
    <>
      <header className="py-4 bg-secondary">
        <h1 className="text-center text-white fs-3">Calculadora de Consumos y Propinas</h1>
      </header>
      <div className="d-flex mt-4 justify-content-center">
        <button data-bs-toggle="modal" data-bs-target="#formulario" type="button" className="btn btn-success" onClick={() => setModalOpen(true)}>
          Nueva Orden
        </button>
      </div>
      {/* {modalOpen && (
        <ModalOrden
          mesa={mesa}
          hora={hora}
          onMesaChange={handleMesaChange}
          onHoraChange={handleHoraChange}
          onGuardar={handleGuardar}
        />
      )} */}
      {modalOpen && (
        <>
          <Platillos
            platillos={platillos}
            cantidades={cantidades}
            onSumar={handleSumar}
            onRestar={handleRestar}
            onQuitar={handleQuitar}
            onCantidadChange={handleCantidadChange}
          />
          <Resumen
            pedido={pedido}
            platillos={platillos}
            total={total}
            propina={propina}
            onPropinaChange={e => setPropina(Number(e.target.value))}
          />
        </>
      )}
    </>
  );
}

export default App;
