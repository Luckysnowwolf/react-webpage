import husky from "../assets/husky.png";
import "../profile.css";

function Husky(props){
    return(
        <div className="Profile">
        <img src={husky} alt="husky" className="husky"/>
        <h2 className="name">{props.title}</h2>
        <p className="text">{props.text}</p>
        </div>
      );
}



export default  Husky;