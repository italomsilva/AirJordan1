import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { TenisContext } from '../context/tenisContext';
import  s from "./PagCompras.module.css"

function PagCompras(){
    const{imgSelec, textImg, tamSelec, tipoTam} = useContext(TenisContext);
    return(
        <section className={s.pagcompras} id='pagCompras'>
            <div>
                <h1>Pagina de compras</h1>
            </div>
            <Link to="/AirJordan1/">voltar para Home</Link>
        </section>
    )
}

export default PagCompras