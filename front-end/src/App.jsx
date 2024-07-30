import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/register");
    }
  }, []);

  return (
    <>
      <NavBar />
      {user ? <h1>Welcome{user}</h1> : null}
      <Container>
        <Outlet context={{ user, setUser }} />
      </Container>
    </>
  );
}

export default App;
