import "./page.css";
import { useState } from "react";

function shoping() {
    const [Poster, setPoster] = useState(["wolfposter", "leopardposter", "foxposter", "huskyposter", "catposter"]);

    function handleAddPoster(index) {
    }
    function handleRemovePoster(index) {
        setPoster(Poster.filter((_, i) => i !== index));
    }


function handleAmountOf() {
        let count = 0;
        const handleEvent = (number) => {
            if (count < 3) {
                count++
            } else {
            }
        }}
        const [number, setNumber] = useState(0);
        const increseNumber = () => {
            setNumber(number + 1);
        }
    return (
        <div class="shopingSection">
            <h2 class="Header"> list of posters</h2>
            <ul class="options">
                {Poster.map((Poster, index) => (
                    <li key={index} onClick={() => handleRemovePoster(index)}>{Poster}</li>
                ))}
            </ul>
            <input
             type="text" class="textzone" placeholder="enter poster animal..." id="posterOption"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}/>
            <button class="add" onClick={() => handleAddPoster(index)}>add poster</button><button class="amount" onClick={handleAmountOf}>amount: {number}</button><button class="plus" onClick={increseNumber}>+</button><button class="remove" onClick={() => handleRemovePoster(index)}>remove poster</button>
        </div>
    );
}
export default shoping;