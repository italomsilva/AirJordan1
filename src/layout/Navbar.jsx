import nikebranco from '../img/logo/nike1-branco.png'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import classNames from 'classnames'

function Navbar() {

    const [ativo, setAtivo]= useState(false);

    return(
        <nav className={styles.nav}>
            <div className={classNames(styles.menubur, {
                [styles.menu_ativo]: ativo, 
                })}>
                <div className={styles.logo}>
                    <img src={nikebranco} alt="" />
                </div>
                <menu className={styles.menulist}>
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
                        <a target='_blank' href="https://www.instagram.com/italoms085?igsh=c2lub2tydjQ0bDU="><FaInstagram/></a>
                        <a target='_blank' href="https://github.com/italomsilva"><FaGithub/></a>
                        <a target='_blank' href="https://www.linkedin.com/in/italo-monteiro-905273296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></a>
                    </li>
                </menu>
                <div className={styles.nav_icons}>
                        <a target='_blank' href="https://www.instagram.com/italoms085?igsh=c2lub2tydjQ0bDU="><FaInstagram/></a>
                        <a target='_blank' href="https://github.com/italomsilva"><FaGithub/></a>
                        <a target='_blank' href="https://www.linkedin.com/in/italo-monteiro-905273296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></a>
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