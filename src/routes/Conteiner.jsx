import styles from './Conteiner.module.css'
import Home from '../sections/Home/Home'
import Details from '../sections/Detalhes/Details.jsx'
import Comprar from '../sections/comprar/Comprar'
import Relacionados from '../sections/Relacionados/Relacionados.jsx'
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
