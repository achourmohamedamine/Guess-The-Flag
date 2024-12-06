import React,{useState} from "react";
function Score(props){


    return(<>
    
        <div className="Score">
            <span>Your Score : {props.score}</span>
        </div>
    
    
    </>)

}
export default Score ;