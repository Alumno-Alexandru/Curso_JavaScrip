import './App.css';
import './css/contador.css';
import './css/footer.css';
import Cabecera from './components/Cabecera';
import Footer from './components/footer';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);
  const [startValue, setStartValue] = useState('');

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }

  const restarContador = () => {
    if (numClicks !== 0) {
      setNumClicks(numClicks - 1);
    }
  }

  const manejarCambiarStart = (e) => {
    setStartValue(e.target.value);
  }

  const manejarIniciarEn = () => {
    const val = Number(startValue);
    if (!Number.isNaN(val)) {
      setNumClicks(val);
    } else {
      setNumClicks(0);
    }
    setStartValue('');
  }


  return (
    <div className="App">
      <Cabecera />

      <main className='main-content'>
        <Contador numClicks={numClicks} />

        <div className='input-section'>
          <label>Escribe el número inicial:</label>
          <input
            type="number"
            placeholder="0"
            value={startValue}
            onChange={manejarCambiarStart}
            className='input-number'
          />
        </div>
      </main>

      <Footer 
        manejarClick={manejarClick} 
        reiniciarContador={reiniciarContador} 
        restarContador={restarContador}
        manejarIniciarEn={manejarIniciarEn}
      />
    </div>
  )
}

export default App;
