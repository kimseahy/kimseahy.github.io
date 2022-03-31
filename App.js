/*eslint-disable */
import './App.css';
import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Button, } from 'react-bootstrap';
import data from './data';
import { Route, Link, Switch } from 'react-router-dom';
import Detail from './Detail';
import axios from'axios';

function App() {

  const [shoes, shoes변경] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home </Nav.Link>
              <Nav.Link as={Link} to='/Detail'>Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

<Switch>
        <Route exact path='/'>
          <div className='JumboTag'>
            <h1>20% Season Off</h1>
            <p>
              aBcDeFgHiJkLmNoPqRsTu
            </p>
            <p>
              <Button variant="primary">Primary</Button>{''}
            </p>
          </div>
          <div className='container'>
            <div className='row'>
              {
                shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} />
                })
              }

            </div>
            <button className='btn btn-primary' onClick={()=>{ 
              
              

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{ 

                console.log(result.data)
                shoes변경( [...shoes, ...result.data] );
                
              })
              
              .catch(()=>{
                console.log('실패했어요')
              })
            }}>더보기</button>
          </div>

        </Route>


        <Route path="/detail/:id">
          <Detail shoes={shoes} />  
          </Route>
    

        <Route path="/:id">
          <div> 아무거나 적었을때 이거 보여주셈</div>
        </Route>
        </Switch>

    </div>
  );
}
function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width='100%'></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      {props.shoes.price}
      <hr />
    </div>
  )
}
export default App;