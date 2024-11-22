
function UserGteeting(props){

    const Welcome= <h2>Welcome {props.name}</h2>;
    const Login= <h2>Please log in</h2>;
    return (props.isLoggedin ? Welcome : Login);

}
export default UserGteeting