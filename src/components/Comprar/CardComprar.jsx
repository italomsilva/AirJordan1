import s from './CardComprar.module.css'
import { Link } from 'react-router-dom'
import { TenisContext } from '../../context/tenisContext';
import { useContext } from 'react';
import {FaTrash} from 'react-icons/fa'

function CardComprar({ imagem, titulo, modelo, tamanho, tipotam, encaminhar}){
    const {cardPosit, setCardPosit} = useContext(TenisContext);
    return(
        <aside className={s.card_comprar} style={{position: cardPosit}}>
        <div className={s.cardcomprar_img}>
            <img src={imagem} alt="" />
        </div>
        <div className={s.cardcomprar_txt}>
            <div>
                <h2>{titulo}</h2>
                <p>Modelo: <strong>{modelo}</strong></p>
                <p>Tamanho: <strong>{tipotam}</strong> - <strong>{tamanho}</strong></p>
                <p className={s.preco}><span>R$ 150,00</span> <strong>R$ 119,90</strong></p>
            </div>
            <div className={s.divbtn}>
                <Link to={encaminhar} className={s.comprar_btn}>Comprar</Link>
                <button onClick={()=>{setCardPosit("inherit")}} className={s.comprar_btn}><FaTrash/></button>
            </div>
        </div>
        </aside>
    )
}
export default CardComprar