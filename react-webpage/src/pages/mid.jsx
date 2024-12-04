import "./page.css";
import { useState } from "react";

function Mid(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [color, setColor] = useState("default");
    const [comment, setComment] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
      document.body.style.backgroundColor = color
    };
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };


    return (
    <div class="Midpage">
        <h1 class="Mid-headtext"></h1>

        <input type="text" value={name} onChange={handleNameChange}/>
        <p class="Mid-text">Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange}/>
        <p class="Mid-text">amount: {quantity}</p>

        <input type="color" value={color} onChange={handleColorChange}/>
        <p class="Mid-text">pagecolor: {color}</p>
        

        <textarea
            value={comment}
             placeholder="enter delivery instructions" 
            onChange={handleCommentChange}
             ></textarea>
        <p class="Mid-text">your comment: {comment}</p>
    </div>
    );
}
export default Mid;