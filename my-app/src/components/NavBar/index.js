import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="/">MyApp</Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/about">About</MenuItem>
        <MenuItem href="/services">Services</MenuItem>
        <MenuItem href="/contact">Contact</MenuItem>
      </Menu>
    </Nav>
  );
};

// Styled-components for styling the Navbar
const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0 60px;
  background-color: #121212;
  color: white;
  position: sticky;
  top: 0;
  z-index: 999;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
`;

const Hamburger = styled.div`
  font-size: 2rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 36px;
  padding-right: 24px;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 100%;
    padding: 20px 0px;
    justify-content: center;
    align-items: center;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.2rem;

  &:hover {
    color: #f0a500;
  }
`;

export default Navbar;
