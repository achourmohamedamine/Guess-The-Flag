import React,{useState} from "react";
function OnChange(){
          
           const [name,setName]=useState("Guest");
           const [age,setAge]=useState("0");
           const handleOnchangeName =(event) => {
            setName(event.target.value);
           }
           const handleOnchangeAge=(event)=> {
            setAge(event.target.value);
           }
           return(<>
                <input type="text" value={name} onChange={handleOnchangeName} />
                <p>name : {name}</p>
                <input type="number" value={age} onChange={handleOnchangeAge} />
                <p>age : {age} </p>
           </>);
         
}
export default OnChange;