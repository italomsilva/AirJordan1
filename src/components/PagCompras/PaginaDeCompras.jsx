import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import  s from "./PaginaDeCompras.module.css"
import { FaAngleLeft } from 'react-icons/fa'

function PaginaDeCompras({child}){
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])
    return(
        <section className={s.pagcompras} id='pagCompras'>
            <div className={s.headPagComp}>
                <span>
                    <Link to="/AirJordan1/"><FaAngleLeft/></Link>
                </span>
            </div>
            {child}
        </section>
    )
}

export default PaginaDeCompras