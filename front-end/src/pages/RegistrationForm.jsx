import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registration, setRegistration] = useState(false);
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("trigger");
    setUser(email);
    navigate("/");
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ex@example.com"
        />
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check
          type="switch"
          checked={registration}
          label={registration ? "Register" : "Log In"}
          onChange={(e) => setRegistration(e.target.checked)}
        />
        <Form.Control
          type="submit"
          value={registration ? "Register" : "Log In"}
        />
      </Form.Group>
    </Form>
  );
};

export default RegistrationForm;
