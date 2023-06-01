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
              <NavDropdown className="Dropdown-items" title="Settings Menu">
                <NavDropdown.Item className="Dropdown-items" href="/Account-Settings">
                  Account
                </NavDropdown.Item>
                <NavDropdown.Item className="Dropdown-items" href="/Billing-Info">
                  Billing
                </NavDropdown.Item>
                <NavDropdown.Item className="Dropdown-items" href="/Privacy-Settings">
                  Privacy
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="Dropdown-items" href="/Legal-Information">
                  Legal
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