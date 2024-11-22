import Photo from './assets/Photo.jpg'
import PropTypes from 'prop-types'
function Card(props){
     
    return(
        <div className="card">
            <img src={Photo} alt="My-photo" className="image" />
            <h1 className='text'>{props.name}</h1>
            <p className='Para'>T'm {props.age}.I'm an engeneering student, I want to be a hacker</p>
            <button className='button'>Contact me</button>
        </div>
    )
}
Card.propTypes={
    name: PropTypes.string,
    age : PropTypes.number}
    
Card.defaultProps= {
    name : "Guest",
    age : 0}

export default Card