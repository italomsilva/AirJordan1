import styles from './Paragrafs.module.css'

function Paragrafs( { text } ){
    return(
        <p className={styles.paragrafs}>{text}</p>
    )
}

export default Paragrafs