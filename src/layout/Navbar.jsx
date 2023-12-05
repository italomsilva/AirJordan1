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
                    <li>
                        <Link reloadDocument to="/#home">Home</Link>
                    </li>
                    <li>
                        <a href="#detalhes">Detalhes</a>
                    </li>
                    <li>
                        <a href="#comprar">Comprar</a>
                    </li>
                    <li>
                        <a href="#relacionados">Relacionados</a>
                    </li>
                    <li>
                        <Link to="contact">Contato</Link>
                    </li>
                    <li className={styles.menu_icons}>
                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaGithub/></a>
                        <a href="#"><FaLinkedinIn/></a>
                    </li>
                </menu>
                <div className={styles.nav_icons}>
                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaGithub/></a>
                        <a href="#"><FaLinkedinIn/></a>
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