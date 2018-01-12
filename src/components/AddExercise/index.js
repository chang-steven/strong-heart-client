import React from 'react';

export function AddExercise(props) {
  return (
    <form className="add-exercise form" method="post">
      <fieldset>
        <legend>Add Exercise</legend>
        <label for="date">Date</label>
        <input type="date" name="date" value=""></input>
        <br></br>
        <label for="synopsis">Synopsis</label>
        <input type="text" name="synopsis" value=""></input>
        <br></br>
        <input type="radio" name="type" value="running"></input>
        <label for="type">Running</label>
        <br></br>
        <input type="radio" name="type" value="basketball"></input>
        <label for="type">Basketball</label>
        <br></br>
        <input type="radio" name="type" value="other"></input>
        <label for="type">Other</label>
        <br></br>
        <label for="specify">Please Specify</label>
        <input type="text" name="specify" placeholder="Swimming, etc."></input>

        <input type="button" name="Submit" value="Add"></input>

        <p>Also will have an open text input to allow manual adding of another "type" of exercise or a "please specify" input, which will then add the text field as a type</p>
      </fieldset>
    </form>
  );
}

export default AddExercise;
