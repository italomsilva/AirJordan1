import s from './Relacionados.module.css'
import tit from '../../components/Titulos.module.css'
import {FaStar} from 'react-icons/fa'
import { relacionados } from '../../databases/DbRelacionados';
import classNames from 'classnames';
import { useState } from 'react';
import {Link} from 'react-router-dom' 

var tela= relacionados.length;
tela=tela*100;


function Relacionados(){
    const [clicado, setClicado]= useState(false);
    const [imgSelec, setImgSelec]= useState(relacionados[0].imagem);
    const [avalSelec, setAvalSelec]= useState(relacionados[0].avaliacao);
    const [textSelec, setTextSelec]= useState(relacionados[0].texto);
    const [preco, setPreco]= useState(relacionados[0].preco);
    const [tamanhos, setTams]= useState(relacionados[0].tamanho);
    const [tamselec, setTamSelec]= useState(tamanhos[0]);
    const [idRel, setIdRel]= useState(relacionados[0].id);
    const [indexSelec, setIndexSelec] = useState(0);
 
    return(
        <section id="relacionados" className={s.section_relacionados}>
            <h1 className={tit.subtit}>Relacionados</h1>
            <div className={s.contslide}>
                <div className={s.slide}>
                    {
                        relacionados.map((el, index)=>{ return(
                            <div className={s.card} onClick={()=>{
                                setClicado(!clicado); 
                                setPreco(el.preco);
                                setAvalSelec(el.avaliacao);
                                setImgSelec(el.imagem);
                                setTextSelec(el.texto);
                                setTams(el.tamanho);
                                setIdRel(el.id);
                                setIndexSelec(index)
                                }}>
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
                                            <Link onClick={(e)=>{e.stopPropagation()}} to={`/AirJordan1/comprar/${indexSelec}`}>Comprar</Link>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
            <div className={classNames(s.cloudbuy, { [s.ativado]: clicado} )}>
                <section className={s.cardbuy}>
                    <div onClick={()=>setClicado(false)} className={s.div_icon}>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={s.div_img}>
                        <img src={imgSelec} alt="" />
                    </div>
                    <div className={s.div_tit}>
                        <h3>{textSelec}</h3>
                    </div>
                    <div className={s.div_ul}>
                        <ul>
                            {tamanhos.map((el, i)=>{
                                return(
                                    <li onClick={()=>{setTamSelec(tamanhos[i])}}
                                    className={classNames(tamselec==tamanhos[i]? [s.tamselecionado]:null)}>{el}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={s.div_txt}>
                        <span className={s.span_btn}>
                           <button>
                               <Link to={`/AirJordan1/comprar/${indexSelec}`}>Comprar</Link>
                           </button>
                        </span>
                        <span className={s.span_txt}>
                            <strong>R$ {preco}</strong>
                            <span>{avalSelec} <i><FaStar/></i></span>
                        </span>
                    </div>
                </section>
            </div>
        </section>
    )
}
export default Relacionados