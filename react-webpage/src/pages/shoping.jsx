import "./page.css";
import { useState, useEffect } from "react";

function shoping() {
    const [Poster, setPoster] = useState(["wolfposter", "leopardposter", "foxposter", "huskyposter", "catposter"]);
    const [newTask, setNewTask] = useState([])


    function handleaddPoster() {
        setPoster([...Poster, inputValue])
        setInputValue("");

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
        }
    }
    const [number, setNumber] = useState(0);
    const increseNumber = () => {
        setNumber(number + 1);
    }
    return (
        <div className="shopingSection">
            <h2 className="Header"> list of posters</h2>
            <ul className="options">
                {Poster.map((Poster, index) => (
                    <li key={index} onClick={() => handleRemovePoster(index)}>{Poster}</li>
                ))}
            </ul>
            <ul className="options">
                {newTask.map(poster => (
                    <li key={poster.id}>{poster.Poster}</li>
                ))}
            </ul>
            <input
                type="text" className="textzone"
                placeholder="enter poster animal..." id="posterOption"
                value={newTask}
                onChange={(e) => setPoster(e.target.value)} />
            <button className="add"
                onClick={() => {setNewTask([...newTask, { id: nextId++, name: Poster }])}}>add poster</button>
            <button className="amount" onClick={handleAmountOf}>amount: {number}</button><button className="plus" onClick={increseNumber}>+</button><button className="remove" onClick={() => handleRemovePoster(index)}>remove poster</button>
        </div>
    );
}
export default shoping;