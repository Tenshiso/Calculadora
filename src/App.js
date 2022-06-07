import React, {useState, useRef} from "react";
import Division from "./division.js"
import Suma from "./suma.js";
import Resta from "./resta.js";
import Multiplicacion from "./multiplicacion.js"
import "./App.css" 


function App() {
  const [primernumero, setprimernumero]=useState(0)
  const [segundonumero, setsegundonumero]=useState(0)
  const primernumeroRef = useRef();
  const segundonumeroRef = useRef();
  
  const Sumar = ()=>{
    setprimernumero(primernumeroRef.current.value);
    setsegundonumero(segundonumeroRef.current.value);  } 

  const Restar = ()=>{
    setprimernumero(primernumeroRef.current.value);
    setsegundonumero(segundonumeroRef.current.value);  } 

  const Multiplicar = ()=>{
    setprimernumero(primernumeroRef.current.value);
    setsegundonumero(segundonumeroRef.current.value);  } 

  const Dividir = ()=>{
    setprimernumero(primernumeroRef.current.value);
    setsegundonumero(segundonumeroRef.current.value);  } 
  
      
  return (    
    <div>
    <div className="App">
      Primer numero <input ref={primernumeroRef} type="text"
      classname="textoCalculadora"/>

      Segundo numero <input ref={segundonumeroRef} type="text"
      classname="textocalculadora"/>         
    </div> 

    <div>
    <Suma primernumero={primernumero} segundonumero={segundonumero}/>    
    <button onClick={Sumar}> + </button>    
    
    
    <Resta primernumero={primernumero} segundonumero={segundonumero}/>       
    <button onClick={Restar}> - </button>
      

    <Multiplicacion primernumero={primernumero} segundonumero={segundonumero}/>       
    <button onClick={Multiplicar}> - </button>
  
    
    <Division primernumero={primernumero} segundonumero={segundonumero}/>       
    <button onClick={Dividir}> / </button>
                      
     </div>
     
     

     </div>
  );
}

export default App;
