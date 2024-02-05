import s from './Relacionados.module.css'
import tit from '../components/Titulos.module.css'



const relacionados = [
    {
        imagem: "https://i.imgur.com/0BmhjaZ.png",
        texto: "Nike SB Force 58 Purple Edition",
        preco: "99,99",
        avaliacao: "3.8",
    },
    {
        imagem: "https://i.imgur.com/2RLhVC2.png",
        texto: "Nike Air Force Lv8",
        preco: "149,90",
        avaliacao: "4.5",
    },
    {
        imagem: "https://i.imgur.com/GYB5sEb.png",
        texto: "Nike Air Jordan 4 BlackWhite",
        preco: "399,90",
        avaliacao: "5.0",
    },
    {
        imagem: "https://i.imgur.com/02bqzon.png",
        texto: "Nike Air Max Alpha Trainer 5",
        preco: "119,90",
        avaliacao: "3.5",
    },
    {
        imagem: "https://i.imgur.com/ufU5rJY.png",
        texto: "Nike Air Force 2 76ers Edition",
        preco: "129,90",
        avaliacao: "3.0",
    },
    {
        imagem: "https://i.imgur.com/1ze2Pwe.png",
        texto: "Nike Air Jordan 4 WhiteRed",
        preco: "399,90",
        avaliacao: "5.0",
    },
    {
        imagem: "https://i.imgur.com/po7HeOl.png",
        texto: "Nike SB Dunk Low Club 58",
        preco: "99,90",
        avaliacao: "4.0",
    },
    {
        imagem: "https://i.imgur.com/MlVKULS.png",
        texto: "Nike Dunk High Retro SE",
        preco: "129,90",
        avaliacao: "3.3",
    },
]

var tela= relacionados.length;
tela=tela*100;


function Relacionados(){
    return(
        <section id="relacionados" className={s.section_relacionados}>
            <h1 className={tit.subtit}>Relacionados</h1>
            <div className={s.contslide}>
                <div className={s.slide}>
                    {
                        relacionados.map((el)=>{ return(
                            <div className={s.card}>
                                <div className={s.divimg}>
                                    <img src={el.imagem}/>
                                </div>
                                <div className={s.divtexto}>
                                    <h2>{el.texto}</h2>
                                    <div>
                                        <p>
                                            <strong>R${el.preco}</strong>
                                            <span>{el.avaliacao}</span>
                                        </p>
                                        <a href="">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        </section>
    )
}
export default Relacionados