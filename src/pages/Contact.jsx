import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  // Controlled inputs: React state is the single source of truth
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading

    // Name or email empty -> show error and stop
    if (name.trim() === "" || email.trim() === "") {
      setError("Please fill in both your name and email.");
      return;
    }

    // Both filled in -> clear error and go to the Thank You page
    setError("");
    navigate("/thank-you", { state: { name: name.trim() } });
  };

  return (
    <div>
      <h1>Contact</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Message
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
