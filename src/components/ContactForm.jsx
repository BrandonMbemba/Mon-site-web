import React, { useState } from 'react';

function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Envoi....");
    const formData = new FormData(event.target);

    formData.append("access_key", "39c1378c-759e-4c26-b018-cfcae20efe18");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message bien envoyé !");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <h2>Une question ?</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor ="name">Nom:</label>
          <input type="text" id='name' name="name" required />
        </div>
        <div>
          <label htmlFor ="email">E-mail:</label>
          <input type="email" id='email' name="email" required />
        </div>
        <div>
        <label htmlFor ="message">Message:</label>
        <textarea id='message' name="message" required></textarea>
        </div>

        <button type="submit">Envoyer</button>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default ContactForm;
