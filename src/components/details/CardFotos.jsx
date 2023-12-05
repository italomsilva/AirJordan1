import styles from './CardFotos.module.css'
import { useState, useEffect } from 'react';
import classNames from 'classnames';

function CardFotos(){
    const [radioOn, setRadioOn]= useState(0)
    const slides =[
       0,1,2
    ]

    useEffect(()=>{
        const interv = setInterval(()=>{
            setRadioOn((i)=>(i+1) % slides.length)
        }, 3000);
        return ()=>{
            clearInterval(interv)
        }
    }, [])

    return(
            <div className={styles.contcarrossel}>
                <input className={styles.detradio1} type="radio" name="detslide" id="radio1" checked={radioOn==0} onChange={()=>setRadioOn(0)}/>
                <input className={styles.detradio3} type="radio" name="detslide" id="radio2" checked={radioOn==1} onChange={()=>setRadioOn(1)}/>
                <input className={styles.detradio2} type="radio" name="detslide" id="radio3" checked={radioOn==2} onChange={()=>setRadioOn(2)}/>
                <div className={styles.contslide}>
                    <div className={styles.cardslide}>
                        <h4>Conforto</h4>
                        <p>Design desenvolvido e pensado para ser super confortável, possuindo aberturas para entrada de ar para manter seus pés saudáveis. Podendo ser usado por horas sem sentir incômodo algum.</p>
                    </div>
                    <div className={styles.cardslide}>
                        <h4>Estilo</h4>
                        <p>Além de mega confortável, o Air Jordan 1 é super estiloso, e mesmo por ter sido desenvolvido na década de 80 seu design está super em alta,e cada vez mais apreciado por quem gosta de se manter no estilo.</p>
                    </div>
                    <div className={styles.cardslide}>
                        <h4>Personalidade</h4>
                        <p>Por este modelo ser de fácil personalização, é bem simples demonstrar quem voçê é, do que gosta e como se sente, basta ser criativo na hora de usá-lo e modificá-lo, sua criatividade é quem manda! Mostre seu Lifestyle, seu jeito de ser, sua personalidade. Se expresse utilizando seu modo vestir! Se quer um tênis que mostre sua personalidade, esse é o certo para você!</p>
                    </div>
                </div>
            </div>
    )
}

export default CardFotos