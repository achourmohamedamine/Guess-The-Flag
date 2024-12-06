import React,{useEffect, useState} from "react";
import { Button } from 'reactstrap';


function Flag(props){
    
       
        

    return(<>
       


       <div className="Container">

          <div className="Flag">
            <img src={props.flag}></img>
          </div>
          

 

       </div>
             

    
    
    
    
    </>);

}
export default Flag;


