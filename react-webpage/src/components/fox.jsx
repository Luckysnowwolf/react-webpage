import whitefox from "../assets/whitefox.png";
import "../profile.css";

function Whitefox(props){
    return(
        <div className="Profile">
        <img src={whitefox} alt="whitefox" className="Whitefox"/>
        <h2 className="name">{props.title}</h2>
        <p className="text">{props.text}</p>
        </div>
      );
}



export default  Whitefox;