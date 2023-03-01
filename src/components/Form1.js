import { useState } from "react";
import { createPost } from "../utils/CreatePost";

//------------------------------------------------------------
//------------------------ METHOD ONE ------------------------
//----------------------- THE EASY WAY -----------------------
//------------------------------------------------------------

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [text, setText] = useState("");
  const [terms, setTerms] = useState(false);

  const formSubmission = {
    name,
    age,
    text,
    terms,
  };

  // function for handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { post, error } = await createPost(formSubmission);
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }

    // For uncontrolled components (try using these inside the createPost()'s object above, on line 14, like so: {name: e.target.elements.name.value}):
    // console.log(e.target.elements);
    // console.log(e.target.elements.name.value);
    // console.log(e.target.elements.age.value);
    // console.log(e.target.elements.text.value);
    // console.log(e.target.elements.terms.checked);
  };

  return (
    <fieldset>
      <legend>
        <h1>React Form 1</h1>
      </legend>
      <form onSubmit={handleSubmit}>
        <label>
          Your name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Your age:
          <input
            type="number"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>

        <label>
          Your text:
          <textarea
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </label>

        <div className="terms">
          <label>
            Agree to terms
            <input
              type="checkbox"
              name="terms"
              required
              value={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </fieldset>
  );
}
