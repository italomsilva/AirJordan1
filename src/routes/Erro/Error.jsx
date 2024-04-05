import s from './Error.module.css'
import {Link} from 'react-router-dom'
import {FaHome, FaPhone, FaRegSadCry} from 'react-icons/fa'

function Error (){

   return(
      <section className={s.sectionerror}>
            <h1>Ops... Essa Página não foi encontrada! <FaRegSadCry/></h1>
            <Link to="/AirJordan1">Voltar para Home <FaHome/></Link>
           <Link to="/AirJordan1/contact">Entrar Em Contato <FaPhone/></Link>
           <ul>
                <h2>Possíveis razões:</h2>
                <li>Fim da aplicação</li>
                <li>Página não existente</li>
                <li>Acesso não permitido</li>
            </ul>

      </section>
   )
}
export default Error