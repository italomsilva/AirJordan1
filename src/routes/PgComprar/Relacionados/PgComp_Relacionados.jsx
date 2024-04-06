import s from './PgComp_Relacionados.module.css'
import { useParams } from 'react-router-dom'
import { relacionados } from '../../../databases/DbRelacionados';
import { FaStar } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { TenisContext } from '../../../context/tenisContext';
import classNames from 'classnames';
import CardComprar from '../../../components/Comprar/CardComprar';

function PgComp_Relacionados (){
    const {index} = useParams();
    const tenis = relacionados[parseInt(index)] 

    const {tipoTam, setTipoTam, tamSelec, setTamSelec, tamMas, tamFem} = useContext(TenisContext);

   return(
    <div>
        <div className={s.divtit}>
            <h1 className={s.tit}>{tenis.texto}</h1>
        </div>
        <section>
            <p className={s.pmodel}>
                <span>Id: {tenis.id}</span>
                <strong>{tenis.avaliacao} <span><FaStar/></span></strong>
            </p>
            <div className={s.divimgs}>
                <div className={s.divimgsref}>
                    <img src={tenis.imagem} alt="" />
                </div>
            </div>
        </section>
        <div className={s.conteiner_selec}>
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
                                                    }} className={(tamSelec==e.text? s.ativado: null)}>{e.text}</button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
            </section>
        </div>
        <CardComprar
            titulo={tenis.texto}
            imagem={tenis.imagem}
            modelo="Classic"
            tamanho={tamSelec}
            tipotam={tipoTam}
            encaminhar="finalizarcompra"
        />
    </div>

)
}
export default PgComp_Relacionados