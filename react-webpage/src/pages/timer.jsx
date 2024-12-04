import "./page.css";
import {useState} from "react";
function Timer(){
    let count = 0;
    const handelEvent = (name) => {
        if (count < 3) {
            count++
        } else {
        }
    }
   const [number, setNumber] = useState(0);
    const increseNumber = () => {
     setNumber(number + 1);
    }
     const resetNumber = () => {
        setNumber(number === 0);
     }
        const decreseNumber = () => {
            setNumber(number - 1);
    }

    return(

        <div class ="timer">
            <h1 class ="number">current count: {number} </h1>
            <button class="buttons3" onClick={decreseNumber}>
                count down
            </button>
            <button class="buttons2" onClick={resetNumber}>
                reset
            </button>
            <button class="buttons" onClick={increseNumber}>
                count up
            </button>
        </div>
    )
}
export default Timer;