import s from './Contact.module.css'
import { useState } from 'react';
function Contact() {
    const [inpnome, setImpNome] = useState("")
    const mudarNome= (e)=>{
        setImpNome(e.target.value)
    }


    const [inpMsg, setImpMsg] = useState("")
    const mudarMsg= (e)=>{
        setImpMsg(e.target.value)
    }
    const convNome = encodeURIComponent(`Olá, sou ${inpnome}. `);
    const convMsg = encodeURIComponent(inpMsg);
    const link = `http://wa.me/5585991289947?text=${convNome}${convMsg}`

    return (
        <section className={s.sectioncomprar}>
            <h1>Contato</h1>
            <section>
                <div>
                    <label htmlFor="inome">Nome: </label>
                    <input type="text" name="nome" id="inome" value={inpnome} onChange={(e)=>{mudarNome(e)}}/>
                </div>
                <div>
                    <label htmlFor="imsg">Mensagem: </label>
                    <input type="text" name="msg" id="imsg" value={inpMsg} onChange={(e)=>{mudarMsg(e)}} />
                </div>
                <a href={link}>Enviar</a>
            </section>
        </section>
    )

}

export default Contact
