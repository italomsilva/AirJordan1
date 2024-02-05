import {Link} from 'react-router-dom';

function PagCompras(){
    return(
        <div>
            <h1 style={{fontSize: "8rem", color: "red"}}>Pagina de Compras</h1>
            <Link to="/">voltar para Home</Link>
        </div>
    )
}

export default PagCompras