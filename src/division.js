import React from 'react';

 export default function division({primernumero, segundonumero}){
    return(
        <div>El resultado de {primernumero} / {segundonumero} es =
        {" "} {Number(primernumero) / Number(segundonumero)}</div>
    )

    
}