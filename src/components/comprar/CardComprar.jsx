import s from './CardComprar.module.css'
import { Link } from 'react-router-dom'

function CardComprar({ imagem, modelo, tamanho, tipotam, encaminhar}){
    return(
        <aside className={s.card_comprar}>
        <div className={s.cardcomprar_img}>
            <img src={imagem} alt="" />
        </div>
        <div className={s.cardcomprar_txt}>
            <div>
                <h2>Air Jordan 1</h2>
                <p>Modelo: <strong>{modelo}</strong></p>
                <p>Tamanho: <strong>{tipotam}</strong> - <strong>{tamanho}</strong></p>
                <p className={s.preco}><span>R$ 150,00</span> <strong>R$ 119,90</strong></p>
            </div>
            <div>
                <Link to={encaminhar} className={s.comprar_btn}>Comprar</Link>
            </div>
        </div>
        </aside>
    )
}
export default CardComprar