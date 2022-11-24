import logo from "./logo.svg";
import "./App.css";
import Jumbo from "./components/jumbo";
import TechStack from "./components/technologyStack";
import Nav from "./components/nav";
import { Container } from "@mui/system";
import Highlights from "./components/highlights";

function App() {
  return (
    <div className="App">
      <Container>
        <Nav></Nav>
      </Container>
      <Jumbo></Jumbo>
      <Highlights />
    </div>
  );
}

export default App;
