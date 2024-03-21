import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { TenisContext } from '../context/tenisContext';
import  s from "./PagCompras.module.css"
import { FaStar, FaAngleLeft } from 'react-icons/fa'
import classNames from 'classnames';

function PagCompras(){
    const [radOn, setRadOn] = useState(1);
    const{imgSelec, textImg, tamSelec, tipoTam} = useContext(TenisContext);
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
                    <span>N do modelo</span>
                    <strong>5.0 <FaStar/></strong>
                </p>
                <div>
                    <div style={{marginLeft: (radOn==1? "0": (radOn==2? "-67vw": "-132vw"))}} className={s.divimgs}>
                        <img src={imgSelec} alt="" />
                        <img src="src/img/banners/aj-cartaz1.jpg" alt="" />
                        <img src="src/img/banners/aj-cartaz2.jpg" alt="" />
                    </div>
                    <div className={s.divinputs}>
                        <input type="radio" name="rad" id="pgcomprad1" className={s.compradio} onChange={()=>setRadOn(1)} />
                        <input type="radio" name="rad" id="pgcomprad2" className={s.compradio} onChange={()=>setRadOn(2)}/>
                        <input type="radio" name="rad" id="pgcomprad3" className={s.compradio} onChange={()=>setRadOn(3)}/>

                        <label htmlFor="pgcomprad1"  className={classNames(s.labelcomp, (radOn==1? s.ativado : null))}></label>
                        <label htmlFor="pgcomprad2" className={classNames(s.labelcomp, (radOn==2? s.ativado : null))}></label>
                        <label htmlFor="pgcomprad3" className={classNames(s.labelcomp, (radOn==3? s.ativado : null))}></label>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default PagCompras