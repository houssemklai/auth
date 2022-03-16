import React from 'react';
import {Navbar, Nav,Container } from 'react-bootstrap'
import { useSelector , useDispatch,} from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/action/authActions';
function Navbare() {
  const auth= useSelector(state=>state.authReducer.auth)
  const token= localStorage.getItem('token')
  const dispatch = useDispatch()
  return <div>
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        {auth &&token  ? <div> <Nav.Link  onClick={()=> dispatch(logout())} >Logout</Nav.Link>  
          <Nav.Link   as={Link}  to='/profile'  >Profile</Nav.Link>
        </div> :
        <>
        <Nav.Link as={Link}  to='/signup'>SignUp</Nav.Link>
        <Nav.Link  as={Link} to='/login'  >SignIn</Nav.Link> 
        </>}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>;
}

export default Navbare;
