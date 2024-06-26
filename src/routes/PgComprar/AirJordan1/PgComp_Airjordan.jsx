import { useContext, useEffect, useState } from 'react';
import { TenisContext } from '../../../context/tenisContext';
import  s from "./PgComp_AirJordan.module.css"
import { FaStar, FaAngleDown, FaAngleRight } from 'react-icons/fa'
import classNames from 'classnames';
import CardComprar from '../../../components/Comprar/CardComprar';
import Relacionados from '../../../sections/Relacionados/Relacionados'

function PgComp_AirJordan(){
    const [radOn, setRadOn] = useState(1);
    const{tenis, tamFem, tamMas, imgSelec, setimgSelec, corSelec, setcorSelec, textImg, setTextImg, tamSelec, setTamSelec, tipoTam, setTipoTam, imgsref, setImgsRef, idTenis, setIdTenis, setCardPosit } = useContext(TenisContext);
    const [relOn, setRelOn] = useState(false);
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return(
            <div>
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
                <div className={s.conteiner_selec}>
                    <section className={s.selec_cor}>
                        <ul>
                            {
                                tenis.map((t)=>{
                                    return(
                                        <li className={(corSelec == t.cor? s.ativado: null)}>
                                            <button className={classNames(s.cor_item, (corSelec == t.cor? s.ativado: null))}
                                            style={{backgroundColor: t.cor}}
                                            onClick={()=> {
                                                setcorSelec(t.cor);
                                                setimgSelec(t.url);
                                                setImgsRef(t.imgs);
                                                setTextImg(t.text);
                                                setRadOn(1);
                                                setIdTenis(t.id);
                                                setCardPosit("fixed");
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
                                            <button
                                            onClick={()=>{
                                            setTamSelec(e.text);
                                            setCardPosit("fixed");
                                            }} className={classNames(s.btn_tam, (tamSelec==e.text? s.ativado: null))}>{e.text}</button>
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
                                            <button onClick={()=> {
                                                setTamSelec(e.text);
                                                setCardPosit("fixed");
                                                }} className={(tamSelec==e.text? s.ativado: null)}>{e.text}</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </div>
                <CardComprar imagem={imgSelec} modelo={textImg} tamanho={tamSelec} tipotam={tipoTam} encaminhar="erro"/>
                <aside>
                    <h1 className={s.asidetit}><a id='#rel' href='#Rel'  onClick={()=>{ setRelOn(!relOn)}}>{relOn==true? "Ver Menos" : "Ver Mais"} {(relOn==false? <FaAngleDown/>: <FaAngleRight/>)}</a></h1>
                    <div className={classNames(s.divmore, (relOn==true? s.ativado: null))}>
                    <Relacionados/>
                    <CardComprar imagem={imgSelec} modelo={textImg} tamanho={tamSelec} tipotam={tipoTam} encaminhar="erro"/>
                    </div>
                </aside>
            </div>
    )
}

export default PgComp_AirJordan