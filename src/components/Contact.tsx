import React from "react";

interface contactProps {
  name?: string;
}

function Contact(props: contactProps) {
  return (
    <div>
      <p>hola {props.name}"</p>
      {props.name ? "SI" : "chau"}
    </div>
  );
}

export default Contact;