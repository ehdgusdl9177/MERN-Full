import React, { useState } from "react";
import "./NewGoal.css";
import { useState } from "react";

const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDegault();

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    setEnteredText = "";
    props.onAddGoal(newGoal);
  };

  const textChangeHandler = (event) => {
    setEnteredText = event.target.value;
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
