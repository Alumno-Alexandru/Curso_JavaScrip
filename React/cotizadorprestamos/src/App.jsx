import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import { formatearDinero, calcularTotalPagar } from './helpers';

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);
  const [alertLevel, setAlertLevel] = useState(null);
  const [edad, setEdad] = useState('');
  const [Warning, setWarning] = useState(null);

  useEffect(() => {
    console.log('Componente listo... cambiaron los meses o la cantidad');
    const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(resultadoTotalPagar);

    if (cantidad >= MAX) {
      setAlertLevel('max');
    } else if (cantidad >= 15000) {
      setAlertLevel('warning');
    } else {
      setAlertLevel(null);
    }
  }, [cantidad, meses]);

  useEffect(() => {
    setPago(total / meses);
  }, [meses, total]);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleChange(e) {
    setCantidad(+e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;
    if (valor < MIN) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = cantidad + STEP;
    if (valor > MAX) {
      alert('Cantidad no valida');
      return;
    }
    setCantidad(valor);
  }

  function handleEdadChange(e) {
    const value = e.target.value;
    
    // Validar que no sea negativo ni mayor a 100
    if (value !== '') {
      const edadNum = parseInt(value);
      
      if (edadNum < 0) {
        setEdad('0');
        setWarning(null);
        return;
      }
      
      if (edadNum > 100) {
        setEdad('100');
        setWarning('mayor');
        return;
      }
      
      setEdad(value);
      
      if (edadNum < 18) {
        setWarning('menor');
      } else if (edadNum > 65) {
        setWarning('mayor');
      } else {
        setWarning(null);
      }
    } else {
      setEdad(value);
      setWarning(null);
    }
  }

  return (
    <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
      <Header />

      {/* Campo de Edad */}
      <div className='my-6'>
        <label htmlFor="edad" className='block text-xl font-bold text-gray-500 text-center mb-3'>
          ¿Cuál es tu <span className='text-indigo-600'>edad</span>?
        </label>
        <input
          type="number"
          id="edad"
          value={edad}
          onChange={handleEdadChange}
          placeholder="Ingresa tu edad"
          min="0"
          max="100"
          className='w-full p-3 border-2 border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500
                     focus:outline-none focus:border-indigo-500'
        />
      </div>

      {/* Advertencias de Edad */}
      {Warning === 'menor' && (
        <div className="mb-4 p-4 text-red-800 bg-red-100 border-2 border-red-400 rounded-lg">
          <p className='font-bold mb-2'>Advertencia - Menor de edad</p>
          <p className='text-sm'>
            Debes ser mayor de 18 años para solicitar un prestamo. Es necesario contar con un adulto.
          </p>
        </div>
      )}

      {Warning === 'mayor' && (
        <div className="mb-4 p-4 text-amber-800 bg-amber-100 border-2 border-amber-400 rounded-lg">
          <p className='font-bold mb-2'>Advertencia - Mayor de 65 años</p>
          <p className='text-sm'>
            Para personas mayores de 65 años, debe saber que puede que le impidan el prestamo.  
          </p>
        </div>
      )}

      <div className='flex justify-between my-14'>
        <Button operador="-" fn={handleClickDecremento} />
        <input 
          type="range" 
          className='w-full h-6 bg-gray-200 accent-lime-100 haver:accent-lime-600 m-2' 
          onChange={handleChange}
          min={MIN}
          max={MAX}
          step={STEP}
          value={cantidad}
        />
        <Button operador="+" fn={handleClickIncremento} />
      </div>

      {alertLevel === 'warning' && (
        <div className="mb-4 p-3 text-yellow-800 bg-yellow-100 border border-yellow-300 rounded">
          Atención: has seleccionado una cantidad alta {cantidad}.
        </div>
      )}

      {alertLevel === 'max' && (
        <div className="mb-4 p-3 text-red-800 bg-red-100 border border-red-300 rounded font-bold">
          Has alcanzado el máximo permitido de {cantidad}.
        </div>
      )}

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-500'>
        {formatearDinero(cantidad)}
      </p>

      <h2 className='text-2x1 font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-600'>Plazo</span> a pagar
      </h2>

      <select 
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center texxt-xl font-bold text-gray-500'
        value={meses}
        onChange={e => setMeses(e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2x1 font-extrabold text-gray-500 text-center'>
          Resumen <span className='text-indigo-600'>de pagos</span>
        </h2>
        <p className='text-xl text-gray-500 text-center font-bold'>{meses} Meses</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pago)} Mensualidades</p>
      </div>

      {/* Botón de Solicitud
      <button
        disabled={Warning === 'menor'}
        className={`w-full mt-5 p-3 rounded-lg font-bold text-xl transition ${
          Warning === 'menor'
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        {Warning === 'menor' ? 'No disponible para menores de 18' : 'Solicitar Préstamo'}
      </button> */}
    </div>
  );
}

export default App;



















// import './App.css';
// import { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Button from './components/Button';
// import { formatearDinero, calcularTotalPagar } from './helpers';

// function App() {
//   let [cantidad, setCantidad] = useState(10000)
//   const [meses, setMeses] = useState(6);
//   const [total, setTotal] = useState(0);
//   const [pago, setPago] = useState(0);
//   const [alertLevel, setAlertLevel] = useState(null);


//   useEffect(() => {
//     console.log('Componente listo... cambiaron los meses o la cantidad')
//     const resultadoTotalPagar = calcularTotalPagar(cantidad, meses);
//     setTotal(resultadoTotalPagar);

//     if (cantidad >= MAX) {
//       setAlertLevel('max');
//     } else if (cantidad >= 15000) {
//       setAlertLevel('warning');
//     } else {
//       setAlertLevel(null);
//     }

//   }, [cantidad, meses]);

//   useEffect(() => {
//     setPago(total / meses)
//   }, [meses, total]);

//   const MIN = 0;
//   const MAX = 20000;
//   const STEP = 100;

//   function handleChange(e) {
//     setCantidad(+e.target.value);

//   }

//   function handleClickDecremento() {
//     const valor = cantidad - STEP;
//     if (valor < MIN) {
//       alert('Cantidad no valida');
//       return;
//     }
//     setCantidad(valor);
//   }

//   function handleClickIncremento() {
//     const valor = cantidad + STEP;
//     if (valor > MAX) {
//       alert('Cantidad no valida');
//       return;
//     }
//     setCantidad(valor);
//   }


//   return (
//     <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
//       {/*{hola}
//         {auth ? 'auteticatdo' : 'no autenticado'}*/}

//       <Header />

//       <div className='flex justify-between my-14'>
//         <Button operador="-" fn={handleClickDecremento} />
//         <input type="range" className='w-full h-6 bg-gray-200 accent-lime-100 haver:accent-lime-600 m-2' onChange={handleChange}
//           min={MIN}
//           max={MAX}
//           step={STEP}
//           value={cantidad}
//         />
//         <Button operador="+" fn={handleClickIncremento} />
//       </div>

//         {alertLevel === 'warning' && (
//           <div className="mb-4 p-3 text-yellow-800 bg-yellow-100 border border-yellow-300 rounded">
//             Atención: has seleccionado una cantidad alta {cantidad}.
//           </div>
//         )}

//         {alertLevel === 'max' && (
//           <div className="mb-4 p-3 text-red-800 bg-red-100 border border-red-300 rounded font-bold">
//             Has alcanzado el máximo permitido de {cantidad}.
//           </div>
//         )}

//       {/* {cantidad}*/}
//       <p className='text-center my-10 text-5xl font-extrabold text-indigo-500'>
//         {/* {cantidad}*/}
//         {formatearDinero(cantidad)}
//       </p>

//       <h2 className='text-2x1 font-extrabold text-gray-500 text-center'>
//         Elige un <span className='text-indigo-600'>Plazo</span> a pagar
//       </h2>

//       <select className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center texxt-xl font-bold text-gray-500'
//         value={meses}
//         onChange={e => setMeses(e.target.value)}
//       >
//         <option value="6">6 Meses</option>
//         <option value="12">12 Meses</option>
//         <option value="24">24 Meses</option>
//       </select>
//       <div className='my-5 space-y-3 bg-gray-50 p-5'>
//         <h2 className='text-2x1 font-extrabold text-gray-500 text-center'>
//           Resumen <span className='text-indigo-600'>de pagos</span>
//         </h2>
//         <p className='text-xl text-gray-500 text-center font-bold'>{meses}Meses</p>
//         <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
//         <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pago)} Mensualidades</p>
//       </div>
//     </div>
//   );
// }

// export default App;


