import React, { useState } from 'react';
import s from './SectionComprar.module.css'
import palmilha from '../../img/banners/palmilha.jpg'
import tit from '../Titulos.module.css';
import classNames from 'classnames';
import CardComprar from './CardComprar';

function SectionComprar(){
    const tenis = [
        {
            url: 'src/img/tenis/aj-classic.png',
            cor: '#ff0000',
            text: 'Classic',
        },
        {
            url: 'src/img/tenis/aj-laranja.png',
            cor: '#ff3c00',
            text: 'Orange',
        },
        {
            url: 'src/img/tenis/aj-marrom.png',
            cor: '#592800',
            text: 'Brown',
        },
        {
            url: 'src/img/tenis/aj-pretobranco.png',
            cor: '#000000',
            text: 'BlackWhite',
        },
        {
            url: 'src/img/tenis/aj-rosa.png',
            cor: '#f8a7f2',
            text: 'WhitePink',
        },
        {
            url: 'src/img/tenis/aj-rosapret.png',
            cor: '#ff009d',
            text: 'BlackPink',
        },
        {
            url: 'src/img/tenis/aj-rosepret.png',
            cor: '#ffcad1',
            text: 'Rosé',
        },
        {
            url: 'src/img/tenis/aj-roxo.png',
            cor: '#2e005f',
            text: 'Purple',
        },
        {
            url: 'src/img/tenis/aj-verde.png',
            cor: '#06542a',
            text: 'DarkGreen',
        },
        {
            url: 'src/img/tenis/aj-verdelim.png',
            cor: '#b7ff00',
            text: 'LightGreen',
        },
        {
            url: 'src/img/tenis/aj-vermazul.png',
            cor: '#00a6ff',
            text: 'RedBlue',
        },
        {
            url: 'src/img/tenis/aj-vermpreto.png',
            cor: '#900000',
            text: 'BlackRed',
        },
    ]
    const [imgSelec, setimgSelec] = useState(tenis[0].url);
    const [corSelec, setcorSelec] = useState(tenis[0].cor);
    const [textImg, setTextImg]= useState('Classic');
    // tamanhos
    const tamMas =[
        {
            tipo: 'Masculino',
            text: '35',
            valor: '22.5',
        },	
        {
            tipo: 'Masculino',
            text: '36',
            valor: '23.5',
        },	
        {
            tipo: 'Masculino',
            text: '37',
            valor: '24',
        },	
        {
            tipo: 'Masculino',
            text: '38',
            valor: '25',
        },	
        {
            tipo: 'Masculino',
            text: '39',
            valor: '25.5',
        },	
        {
            tipo: 'Masculino',
            text: '40',
            valor: '26.5',
        },	
        {
            tipo: 'Masculino',
            text: '41',
            valor: '27.5',
        },	
        {
            tipo: 'Masculino',
            text: '42',
            valor: '28',
        },	
        {
            tipo: 'Masculino',
            text: '43',
            valor: '29',
        },	
        {
            tipo: 'Masculino',
            text: '44',
            valor: '30',
        },
    ]
    const tamFem =[
        {
            tipo: 'Feminino',
            text: '33',
            valor: '21.5',
        },	
        {
            tipo: 'Feminino',
            text: '34',
            valor: '22.5',
        },
        {
            tipo: 'Feminino',
            text: '35',
            valor: '23',
        },	
        {
            tipo: 'Feminino',
            text: '36',
            valor: '24',
        },	
        {
            tipo: 'Feminino',
            text: '37',
            valor: '24.5',
        },	
        {
            tipo: 'Feminino',
            text: '38',
            valor: '25.5',
        },	
        {
            tipo: 'Feminino',
            text: '39',
            valor: '26',
        },	
        {
            tipo: 'Feminino',
            text: '40',
            valor: '27',
        },	
        {
            tipo: 'Feminino',
            text: '41',
            valor: '27.5',
        },	
        {
            tipo: 'Feminino',
            text: '42',
            valor: '28.5',
        },	
    ]
  const[tamSelec, setTamSelec] = useState('Não selecionado');
  const[tamCM, setTamCM] = useState('X');
  const[tipoTam, setTipoTam]= useState('Masculino');
  const[liSelec, setLiSelet]= useState(0);

  return (
    <div className={s.comp_conteiner}>
        <div className={s.comp_colorlist}>
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
        />
    </div>
  );
};

export default SectionComprar;