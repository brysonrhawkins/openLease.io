import logo from '../../logo.svg';
import './appHeader.css';
import firebase from '../../Auth/Firebase.config.js';
import { Button, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppHeader() {
  return (
    <div>
      <Navbar bg="dark" variant="dark"sticky="top" expand="md" collapseOnSelect>
        <Navbar.Brand><img src={logo} width="40px" height="40px"/>{''}OpenLease</Navbar.Brand>
        <Navbar.Toggle className='NavBar-toggle'/>
        <Navbar.Collapse className='NavBar-collapse'>
          <Nav className="NavBar-items">
            <Nav.Link href="/View-Listings">Find a Lease</Nav.Link>
            <Nav.Link href="/Create-Post">Post a Lease</Nav.Link>
            <NavDropdown className="Dropdown-items" title="Account">
              <NavDropdown.Item className="Dropdown-items" href="/Dashboard">Dashboard</NavDropdown.Item>
              <NavDropdown.Item className="Dropdown-items" href="/Messages">Messages</NavDropdown.Item>
              <NavDropdown.Item className="Dropdown-items" href="/Settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item className="Dropdown-items" href="/Sign-Out"><Button onClick={()=> firebase.auth().signOut()}>Sign Out</Button></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
}

export default AppHeader;