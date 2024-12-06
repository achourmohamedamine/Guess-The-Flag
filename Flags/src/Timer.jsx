import React,{useState,useEffect} from "react";
function Timer(){
    const [timeleft,setTimeleft]=useState(30);
    const timer =setInterval(()=> {
        setTimeleft((prev)=>prev-1);
    },1000);
     return(<>
         <div className="Timer">
            <span>{timeleft}</span>
         </div>
     
     </>)

}
export default Timer;
