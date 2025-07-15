import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background-color: #0a183d;
  color: white;
  transition: left 0.3s ease;
  z-index: 1100;
  padding-top: 60px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.5);

  @media (max-width: 768px) {
    width: 200px;
    padding-top: 50px;
  }
`;

const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarMenuItem = styled.li`
  padding: 15px 20px;
  font-size: 1.1rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(255,255,255,0.1);

  &:hover {
    background-color: #1a2c5a;
  }

  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 1rem;
  }
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  width: 100%;

  &:hover {
    color: #f7b500;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const MenuButton = styled.button`
  position: fixed;
  top: 15px;
  left: 15px;
  background-color: #0a183d;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1200;
  padding: 5px 10px;
  border-radius: 4px;

  &:hover {
    background-color: #1a2c5a;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 4px 8px;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton onClick={toggleSidebar} aria-label="Toggle menu">
        ☰
      </MenuButton>
      <SidebarContainer isOpen={isOpen}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarLink to="/aboutus" onClick={toggleSidebar}>About Us</SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/academics" onClick={toggleSidebar}>Academics</SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/infrastructure" onClick={toggleSidebar}>Infrastructure</SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/programmes" onClick={toggleSidebar}>Programmes</SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/contactus" onClick={toggleSidebar}>Contact Us</SidebarLink>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarLink to="/admissions" onClick={toggleSidebar}>Admissions</SidebarLink>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
