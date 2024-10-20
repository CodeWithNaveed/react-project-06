import { useState } from "react";
import "./App.css";

function Card() {
    const [word, setWord] = useState([
        {
            id: 1,
            question: "What language is React based on?",
            answer: "React is based on JavaScript.",
            value: null,
        },
        {
            id: 2,
            question: "What are the building blocks of React apps?",
            answer: "State, props, and components.",
            value: null,
        },
        {
            id: 3,
            question: "What's the name of the syntax we use to describe a UI in React?",
            answer: "The syntax used to describe a UI in React is called JSX (JavaScript XML)",
            value: null,
        },
        {
            id: 4,
            question: "How to pass data from parent to child components?",
            answer: "Data is passed from parent to child components in React using props.",
            value: null,
        },
        {
            id: 5,
            question: "How to give components memory?",
            answer: "To give components memory in React, you use state with the useState hook.",
            value: null,
        },
        {
            id: 6,
            question: "What do we call an input element that is completely synchronised with state?",
            answer: "An input element that is completely synchronized with state is called a controlled component.",
            value: null,
        }
    ]);

    const handleClick = (index) => {
        console.log(index);
        let newWord = [...word];
        newWord[index].value = newWord[index].value === null ? newWord[index].id : null; // Toggle value
        setWord(newWord); // Update state
    };

    return (
        word.map((v, i) => (
            <h1 key={v.id} onClick={() => handleClick(i)} className={v.value === v.id ? "focus" : ""}>
                {v.value === v.id ? v.answer : v.question}
            </h1>
        ))
    );
}

export default Card;
