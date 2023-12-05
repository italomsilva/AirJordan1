import jclassic from '../img/tenis/aj-classic.png'
import jlaranja from '../img/tenis/aj-laranja.png'
import jmarrom from '../img/tenis/aj-marrom.png'
import jpretobranco from '../img/tenis/aj-pretobranco.png'
import jrosa from '../img/tenis/aj-rosa.png'
import jrosapret from '../img/tenis/aj-rosapret.png'
import jrosepret from '../img/tenis/aj-rosepret.png'
import jroxo from '../img/tenis/aj-roxo.png'
import jverde from '../img/tenis/aj-verde.png'
import jverdelim from '../img/tenis/aj-verdelim.png'
import jvermazul from '../img/tenis/aj-vermazul.png'
import jvermpreto from '../img/tenis/aj-vermpreto.png'


function Tenis({cor, alt}){
    return(
        <img src={cor} alt={alt} />
    )
}

export default Tenis