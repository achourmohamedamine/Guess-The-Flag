import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button.jsx'


function App() {
 const [result,setResult]=useState(0);
 const [expression, setExpression] = useState("");
 const handleClicknum = (value)=> {
   
  setExpression((prev) => prev + value.toString());
  
 }
 const handleClickop =(op) => {
    setExpression((prev) => prev + op.toString());
 }
 const handleClick =(res)=> {
  if (res === "C") {
    // Clear expression and result
    setExpression("");
    setResult(0);
  } else if (res === "=") {
    // Evaluate the expression and update the result
    try {
      setResult(eval(expression)); // Caution: Replace eval with a safe math parser for production
      setExpression(eval(expression).toString());
    } catch {
      setResult("Error");
    }
 }}
  return (    
    <>  
    <div className='container'>
       <div className='Affichage'>
         {expression || result}
       </div>
    
       <div className='container text-center'>
             <div className="row align-items-start">
                 <div className="col"> 
                      <Button value={0} callback={()=>handleClicknum('0')} ></Button>
                      <Button value={1} callback={()=>handleClicknum('1')} ></Button>
                      <Button value={2} callback={()=>handleClicknum('2')} ></Button>
                      <Button value={3} callback={()=>handleClicknum('3')}  ></Button>
                  </div>
                  <div className="col"> 
                      <Button value={4} callback={()=>handleClicknum('4')} ></Button>
                      <Button value={5} callback={()=>handleClicknum('5')} ></Button>
                      <Button value={6} callback={()=>handleClicknum('6')} ></Button>
                      <Button value={7} callback={()=>handleClicknum('7')}  ></Button>
                  </div>
                  <div className="col">
                    <Button value={8} callback={()=>handleClicknum('8')} ></Button>
                    <Button value={9} callback={()=>handleClicknum('9')}  ></Button>
                    <Button value='+' callback={()=>handleClickop('+')}  ></Button>
                    <Button value='-' callback={()=>handleClickop('-')} ></Button>
                  </div>
                  <div className="col">
                      <Button value='*' callback={()=>handleClickop(('*'))}></Button>
                      <Button value='/' callback={()=>handleClickop('/')} ></Button>
                      <Button value='=' callback={()=>handleClick('=')}></Button>
                      <Button value='C' callback={()=>handleClick('C')}></Button>
                  </div>
             </div>
       </div>
    

    </div>
        

    </>
  )
}

export default App
