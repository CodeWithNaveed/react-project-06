import { useEffect, useState } from "react";
import "./App.css";

function Card() {
    const [word, setWord] = useState([
        {
            id: 1,
            question: "What language is React based on?",
            answer: "React is based on JavaScript.",
            activeClass: "",
            value: null,
        },
        {
            id: 2,
            question: "What are the building blocks of React apps?",
            answer: "State, props, and components.",
            activeClass: "",
            value: null,
        },
        {
            id: 3,
            question: "What's the name of the syntax we use to describe a UI in React?",
            answer: "The syntax used to describe a UI in React is called JSX (JavaScript XML)",
            activeClass: "",
            value: null,
        },
        {
            id: 4,
            question: "How to pass data from parent to child components?",
            answer: "Data is passed from parent to child components in React using props.",
            activeClass: "",
            value: null,
        },
        {
            id: 5,
            question: "How to give components memory?",
            answer: "To give components memory in React, you use state with the useState hook.",
            activeClass: "",
            value: null,
        },
        {
            id: 6,
            question: "What do we call an input element that is completely synchronised with state?",
            answer: "An input element that is completely synchronized with state is called a controlled component.",
            activeClass: "",
            value: null,
        }
    ]);


    let num;
    
    const handleClick = (index) => {
        let newWord = [...word];
        num = (newWord[index].id);
        newWord[index].value = num;
        setWord(newWord);
    };



    return (
        word.map((v, i) => (
            <h1 onClick={() => handleClick(i)}>
                {v.value === v.id ? v.answer : v.question}
            </h1>
        ))
    );
};

export default Card;
