import React, { useContext } from 'react';
import s from './Comprar.module.css'
import palmilha from '../../img/banners/palmilha.jpg'
import tit from '../../components/Titulos.module.css';
import classNames from 'classnames';
import CardComprar from '../../components/Comprar/CardComprar';
import { TenisContext } from '../../context/tenisContext';

import TabelaTamanho from '../../components/Comprar/TabelaTamanho';

function SectionComprar(){


const {tenis, tamFem, tamMas, imgSelec, setimgSelec, corSelec, setcorSelec, textImg, setTextImg, tamSelec, setTamSelec, tamCM, setTamCM, tipoTam, setTipoTam, setImgsRef, setIdTenis, setCardPosit } = useContext(TenisContext);


  var verifCard=()=>{
    if(tamSelec=='Não selecionado'){
            window.alert('Selecione a cor e o tamanho desejado!')
    } else{
        location.replace("/AirJordan1/comprar:aj1");
    }
  };

  return (
    <section id="comprar">
    <div style={{backgroundColor: '#fff'}}>
        <h3 className={classNames(tit.subtit, tit.centralizado)}>Peça já o seu!</h3>
    </div>

    <div className={s.comp_conteiner}>
        <div className={s.comp_colorlist} >
            <div>
                <h3 className={classNames(tit.subtit, tit.pequeno)} style={{paddingLeft: '1rem'}}>Escolha a cor</h3>
                <ul className={s.colorlist_ul}>
                    {tenis.map((objTenis, index) => (
                        <li 
                        onClick={() => {
                            setimgSelec(objTenis.url);
                            setcorSelec(objTenis.cor);
                            setTextImg(objTenis.text);
                            setImgsRef(objTenis.imgs);
                            setIdTenis(objTenis.id);
                            setCardPosit("fixed");
                            }} 
                        className={classNames(objTenis.cor == corSelec? s.ativado : null)}>
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
                    <TabelaTamanho arr={tamMas}/>
                    <TabelaTamanho arr={tamFem}/>
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
        titulo="Air Jordan 1"
        tamanho={tamSelec}
        modelo={textImg}
        imagem={imgSelec}
        tipotam={tipoTam}
        clicado={verifCard}
        encaminhar="comprarAj1"
        />
    </div>
    </section>
  );
};

export default SectionComprar;