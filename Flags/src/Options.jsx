import React,{useState,useEffect} from "react";
import { Button } from 'reactstrap';

function Options({countries,callback}){
       
      


       return(<>
       
       <div className="options-container">
             {countries.map((option) => (
             <button key={option.country} onClick={() => callback(option.country)}>
             {option.country}
            </button>
        ))}
       </div>
       
       
       </>);
}
export default Options;