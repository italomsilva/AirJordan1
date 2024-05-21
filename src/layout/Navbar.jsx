import nikebranco from '../img/logo/nike1-branco.png'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import classNames from 'classnames'

function Navbar() {

    const [ativo, setAtivo]= useState(false);

    return(
        <nav className={styles.nav}>
            <div  className={classNames(styles.menubur, (ativo==true? styles.menu_ativo : null))}>
                <div className={styles.logo}>
                    <img src={nikebranco} alt="" />
                </div>
                <menu onMouseOut={()=>setAtivo(false)}  className={styles.menulist}>
                    <li onClick={()=>{scrollTo(0,0)}}>
                        <Link to="/AirJordan1">Home</Link>
                    </li>
                    <li>
                        <a href="https://italomsilva.github.io/AirJordan1/#detalhes">Detalhes</a>
                    </li>
                    <li>
                        <a href="https://italomsilva.github.io/AirJordan1/#comprar">Comprar</a>
                    </li>
                    <li>
                        <a href="https://italomsilva.github.io/AirJordan1/#relacionados">Relacionados</a>
                    </li>
                    <li>
                        <Link to="contact">Contato</Link>
                    </li>
                    <li className={styles.menu_icons}>
                        <a target='_blank' href="mailTo:dev.italoms@gmail.com"><FaEnvelope/></a>
                        <a target='_blank' href="https://github.com/italomsilva"><FaGithub/></a>
                        <a target='_blank' href="https://www.linkedin.com/in/italo-monteiro-905273296"><FaLinkedinIn/></a>
                    </li>
                </menu>
                <div className={styles.nav_icons}>
                        <a target='_blank' href="mailTo:dev.italoms@gmail.com"><FaEnvelope/></a>
                        <a target='_blank' href="https://github.com/italomsilva"><FaGithub/></a>
                        <a target='_blank' href="https://www.linkedin.com/in/italo-monteiro-905273296"><FaLinkedinIn/></a>
                </div>
                <div className={styles.menuburguer} onClick={()=>setAtivo(!ativo)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar