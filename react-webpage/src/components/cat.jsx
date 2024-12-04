import cat from "../assets/kitty.png";
import "../profile.css";

function Cat (props){
    return(
        <div className="Profile">
        <img src={cat} alt="cat" className="cat"/>
        <h2 className="name">{props.title}</h2>
        <p className="text">{props.text}</p>
        </div>
      );
}




export default  Cat;