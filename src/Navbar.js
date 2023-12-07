// Navbar.js
import React from 'react';
import { Navbar, Form, Nav, NavDropdown } from 'react-bootstrap';
import { FaBell, FaComment, FaBars , FaSistrix} from 'react-icons/fa';
import Navbar_Logo from './logo/Navbar_Logo.png';
import './Style.css';
import flag from './images/flag.jpg';
import Johndoe from'./images/Johndoe.jpg';

const AppNavbar = () => {
  const notificationCount = 3;
  const commentCount = 8;
  return (
    <Navbar className="custom-navbar" expand="lg">
      <img src={Navbar_Logo} alt='logo' className='logopic' />
      <a href='#icon' className='menu-icon'><FaBars/></a>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
          <Navbar.Brand className='brand-name' href="#home">Dreams Technologies</Navbar.Brand>
        </Nav>
        <Form  className="d-flex">
          <Form.Control
           type="search"
           placeholder='Search here'
           className='me-2'
           aria-label="search"
           style={{background:'#ffcccc',borderRadius:'18px',margin:'5px 0px',position:'relative',}}
           />
           <span className='sIcon'><FaSistrix/></span>
          </Form>          
          <img src={flag} alt='flag' className='flagpic' />
          <NavDropdown title="English" id="language-dropdown" className="text-white">
            <NavDropdown.Item href="#language/english">Kannada</NavDropdown.Item>
            <NavDropdown.Item href="#language/spanish">Spanish</NavDropdown.Item>
          </NavDropdown>
        <Nav className="ml-auto">
          <Nav.Link href="#notifications" className="text-white">
            <FaBell />
            <span className="notification-badge">{notificationCount}</span>
          </Nav.Link>
          <Nav.Link href="#comments" className="text-white">
            <FaComment />
            <span className="comment-badge">{commentCount}</span>
          </Nav.Link>
            <div className="admin-profile">
            <img src={Johndoe} alt='admin-profile' className='admin-pic' />
            <span className='active-dot'></span>
          </div>
          <NavDropdown title='Admin' id="basic-nav-dropdown" className="text-white">
            <NavDropdown.Item href="#action/3.1">Rahul</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Yuvan</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
