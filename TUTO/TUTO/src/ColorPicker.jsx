import React,{useState} from "react";
function ColorPicker(){

    const [color,setColor]=useState("#FFFFFF");
    const handlecolor =(e) => setColor(e.target.value);

    return(<>
            <div className="color-picker-container">
                <h2 className="header">Color Picker</h2>
                <div className="color-display" style={{backgroundColor : color}}>
                       <p>Selected Color : {color} </p>
                </div>
                <label htmlFor="">Select a color</label>
                <input type="color" value={color} onChange={handlecolor} />

            </div>
    
    </>)

}
export default ColorPicker