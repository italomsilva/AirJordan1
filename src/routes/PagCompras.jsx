import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { TenisContext } from '../context/tenisContext';

function PagCompras(){
    const{imgSelec, textImg, tamSelec, tipoTam} = useContext(TenisContext);
    return(
        <div>
            <h1 style={{fontSize: "8rem", color: "red"}}>Pagina de Compras</h1>
            <p>Modelo Selecionado: {textImg}</p>
            <p>Tamanho selecionado: {tipoTam} - {tamSelec}</p>
            <Link to="/">voltar para Home</Link>
        </div>
    )
}

export default PagCompras