import React, { useContext } from 'react';
import s from './SectionComprar.module.css'
import palmilha from '../../img/banners/palmilha.jpg'
import tit from '../Titulos.module.css';
import classNames from 'classnames';
import CardComprar from './CardComprar';
import { TenisContext } from '../../context/tenisContext';

function SectionComprar(){


const {tenis, tamFem, tamMas, imgSelec, setimgSelec, corSelec, setcorSelec, textImg, setTextImg, tamSelec, setTamSelec, tamCM, setTamCM, tipoTam, setTipoTam, liSelec, setLiSelet } = useContext(TenisContext);


  var verifCard=()=>{
    if(tamSelec=='Não selecionado'){
            window.alert('Selecione a cor e o modelo desejado')
    } else{
        location.replace("/AirJordan1/comprar:aj1");
    }
  };

  return (
    <div className={s.comp_conteiner}>
        <div className={s.comp_colorlist} >
            <div>
                <h3 className={classNames(tit.subtit, tit.pequeno)} style={{paddingLeft: '1rem'}}>Escolha a cor</h3>
                <ul className={s.colorlist_ul}>
                    {tenis.map((objTenis, index) => (
                        <li  onClick={() => {setimgSelec(objTenis.url);setcorSelec(objTenis.cor); setTextImg(objTenis.text); setLiSelet(index)}} className={classNames(index==liSelec? s.ativado : null)}>
                            <img
                                key={index}
                                src={objTenis.url}
                                alt={`Imagem ${index}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={s.colorimg_cont} >
                <div style={{backgroundColor: corSelec}}>
                    <img src={imgSelec} alt="Imagem Selecionada" />
                </div>
             </div>
        </div>
        {/* lista de tamanhos */}
        <div className={s.tam_conteinergeral}>
            <h3 className={classNames(tit.subtit, tit.pequeno)} style={{paddingLeft: '1rem'}}>Escolha o tamanho</h3>
            <div className={s.tam_cardsconteiner}>
                <div className={s.tam_cards}>
                    <div className={s.tamcard}>
                        <h3>Masculino</h3>
                        <ul>
                            {tamMas.map((el, i)=>{
                                return(
                                    <li>
                                         <input type="radio"
                                            key={i}
                                            id={el.tipo+el.text}
                                            name='radiotam'
                                            value={el.valor}
                                            onChange={()=>{setTamSelec(el.text); setTamCM(el.valor); setTipoTam(el.tipo)}}
                                        />
                                        <label htmlFor={el.tipo+el.text}>{el.text}</label>
                                    </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    <div className={s.tamcard}>
                        <h3>Feminino</h3>
                        <ul>
                            {tamFem.map((el, i)=>{
                                return(
                                    <li>
                                        <input type="radio"
                                            key={i}
                                            id={el.tipo+el.text}
                                            name='radiotam'
                                            value={el.valor}
                                            onChange={()=>{setTamSelec(el.text); setTamCM(el.valor); setTipoTam(el.tipo)}}
                                        />
                                        <label htmlFor={el.tipo+el.text}>{el.text}</label>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <article className={s.tam_article}>
                    <div>
                        <h4>Guia de tamanhos</h4>
                        <p>Retire a Palmilha de um calçado que lhe sirva bem e meça o comprimento conforme a imagem.<br/>
                        Comprimento da palmilha do tamanho selecionado: <br/><strong>{tamCM}</strong> cm
                        </p>
                    </div>
                    <div>
                        <img src={palmilha} alt="" />
                    </div>
                </article>

            </div>
        </div>
        <CardComprar
        tamanho={tamSelec}
        modelo={textImg}
        imagem={imgSelec}
        tipotam={tipoTam}
        clicado={verifCard}
        />
    </div>
  );
};

export default SectionComprar;