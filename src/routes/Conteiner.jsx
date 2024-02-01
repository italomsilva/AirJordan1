import styles from './Conteiner.module.css'
import Home from '../sections/Home'
import Details from '../sections/Details'
import Comprar from '../sections/Comprar.jsx'
import Relacionados from '../sections/Relacionados.jsx'
function Conteiner() {

    return (
        <div className={styles.conteiner}>
            <Home/>
            <Details/>
            <div className={styles.detcom_cp}></div>
            <Comprar/>
            <Relacionados/>
        </div>
    )
}

export default Conteiner
