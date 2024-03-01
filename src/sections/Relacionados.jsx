import s from './Relacionados.module.css'
import tit from '../components/Titulos.module.css'
import {FaStar} from 'react-icons/fa'
import { relacionados } from '../databases/DbRelacionados';

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
                                            <span><span className={s.star_icon}><FaStar/></span>{el.avaliacao}</span>
                                            <strong>R${el.preco}</strong>
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