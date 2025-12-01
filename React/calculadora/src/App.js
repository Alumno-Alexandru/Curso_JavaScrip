import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear'
import {useState} from 'react';
import {evaluate} from 'mathjs'

function App() {
  const [input, setInput] = useState('');
  const [memory, setMemory] = useState(null);

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input));
    } else {
      alert("Debes introducir los datos");
    }
  }

  // M+ = Guardar el resultado en memoria
  const memoriaguardada = () => {
    if(input){
      setMemory(input);
    } else {
      alert("El campo esta vacio");
    }
  };

  // Rec-Mem = Mostrar lo guardado en memoria
  const mostrarmemoria = () => {
    if (memory !== null) {
      setInput(memory);
    } else {
      alert("No hay nada guardado en memoria");
    }
  };

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            BORRAR
          </BotonClear>
        </div>
        <div className='fila'>
          <Boton manejarClick={memoriaguardada}>M+</Boton>
          <Boton manejarClick={mostrarmemoria}>Rec-Mem</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;