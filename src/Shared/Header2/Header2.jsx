import cx from './Header2.module.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/Logo/Logo.png'
import { NavLink } from 'react-router-dom';

const Header2 = function() {

      function scrollToStart() {
      const element = document.getElementById('StartOfMainPage');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

      return (
    <section className={cx.cusContainer}>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo} className={cx.logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`${cx.nav} ms-auto my-2 my-lg-0`}
            
          >
            <NavLink onClick={scrollToStart} className='nav-link' tabIndex={0} role='button' to="/">HOME</NavLink>
            <NavLink onClick={scrollToStart} className='nav-link' tabIndex={0} role='button' to="/about-us">ABOUT US</NavLink>
            <NavDropdown title="SERVICES" id="navbarScrollingDropdown">
              <NavLink onClick={scrollToStart} className='dropdown-item' data-rr-ui-dropdown-item to="/home-loan">HOME LOAN</NavLink>
              <NavLink onClick={scrollToStart} className='dropdown-item' data-rr-ui-dropdown-item to="/first-home-buyer">FIRST HOME BUYER</NavLink>
              <NavLink onClick={scrollToStart} className='dropdown-item' data-rr-ui-dropdown-item to="/refinancing">Refinancing</NavLink>
              <NavLink onClick={scrollToStart} className='dropdown-item' data-rr-ui-dropdown-item to="/commercial-loan">Commercial Loan</NavLink>
              <NavLink onClick={scrollToStart} className='dropdown-item' data-rr-ui-dropdown-item to="/asset-finance">Asset Finance</NavLink>
              <NavLink onClick={scrollToStart} className='dropdown-item' data-rr-ui-dropdown-item to="/personal-loan">Personal Loan</NavLink>
              <NavLink onClick={scrollToStart} className='dropdown-item' data-rr-ui-dropdown-item to="/self-managed-super-fund">Self-Managed Super Fund (SMSF) Lending</NavLink>
            </NavDropdown>
            <NavLink onClick={scrollToStart} className='nav-link' to="/faqs">FAQ&apos;s</NavLink>
          </Nav>
          <Button className={cx.actionBtn}>CALL US ANYTIME</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default Header2;