


function Button(props ){

    return (<>
              <button className="button" onClick={()=> props.callback(props.value)} >{props.value}</button>
            </>);

}
export default Button;