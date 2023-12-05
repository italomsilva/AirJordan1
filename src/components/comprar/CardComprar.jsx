import s from './CardComprar.module.css'

function CardComprar({ imagem, modelo, tamanho, tipotam }){
    return(
        <aside className={s.card_comprar}>
        <div>
            <div>
                <img src={imagem} alt="" />
            </div>
            <div>
                <h2>Air Jordan 1</h2>
                <p>Modelo: <strong>{modelo}</strong></p>
                <p>Tamanho: <strong>{tipotam}</strong> - <strong>{tamanho}</strong></p>
                <p className={s.preco}><span>R$ 150,00</span> <strong>R$ 119,90</strong></p>
            </div>
        </div>
        <div>
            <a href="/comprar:aj1" className={s.comprar_btn}>Comprar</a>
        </div>
        </aside>
    )
}
export default CardComprar