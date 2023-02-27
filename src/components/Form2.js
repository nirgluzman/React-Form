import { useState } from "react";
import { createPost } from "../utils/CreatePost";
import "../styles.css";

//--------------------------------------------------------------
//------------------------- METHOD TWO -------------------------
//---------------------- THE ELEGANT WAY -----------------------
//--------------------------------------------------------------

// You can control the values of more than one input field by adding a name attribute to each element.

// We will initialize our state with an empty object.

// To access the fields in the event handler use the event.target.name and event.target.value syntax.

// To update the state, use square brackets [bracket notation] around the property name.

// You can control the values of more than one input field by adding a name attribute to each element.

// We will initialize our state with an empty object.

export default function Form() {
  const [inputs, setInputs] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { post, error } = await createPost(inputs);
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  // const myObj = {
  //   "first name": "Donald",
  //   "last name": "Duck"
  // }

  // console.log(myObj["first name"])

  return (
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label>
          Your name:
          <input type="text" name="name" onChange={handleChange} />
        </label>

        <label>
          Your age:
          <input type="number" name="age" min="16" onChange={handleChange} />
        </label>

        <label>
          Your text:
          <textarea name="text" onChange={handleChange}></textarea>
        </label>

        <div className="terms">
          <label>
            Agree to terms
            <input type="checkbox" name="terms" onChange={handleChange} />
          </label>
        </div>
        <button>Submit</button>
      </form>
      <legend>
        <h1>React Form 2</h1>
      </legend>
    </fieldset>
  );
}
