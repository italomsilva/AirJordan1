import tit from '../components/Titulos.module.css'
import SectionComprar from '../components/comprar/SectionComprar'
import classNames from 'classnames'


function Comprar(){
    return(
        <section id="comprar" style={{paddingTop: '60px'}}>
            <div>
                <h3 className={classNames(tit.subtit, tit.centralizado)}>Peça já o seu!</h3>
            </div>
            <SectionComprar/>
        </section>
    )
}
export default Comprar