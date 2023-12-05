import styles from './Home.module.css'
import jclassic from '../img/tenis/aj-classic.png'


function Home(){
    return(
        <section id="home" className={styles.home}>
            <div className={styles.bg_home}></div>
            <div className={styles.home_box1}>
                <h1>Nike</h1>
                <div>
                    <img src={jclassic} alt="" />
                </div>
            </div>
            <div className={styles.home_box2}>
                    <h2>Air Jordan <br/>1 High</h2>
                    <p><span>R$150,00</span> <strong>R$119,90</strong></p>
                    <div className={styles.home_btn}>
                        <a href="#comprar">Comprar</a>
                    </div>
            </div>
        </section>
    )
}

export default Home