import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Cards/Card';

function App() {
  // const [answer1, setanswer1] = useState("What language is React based on?");
  // const [answer2, setanswer2] = useState("What are the building blocks of React apps?");
  // const [answer3, setanswer3] = useState("What's the name of the syntax we use to describe a UI in React?");
  // const [answer4, setanswer4] = useState("How to pass data from parent to child components?");
  // const [answer5, setanswer5] = useState("How to give components memory?");
  // const [answer6, setanswer6] = useState("What do we call an input element that is completely synchronised with state?");

  // const [num, setNum] = useState(0);
  // const [focusClass, setfocusClass] = useState("");

  // useEffect(() => {
  //   if (num === 1) {
  //     setanswer1("React is based on JavaScript.");
  //   }
  //   if (num === 2) {
  //     setfocusClass("focus")
  //     setanswer2("State, props, and components.");
  //   }
  //   if (num === 3) {
  //     setanswer3("The syntax used to describe a UI in React is called JSX (JavaScript XML)");
  //   }
  //   if (num === 4) {
  //     setanswer4("Data is passed from parent to child components in React using props.");
  //   }
  //   if (num === 5) {
  //     setanswer5("To give components memory in React, you use state with the useState hook.");
  //   }
  //   if (num === 6) {
  //     setanswer6("An input element that is completely synchronized with state is called a controlled component.");
  //   }
  // },)

  return (
    <div className='container'>
      <div className='cards-container'>
        <Card />
      </div>
    </div>
  );
}

export default App;