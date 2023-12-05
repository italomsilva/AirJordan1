import styles from './Conteiner.module.css'
import Home from '../sections/Home'
import Details from '../sections/Details'
import Comprar from '../sections/Comprar.jsx'
function Conteiner() {

    return (
        <div className={styles.conteiner}>
            <Home/>
            <Details/>
            <div className={styles.detcom_cp}></div>
            <Comprar/>
        </div>
    )
}

export default Conteiner
