import s from './TabelaTamanho.module.css'
import { TenisContext } from '../../context/tenisContext';
import { useContext } from 'react';

function TabelaTamanho ({arr}){
    const {setTamSelec, setTamCM, setTipoTam, setCardPosit} = useContext(TenisContext)

   return(
        <div className={s.tamcard}>
            <h3>Feminino</h3>
            <ul>
                {arr.map((el, i)=>{
                    return(
                        <li>
                            <input type="radio"
                                key={i}
                                id={el.tipo+el.text}
                                name='radiotam'
                                value={el.valor}
                                onChange={()=>{
                                    setTamSelec(el.text);
                                    setTamCM(el.valor);
                                    setTipoTam(el.tipo)
                                    setCardPosit("fixed");
                                }}
                            />
                            <label htmlFor={el.tipo+el.text}>{el.text}</label>
                        </li>
                    )
                })}
            </ul>
        </div>
)
}
export default TabelaTamanho