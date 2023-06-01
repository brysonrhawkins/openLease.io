import React from "react";
import "../Messages-Sidebar/sidebar.css";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";

function Sidebar() {
  return (
    <div className="sidebar-whole">
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          expand="lg"
          collapseOnSelect
        >
          <Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Collapse className="NavBar-collapse">
            <Nav className="NavBar-items">
              <NavDropdown className="Dropdown-items" title="Inbox">
                <NavDropdown.Item className="Dropdown-items" href="/Dashboard">
                  Unread Messages
                </NavDropdown.Item>
                <NavDropdown.Item className="Dropdown-items" href="/Messages">
                  Conversations
                </NavDropdown.Item>
                <NavDropdown.Item className="Dropdown-items" href="/Settings">
                  All Messages
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="Dropdown-items" href="/Settings">
                  Messages Archive
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Sidebar;

{
  /* <ul className="sidebar-list">
                    <li><Button type="button" className="btn-sidebar">Unread Messages</Button></li>
                    <li><Button type="button" className="btn-sidebar">Conversations</Button></li>
                    <li><Button type="button" className="btn-sidebar">All Messages</Button></li>
                    <li><Button type="button" className="btn-sidebar">Message Archive</Button></li>
                </ul> */
}
