import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";

import { useState } from "react";
import { FaRegSave } from "react-icons/fa";
import "./App.css";

const initialToDoList = ["wake up", "drink coffe"];

const App = () => {
  const handleAdd = () => {
    setHideForm(false);
  };

  const handleSave = () => {
    setToDoList([...toDoList, toDo]);
    setToDo("");
    setHideForm(true);
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSave();
    }
  };

  const [toDoList, setToDoList] = useState(initialToDoList);
  const [hideForm, setHideForm] = useState(true);
  const [toDo, setToDo] = useState("");

  return (
    <Container className="App">
      <Row>
        <Col xs={12} sm={{ span: 10, offset: 1 }}>
          <h1 className="text-center">A to-do application</h1>
          <ListGroup>
            {toDoList.map((str, index) => (
              <ListGroup.Item key={str + index}>{str}</ListGroup.Item>
            ))}
            <ListGroup.Item>
              <Row>
                <Col xs="auto">
                  <Button onClick={handleAdd}>+</Button>
                </Col>
                <Col hidden={hideForm}>
                  <InputGroup>
                    <Form.Control
                      placeholder="what else to do?"
                      value={toDo}
                      onChange={(event) => setToDo(event.target.value)}
                      onKeyUp={handleKeyUp}
                    ></Form.Control>
                    <Button onClick={handleSave}>
                      <FaRegSave></FaRegSave>
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
