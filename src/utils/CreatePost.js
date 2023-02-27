// function to send a POST request

export const createPost = async (formData) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (!res.ok) throw new Error("Something went wrong");
    const post = await res.json();
    return { post };
  } catch (error) {
    return { error };
  }
};
