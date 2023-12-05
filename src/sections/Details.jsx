import styles from './Details.module.css'
import tit from '../components/Titulos.module.css'
import CardFotos from '../components/details/CardFotos'
import classNames from 'classnames'

function Details(){
    return(
        <section id="detalhes" className={styles.det_cont}>
            <h2 className={classNames(tit.subtit, tit.centralizado)} style={{color: '#fff'}}>O tenis do Legado</h2>
            <p>Há mais de 35 anos acompanhando aqueles que querem deixar seu nome na história.</p>
            <CardFotos />
        </section>
    )
}

export default Details