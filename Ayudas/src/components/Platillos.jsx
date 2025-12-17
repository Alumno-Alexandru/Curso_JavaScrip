import React from 'react';
import PlatilloCard from './PlatilloCard';

const Platillos = ({ platillos, cantidades, onSumar, onRestar, onQuitar, onCantidadChange }) => (
  <main id="platillos" className="container bg-light mt-5 p-2">
    <h2 className="text-center">Platillos</h2>
    <div className="contenido d-flex flex-wrap">
      {platillos.map((p, i) => {
        const uid = `${p.id}-${i}`;
        return (
          <PlatilloCard
            key={uid}
            platillo={p}
            cantidad={cantidades[uid] || 0}
            onSumar={() => onSumar(uid)}
            onRestar={() => onRestar(uid)}
            onQuitar={() => onQuitar(uid)}
            onCantidadChange={e => onCantidadChange(uid, e.target.value)}
          />
        );
      })}
    </div>
  </main>
);

export default Platillos;
