import logo from '../../logo.svg';
import './appHeader.css';
import { Button, Navbar, Nav, NavDropdown, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignedOutAppHeader() {
  return (
    <div>
      <Navbar bg="dark" variant="dark"sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand><img src={logo} width="40px" height="40px"/>{''}OpenLease</Navbar.Brand>
        <Navbar.Toggle className='NavBar-toggle'/>
        <Navbar.Collapse className='NavBar-collapse'>
          <Nav className="NavBar-items">
          <Nav.Link href="/Sign-In">Sign In</Nav.Link>
            <Nav.Link href="/Sign-In">Create Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    </div>
    
  );
}

export default SignedOutAppHeader;