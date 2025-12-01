import Boton from './Boton';
import '../css/footer.css';

function Footer({ manejarClick, reiniciarContador, restarContador, manejarIniciarEn }) {
  return (
    <footer className="footer">
      <Boton texto='Click' esBotonDeClick={true} manejarClick={manejarClick} />
      <Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={reiniciarContador} />
      <Boton texto='Quitar' esBotonDeClick={true} manejarClick={restarContador} />
      <Boton texto='Iniciar en' esBotonDeClick={true} manejarClick={manejarIniciarEn} />
    </footer>
  );
}

export default Footer;
