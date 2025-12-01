import Boton from "./Boton";
import '../hojasestilo/BotonClear.css';


const BotonClear = (props) =>(
    <div className="boton-clear" 
        onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonClear;