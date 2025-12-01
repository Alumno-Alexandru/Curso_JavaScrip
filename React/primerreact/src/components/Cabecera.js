import login from '../img/logoies.png';
import '../css/cabecera.css';

function Cabecera() {
  return (
    <header className="header">
      <img className='header-logo' src={login} alt='logo IES Azarquiel' />
      <h1 className='header-title'>Contador App</h1>
    </header>
  );
}

export default Cabecera;
