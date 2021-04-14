import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';
import StudentList from './components/StudentList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"} className="nav-link">
                  React MERN Stack CRUD
              </Link>
              </Navbar.Brand>

              <Nav className="jsutify-content-end">
                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Create Student
                </Link>
                </Nav>
                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                </Link>
                </Nav>
              </Nav>

            </Container>
          </Navbar>

        <Container>
          <Row>
            <Col md-12>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreateStudent} />
                  <Route path="/create-student" component={CreateStudent} />
                  <Route path="/edit-student" component={EditStudent} />
                  <Route path="/student-list" component={StudentList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </BrowserRouter>
  );
}

export default App;
