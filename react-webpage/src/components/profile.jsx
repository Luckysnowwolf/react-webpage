import snowleopard from "../assets/snowleopard.png/";
import whitefox from "../assets/whitefox.png";
import sleepyfox from "../assets/sleepyfox.png";
import "../profile.css";

function Leopard(props){
    return(
        <div className="Profile">
        <img src={snowleopard} alt="Leopard" className="Leopard"/>
        <h2 className="name">{props.title}</h2>
        <p className="text">{props.text}</p>
        </div>
      );
}



export default Leopard;