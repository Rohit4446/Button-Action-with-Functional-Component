import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
        const [show , setShow] = useState(false)
  const showText = () => {
          setShow(true)
        
       }
  return (
         <> 
         <div>

           <button id="click" onClick={showText}>Click me</button>
           {show === true &&  
           (<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)
           }
        
         </div>
         <div id="main">
        
        </div>
         </>
    
  );
}


export default App;
