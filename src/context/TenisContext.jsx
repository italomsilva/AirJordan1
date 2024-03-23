import { createContext, useState } from "react";
import { tenis, tamFem, tamMas } from "../databases/Dbtenis";


export const TenisContext = createContext();

export const TenisProvider = ({children}) =>{
    const [imgSelec, setimgSelec] = useState(tenis[0].url);
    const [corSelec, setcorSelec] = useState(tenis[0].cor);
    const [textImg, setTextImg]= useState(tenis[0].text);
    const [tamSelec, setTamSelec] = useState(tamMas[0].text);
    const [tamCM, setTamCM] = useState('X');
    const [tipoTam, setTipoTam]= useState(tamMas[0].tipo);
    const [liSelec, setLiSelet]= useState(0);
    const [imgsref, setImgsRef]= useState(tenis[0].imgs);
    const [idTenis, setIdTenis]= useState(tenis[0].id)
    
    
    return(
        <TenisContext.Provider value={{tenis, tamFem, tamMas, imgSelec, setimgSelec, corSelec, setcorSelec, textImg, setTextImg, tamSelec, setTamSelec, tamCM, setTamCM, tipoTam, setTipoTam, liSelec, setLiSelet, imgsref, setImgsRef, idTenis, setIdTenis }}>
            {children}
        </TenisContext.Provider>
    )
}