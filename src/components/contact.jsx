import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  async function createEmail(e) {
    e.preventDefault();
    const results = await emailjs.send(
      "service_bch3rme",
      "template_gw30zwf",
      formState,
      "Muc1yUGXrZZ-rgz2Q"
    );
    console.log(results);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  }
  return (
    <Form onSubmit={createEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          name="name"
          value={formState.name}
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={formState.email}
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="password"
          name="message"
          value={formState.message}
          as="textarea"
          rows={3}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactPage;
