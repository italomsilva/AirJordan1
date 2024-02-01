import s from "./Footer.module.css"
import { Link } from "react-router-dom"
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa"

function Footer(){
    return(
        <footer className={s.footercont}>
            <section className={s.footer_sec1}>
                <article>
                    <h1>Sobre este Site</h1>
                    <p>Este site foi criado por Italo Monteiro Silva, sem fins comerciais apenas com o intuito de ser utilizado como parte do <a href="">Potfólio</a> no meu<a href="https://github.com/italoms">Github</a>.</p>
                </article>
                <article>
                    <h1>Dúvidas ou quer falar comigo?</h1>
                    <p>Entre em contato através do <Link to="contact">Formulário de Contato</Link>.</p>
                </article>
            </section>
            <section className={s.footer_sec2}>
                <p>Copyrigt&#169; 2024 Dev.Italoms</p>
                <div>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaGithub/></a>
                    <a href="#"><FaLinkedinIn/></a>
                </div>
            </section>       
        </footer>
    )
}

export default Footer