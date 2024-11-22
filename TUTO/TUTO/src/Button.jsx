

function Button(){
      

    const HandleOnClick =(e)=> e.target.textContent="OUCH ";
    return (<button onClick= {(e)=> HandleOnClick(e)}>Click ME !</button>)

}
export default Button;