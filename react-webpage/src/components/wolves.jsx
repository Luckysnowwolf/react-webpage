import wolves from "../assets/wolves.png";
import "../profile.css";

function Wolves(props){
    return(
        <div className="Profile">
        <img src={wolves} alt="wolves" className="Wolves"/>
        <h2 className="name">{props.title}</h2>
        <p className="text">{props.text}</p>
        </div>
      );
}



export default  Wolves;