
import './App.css'
import sol from "./assets/img/sol.png";
import background from "./assets/img/dia1.svg"
import React, {useState} from 'react'
import backgroundN from "./assets/img/noche1.svg"
import luna from "./assets/img/luna.svg"


const App=()=>{
   const [isVisible, setIsVisible]= useState(true)


   const changeVisible = () =>{

      setIsVisible(!isVisible);   }


return(   
   <body style={{backgroundColor:isVisible ? "blue" : "black"}}>
      
   
   <div className="paisaje"  style={{backgroundImage:isVisible ? `url(${background})`: `url(${backgroundN})`} }  >
   <img className="sol" src={isVisible ? sol : luna}  />
   <button onClick={changeVisible}>{isVisible ? "Ir a Australia" : "Volver a mi Tierra"}</button>
   </div></body> 
)

}
export default App;

