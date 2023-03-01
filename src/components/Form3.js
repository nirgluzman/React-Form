import { createPost } from "../utils/CreatePost";

// Uncontrolled Form implementation

// function for handling the form submission
export default function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault(); // to avoid page refresh after submit.
    const { name, age, text, terms } = e.target;

    const formSubmission = {
      name: name.value,
      age: age.value,
      text: text.value,
      terms: terms.value,
    };

    try {
      const { post, error } = await createPost(formSubmission);
      if (error) throw error;
      console.log(post);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <fieldset>
      <legend>
        <h1>React Form 1</h1>
      </legend>
      <form onSubmit={handleSubmit}>
        <label>
          Your name:
          <input type="text" name="name" />
        </label>

        <label>
          Your age:
          <input type="number" name="age" />
        </label>

        <label>
          Your text:
          <textarea name="text"></textarea>
        </label>

        <div className="terms">
          <label>
            Agree to terms
            <input type="checkbox" name="terms" required />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </fieldset>
  );
}
