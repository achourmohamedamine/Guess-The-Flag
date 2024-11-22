import React,{useState} from "react";
function Counter(){

    const [count,setCount]=useState(0);
    const decrement=()=> {
        setCount(count -1);
    }
    const reset =()=> {
        setCount(0);
    }
    const increment=()=>{
        setCount(count+1);
    }

    return(<>   <div className="container">
                    <p className="Number">{count}</p>
                <button className="button" onClick={decrement}>Decrement</button>
                <button className="button" onClick={reset}>Reset</button>
                <button className="button" onClick={()=>increment()}>Increment</button>
                </div>
                


          </>)

}
export default Counter;