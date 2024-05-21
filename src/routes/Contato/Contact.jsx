import s from './Contact.module.css'
import { useEffect, useState } from 'react';
function Contact() {
    const [inpnome, setImpNome] = useState("")
    const mudarNome= (e)=>{
        setImpNome(e.target.value)
    }
    const [inpMsg, setImpMsg] = useState("")
    const mudarMsg= (e)=>{
        setImpMsg(e.target.value)
    }

    
    const link =  'mailto:dev.italoms@gmail.com?subject=AirJodan1%20Contact:'
    + encodeURIComponent(inpnome)
    + '&body='
    + encodeURIComponent(
        'Olá, meu nome é ' + inpnome + ',\n\n' +
        inpMsg + '\n\n' +
        'Atenciosamente,\n' + inpnome
    );



    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    return (
        <section className={s.sectioncontact}>
            <div className={s.bgcontact}>
                <form onSubmit={(e)=>{e.preventDefault(e);window.open(link);}} action="">
                    <h1>Contato</h1>
                    <div className={s.cont_inputs}>
                        <div>
                            <label htmlFor="inome">Nome:</label>
                            <input type="text" className={s.ctinputs} name="nome" id="inome" value={inpnome} onChange={(e)=>{mudarNome(e)}}/>
                        </div>
                        <div>
                            <label htmlFor="imsg">Mensagem: </label>
                            <textarea className={s.ctinputs} name="msg" id="imsg" cols="30" rows="3" onChange={(e)=>{mudarMsg(e)}}>{inpMsg}</textarea>
                        </div>
                        <input className={s.btnsubmit} type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </section>
    )

}

export default Contact
