import s from './Relacionados.module.css'
import tit from '../components/Titulos.module.css'



const relacionados = [
    {
        imagem: "src/img/relacionados/nikedunk.png",
        texto: "Nike dunk purple",
        preco: "99,99",
        avaliacao: "3.8",
    },
    {
        imagem: "src/img/relacionados/aifrocelv8.png",
        texto: "Nike Air Force Lv8",
        preco: "149,90",
        avaliacao: "4.5",
    },
    {
        imagem: "src/img/relacionados/airjordan4.png",
        texto: "Nike Air Jordan 4 BlackWhite",
        preco: "399,90",
        avaliacao: "5.0",
    },
    {
        imagem: "src/img/relacionados/airmax.png",
        texto: "Nike Air Max",
        preco: "119,90",
        avaliacao: "3.5",
    },
    {
        imagem: "src/img/relacionados/outroai.png",
        texto: "Nike Dunk High",
        preco: "129,90",
        avaliacao: "3.0",
    },
    {
        imagem: "src/img/relacionados/airjordan4_red.png",
        texto: "Air Jordan 4 WhiteRed",
        preco: "399,90",
        avaliacao: "5.0",
    },
    {
        imagem: "src/img/relacionados/outronikedunk.png",
        texto: "Nike Dunk BlueSky",
        preco: "99,90",
        avaliacao: "4.0",
    },
    {
        imagem: "src/img/relacionados/nikedunk.png",
        texto: "",
        preco: "",
        avaliacao: "",
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
                                <div className={s.divimg}><img src={el.imagem}/></div>
                                <div className={s.divtexto}>
                                    <h2>{el.texto}</h2>
                                    <div>
                                    <span>R$ {el.preco}</span>
                                    <span>{el.avaliacao}</span>
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