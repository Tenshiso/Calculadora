import React from 'react';

 export default function multiplicacion({primernumero, segundonumero}){
    return(
        <div>El resultado de {primernumero} * {segundonumero} es =
        {" "} {Number(primernumero) * Number(segundonumero)}</div>
    )

    
}