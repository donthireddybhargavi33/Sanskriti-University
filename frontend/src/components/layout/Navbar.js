import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: transparent;
  padding: 0.5rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: none;
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 2rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
  }
`;

const NavItem = styled.div`
  position: relative;
  color: white;
  padding: 1.5rem 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    color: #f7b500;
    
    .dropdown {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      pointer-events: all;
    }

    &:after {
      transform: rotate(180deg);
    }
  }

  &:after {
    content: '▼';
    display: ${props => props.hasDropdown ? 'inline-block' : 'none'};
    font-size: 0.7rem;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    font-size: 0.85rem;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: white;
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 250px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  z-index: 1000;
  
  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background: white;
  }
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 0.7rem 1.2rem;
  color: #0a183d;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
  font-weight: 400;

  &:hover {
    background: rgba(10, 24, 61, 0.05);
    color: #f7b500;
  }
`;

const AdmissionButton = styled(Link)`
  background: #f7b500;
  color: #0a183d;
  padding: 0.7rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(247, 181, 0, 0.2);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 2rem;
`;

const PhoneNumber = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #f7b500;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavContent>
        <Link to="/">
          <Logo src="/sanskriti-university-logo.png" alt="Sanskriti University" />
        </Link>
        <NavLinks>
          <NavItem hasDropdown>
            ABOUT US
            <Dropdown className="dropdown">
              <DropdownItem to="/about/university">The University</DropdownItem>
              <DropdownItem to="/about/vision-mission">Vision and Mission</DropdownItem>
              <DropdownItem to="/about/advisory-board">Advisory Board</DropdownItem>
              <DropdownItem to="/about/rankings">Rankings & Awards</DropdownItem>
              <DropdownItem to="/about/recognition">Council / Govt / UGC Recognition</DropdownItem>
              <DropdownItem to="/about/quality-assurance">Quality Assurance</DropdownItem>
              <DropdownItem to="/about/technology">Technologically Ahead</DropdownItem>
            </Dropdown>
          </NavItem>
          <NavItem hasDropdown>
            PROGRAMMES
            <Dropdown className="dropdown">
              <DropdownItem to="/programmes/undergraduate">Undergraduate</DropdownItem>
              <DropdownItem to="/programmes/postgraduate">Postgraduate</DropdownItem>
              <DropdownItem to="/programmes/phd">Doctoral</DropdownItem>
              <DropdownItem to="/programmes/diploma">Diploma</DropdownItem>
            </Dropdown>
          </NavItem>
          <NavItem hasDropdown>
            ACADEMICS
            <Dropdown className="dropdown">
              <DropdownItem to="/academics/faculty">Faculty</DropdownItem>
              <DropdownItem to="/academics/syllabus">Syllabus</DropdownItem>
              <DropdownItem to="/academics/academic_calender">Academic Calender</DropdownItem>
              <DropdownItem to="/academics/examination_rules">Examination Rules</DropdownItem>
            </Dropdown>
          </NavItem>
          <NavItem hasDropdown>
            INFRASTRUCTURE
            <Dropdown className="dropdown">
              <DropdownItem to="/Infrastructure/process">Sports</DropdownItem>
              <DropdownItem to="/Infrastructure/programs">Programs Offered</DropdownItem>
              <DropdownItem to="/Infrastructure/fees">Fee Structure</DropdownItem>
              <DropdownItem to="/Infrastructure/scholarships">Scholarships</DropdownItem>
            </Dropdown>
          </NavItem>
                    <NavItem hasDropdown>
            ADMISSIONS
            <Dropdown className="dropdown">
              <DropdownItem to="/Admissions/AdmissionProcess">Admission Process</DropdownItem>
              <DropdownItem to="/Admissions/syllabus">Syllabus</DropdownItem>
              <DropdownItem to="/Admissions/academic_calender">Academic Calender</DropdownItem>
              <DropdownItem to="/Admissions/examination_rules">Examination Rules</DropdownItem>
            </Dropdown>
          </NavItem>
        </NavLinks>
        <ContactInfo>
          <AdmissionButton to="/admissions/apply">APPLY NOW</AdmissionButton>
          <PhoneNumber href="tel:807410145">
            <span>8074101457</span>
          </PhoneNumber>
        </ContactInfo>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
