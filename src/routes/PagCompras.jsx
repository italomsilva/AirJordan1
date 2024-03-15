import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { TenisContext } from '../context/tenisContext';
import  s from "./PagCompras.module.css"
import { FaStar } from 'react-icons/fa'

function PagCompras(){
    const [radOn, setRadOn] = useState(1);
    const{imgSelec, textImg, tamSelec, tipoTam} = useContext(TenisContext);
    return(
        <section className={s.pagcompras} id='pagCompras'>
            <div className={s.divtit}>
                <h1 className={s.tit}>Nike Air Jordan 1 High {textImg}</h1>
            </div>
            <section>
                <p className={s.pmodel}>
                    <span>N do modelo</span>
                    <strong>5.0 <FaStar/></strong>
                </p>
                <div>
                    <div style={{marginLeft: (radOn==1? "-2vw": (radOn==2? "-97vw": "-192vw"))}} className={s.divimgs}>
                        <img src={imgSelec} alt="" />
                        <img src="src/img/banners/aj-cartaz1.jpg" alt="" />
                        <img src="src/img/banners/aj-cartaz2.jpg" alt="" />
                    </div>
                    <div className={s.divinputs}>
                        <input type="radio" name="rad" id="rad1" onChange={()=>setRadOn(1)} />
                        <input type="radio" name="rad" id="rad2" onChange={()=>setRadOn(2)}/>
                        <input type="radio" name="rad" id="rad3" onChange={()=>setRadOn(3)}/>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default PagCompras