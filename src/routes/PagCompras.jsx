import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { TenisContext } from '../context/tenisContext';
import  s from "./PagCompras.module.css"
import { FaStar, FaAngleLeft } from 'react-icons/fa'
import classNames from 'classnames';
import CardComprar from '../components/comprar/CardComprar';

function PagCompras(){
    const [radOn, setRadOn] = useState(1);
    const{tenis, tamFem, tamMas, imgSelec, setimgSelec, corSelec, setcorSelec, textImg, setTextImg, tamSelec, setTamSelec, tipoTam, setTipoTam, imgsref, setImgsRef, idTenis, setIdTenis } = useContext(TenisContext);
    return(
        <section className={s.pagcompras} id='pagCompras'>
            <div className={s.headPagComp}>
                <span>
                    <Link to="/AirJordan1/"><FaAngleLeft/></Link>
                </span>
            </div>
            <div className={s.divtit}>
                <h1 className={s.tit}>Nike Air Jordan 1 High {textImg}</h1>
            </div>
            <section>
                <p className={s.pmodel}>
                    <span>Id: {idTenis}</span>
                    <strong>5.0 <span><FaStar/></span></strong>
                </p>
                <div>
                    <div style={{marginLeft: ((radOn-1)*-100)+"vw"}} className={s.divimgs}>
                        {imgsref.map((e)=>{
                            return(
                                <div className={s.divimgsref}>
                                    <img src={e} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div className={s.divinputs}>

                    {imgsref.map((e, i)=>{
                            return(<>
                                <input type="radio" name="rad" id={"pgcomprad"+(i+1)} className={s.compradio} onChange={()=>setRadOn(i+1)}/>
                                <label htmlFor={"pgcomprad"+(i+1)}  className={classNames(s.labelcomp, (radOn==i+1? s.ativado : null))}></label>
                            </>)
                        })}
                    </div>
                </div>
            </section>
            <section className={s.selec_cor}>
                <ul>
                    {
                        tenis.map((t, i)=>{
                            return(
                                <li>
                                    <button className={classNames(s.cor_item, (corSelec == t.cor? s.ativado: null))}
                                    style={{backgroundColor: t.cor}}
                                    onClick={()=> {
                                        setcorSelec(t.cor);
                                        setimgSelec(t.url);
                                        setImgsRef(t.imgs);
                                        setTextImg(t.text);
                                        setRadOn(1);
                                        setIdTenis(t.id)
                                    }}
                                    >
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <section className={s.selec_tam}>
                <div className={s.selec_tipotam}>
                    <button className={(tipoTam=='Masculino'? s.ativado: null)} onClick={()=> {setTipoTam('Masculino'); setTamSelec(tamMas[0].text)}}>Masculino</button>
                    <button className={(tipoTam=='Feminino'? s.ativado: null)} onClick={()=> {setTipoTam('Feminino'); setTamSelec(tamFem[0].text)}}>Feminino</button>
                </div>
                <ul style={{display: (tipoTam =='Masculino'? "flex": "none")}}>
                    {
                        tamMas.map((e)=>{
                            return(
                                <li>
                                    <button onClick={()=>setTamSelec(e.text)} className={classNames(s.btn_tam, (tamSelec==e.text? s.ativado: null))}>{e.text}</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul style={{display: (tipoTam =='Feminino'? "flex": "none")}}>
                    {
                        tamFem.map((e)=>{
                            return(
                                <li>
                                    <button onClick={()=> {setTamSelec(e.text)}} className={(tamSelec==e.text? s.ativado: null)}>{e.text}</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <CardComprar imagem={imgSelec} modelo={textImg} tamanho={tamSelec} tipotam={tipoTam} encaminhar="erro"/>
        </section>
    )
}

export default PagCompras