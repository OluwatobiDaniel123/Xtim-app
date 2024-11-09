import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const ContactSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #201f1f;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  margin: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ContactForm = styled.form`
  width: 450px;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  box-shadow: 0 150px 1000px 290px rgba(0, 0, 0, 0.1);

  h2 {
    font-variant: small-caps;
    font-size: 40px;
    // background: linear-gradient(90deg, #4a00e0, #ee0979, #4a00e0);
    background: linear-gradient(90deg, #4caf50, #ffdb58, #a3c651);

    -webkit-background-clip: text;
    color: transparent;
  }

  input,
  textarea {
    width: 100%;
    padding: 1rem;
    font-size: bold;
    font-weight: 800;
    letter-spacing: 1.3px;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid #92781a;
    resize: none;
    // background: linear-gradient(90deg, #4a00e0, #ee0979, #4a00e0);
    background: linear-gradient(90deg, #4caf50, #ffdb58, #a3c651);

    -webkit-background-clip: text;
    color: transparent;
    &:hover {
      border: 2px solid #4caf50;
      transform: scale(1.04);
    }
    transition: all 0.3s linear;
  }
`;

const SocialDiv = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 7px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  box-shadow: 0 1px 4px 5px rgba(0, 0, 0, 0.1);
`;

const ContactButton = styled.button`
  // background: linear-gradient(90deg, #4a00e0, #ee0979, #4a00e0);
  background: linear-gradient(90deg, #4caf50, #92781a, #a3c651);

  -webkit-background-clip: button;
  color: transparent;
  color: black;
  padding: 10px;
  width: 70%;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  border: none;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.1);
    border: 2px solid #4caf50;
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qh08omd",
        "template_icla7gq",
        form.current,
        "uDj1nlX9BVEqunnYs"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully...");
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <ContactSection>
      <ContactContainer>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <h2>Contact Us</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            rows="7"
            name="message"
            placeholder="Your Message"
            required
          />
          <ContactButton type="submit">Send Message</ContactButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
