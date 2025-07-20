import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaWhatsapp } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhotoGallery from './pages/photo';
import VideoGallery from './pages/video';

// Page and Component Imports
import HomePage from './pages/HomePage';
import ProgrammesPage from './pages/ProgrammesPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';
import ApplyNowModal from './components/ApplyNowModal';
import AdminLoginPage from './pages/AdminLoginpage';
import AdminApplicationsPage from './pages/AdminApplicationsPage';
import ProtectedRoute from './components/ProtectedRoute';
import University from  './pages/University';
import Vision from './pages/Vision';
import Rankings from './pages/Rankings';
import Technology from './pages/Technology';
import ContactUs from './pages/contact';
import ApplicationReceivedPage from './pages/ApplicationReceivedPage';
import Faculty from './pages/Faculty';
import Syllabus from './pages/Syllabus';
import AcademicCalender from './pages/Academic_Calender';
import ExaminationRules from './pages/Examination_Rules';
import AdmissionProcess from './pages/AdmissionProcess';
import AdmisssionAssistance from './pages/AdmisssionAssistance';
import Fees from './pages/fees';
import Rules from './pages/Rules';
import Environment from './pages/Environment';
import Sports from './pages/Sports';
import Cafeteria from './pages/Cafeteria';
import Medical from './pages/Medical';
import Hostel from './pages/Hostel';
import Library from './pages/Library';
import Theatre from './pages/Theatre';
// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Styled Components ---

const AppContainer = styled.div`
  background-color: rgb(33, 55, 116);
  overflow-x: hidden;
  position: relative;
`;

const AdminLink = styled(Link)`
  color: #f7b500;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #ff4d4d;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #0a183d;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid #1a2c5a;
`;

const LogoContainer = styled.div`
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
`;

const ApplyNowButton = styled.button`
  background-color: #f7b500;
  color: #0a183d;
  font-weight: bold;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;


// Exported Styled Components
export const Section = styled.section`
  padding: 20px 15px;

`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
  color: white;
`;

export const HeroSlider = styled(Slider)`
  .slick-slide > div {
    position: relative;
    color: white;
  }
  .slick-dots {
    bottom: 25px;
  }
  .slick-dots li button:before {
    color: white;
    font-size: 10px;
  }
  .slick-dots li.slick-active button:before {
    color: #f7b500;
  }
  .slick-arrow {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    z-index: 1;
  }
  .slick-arrow:hover, .slick-arrow:focus {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
`;

export const HeroSlide = styled.div`
  height: 600px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 60px;
  left: 20px;
  max-width: 70%;
  h1 {
    font-size: 28px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    font-weight: bold;
    color: #f7b500;
  }
  span {
    background-color: #f7b500;
    color: #0a183d;
    padding: 4px 8px;
    font-weight: bold;
    border-radius: 4px;
  }
`;

export const HighlightCard = styled.div`
  position: relative;
  img {
    width: 100%;
    border-radius: 8px;
  }
  p {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    white-space: nowrap;
  }
`;

export const Card = styled.div`
  background: linear-gradient(145deg, rgb(96, 133, 227), #0e1a3d);
  border-radius: 10px;
  padding: 25px 20px;
  text-align: center;
  border: 1px solid #2a3f7a;
  margin-bottom: 20px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  ${Card} {
    margin-bottom: 0;
  }
`;

export const StatNumber = styled.div`
  font-size: 37px;
  font-weight: bold;
  color: rgb(8, 135, 226);
  font-family: 'Poppins', sans-serif;
`;

export const StatText = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.4;
  color: rgb(3, 144, 245);
`;

export const RecruiterLogoSlide = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px 0;
  margin: 0 10px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 40px;
  img {
    width: 100%;
    height: 240%;
    object-fit: contain;
    opacity: 1;
    transition: all 0.3s ease;
  }

`;


export const CollaborationButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  button {
    background: linear-gradient(145deg, #1a2c5a, #0e1a3d);
    color: white;
    border: 1px solid #2a3f7a;
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 40px 15px 100px 15px;
  background-color: #0a183d;
  img {
    height: 50px;
    margin-bottom: 20px;
  }
  p {
    margin: 5px 0;
    font-size: 14px;
    color: #ccc;
    line-height: 1.6;
    a {
      color: #f7b500;
      text-decoration: none;
    }
  }
`;

const FloatingButtons = styled.div`
  position: fixed;
  bottom: 80px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
`;
const FloatingButton = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${props => props.bg};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;
const SubHeader = styled.nav`
  background-color: #0e1a3d;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-left: 90px;
  border-bottom: 1px solid #1a2c5a;
  position: relative;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    gap: 10px;
    margin-right: 70px;
    padding: 10px 5px;
  }
`;

const NavLinkContainer = styled.div`
  position: relative;
  
  &:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const NavLinkStyled = styled(NavLink)`
  color: #ccc;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: color 0.3s, border-color 0.3s;
  &.active, &:hover {
    color: white;
    border-bottom-color: #f7b500;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 250px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  z-index: 1000;
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.8rem 1.5rem;
  color: #333;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #f5f5f5;
    color: #f7b500;
  }
`;


const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    setIsAdminLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminLoggedIn(false);
    navigate('/');
  };
  
  const onAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {isModalOpen && (
        <ApplyNowModal 
          closeModal={() => {
            setIsModalOpen(false);
            console.log('Modal closed');
          }} 
        />
      )}
      <AppContainer>
        <Header style={{background: 'rgb(33, 55, 116)'}}>
          <LogoContainer>
            <Link to="/">
              <img src="https://www.sanskriti.edu.in/images/logo.png" alt="Sanskriti University Logo" />
            </Link>
          </LogoContainer>
          <HeaderIcons>
            {isAdminLoggedIn && onAdminPage ? (
              <>
                <AdminLink to="/admin/applications">Dashboard</AdminLink>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
              </>
            ) : (
              <>
                <AdminLink style= {{fontSize:'20px' ,fontWeight:'bold'
                }} to="/admin/login">Admin</AdminLink>

              </>
            )}
          </HeaderIcons>
        </Header>
        
        <SubHeader style={{background: 'rgb(33, 55, 116)'}}>
          <NavLinkContainer>
            <NavLinkStyled >About</NavLinkStyled>
            <DropdownMenu className="dropdown-menu">
              <DropdownLink to="/about/University">The University</DropdownLink>
              <DropdownLink to="/about/Vision">Vision & Mission</DropdownLink>
              <DropdownLink to="/about/Rankings">Rankings & Awards</DropdownLink>
              <DropdownLink to="/about/Technology">Technologically Ahead</DropdownLink>
            </DropdownMenu>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLinkStyled >Academics</NavLinkStyled>
            <DropdownMenu className="dropdown-menu">
              <DropdownLink to="/academics/Faculty">Faculty</DropdownLink>
              <DropdownLink to="/academics/Syllabus">Syllabus</DropdownLink>
              <DropdownLink to="/academics/Academic_Calender">Academic Calender</DropdownLink>
              <DropdownLink to="/academics/Examination_Rules">Examination Rules</DropdownLink>
            </DropdownMenu>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLinkStyled >Admissions</NavLinkStyled>
            <DropdownMenu className="dropdown-menu">
              <DropdownLink to="/admissions/AdmissionProcess">Admission Process</DropdownLink>
              <DropdownLink to="programmes">Programs Offered</DropdownLink>
              <DropdownLink to="/admissions/fees">Fees Structure</DropdownLink>
              <DropdownLink to="/admissions/AdmissionAssistance">Admission Assistance</DropdownLink>
              <DropdownLink to="/admissions/Rules">Rules</DropdownLink>
            </DropdownMenu>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLinkStyled to="/programmes">Programmes</NavLinkStyled>

          </NavLinkContainer>

          <NavLinkContainer>
          <NavLinkStyled >Infrastructure</NavLinkStyled> 
          <DropdownMenu className="dropdown-menu">
            <DropdownLink to="/infrastructure/Environment">Campus Environment</DropdownLink>
            <DropdownLink to="/infrastructure/Library">Library</DropdownLink>
            <DropdownLink to="/infrastructure/Sports">Sports</DropdownLink>
            <DropdownLink to="/infrastructure/Cafeteria">Cafeteria</DropdownLink>
            <DropdownLink to="/infrastructure/Medical">Medical Facilities</DropdownLink>
            <DropdownLink to="/infrastructure/Theatre">Theatre</DropdownLink>
            <DropdownLink to="/infrastructure/Hostel">Hostel Facilities</DropdownLink>    
          </DropdownMenu>         
        </NavLinkContainer>

          <NavLinkContainer>
            <NavLinkStyled to="/contact-us">Contact</NavLinkStyled>
          </NavLinkContainer>

          <NavLinkContainer>
            <NavLinkStyled >Gallery</NavLinkStyled>
            <DropdownMenu className="dropdown-menu">
            <DropdownLink to="/GalleryPage/photo">Photo</DropdownLink>
            <DropdownLink to="/GalleryPage/video">Video</DropdownLink>
            </DropdownMenu>
          </NavLinkContainer>

        </SubHeader>

        <div onClick={() => setIsModalOpen(true)} style={{ position: 'absolute', top: '105px', right: '15px', zIndex: 99, cursor: 'pointer' }}>
           <ApplyNowButton>APPLY NOW</ApplyNowButton>
        </div>
        
        <main>
          <Routes>
          {/* All existing public and admin routes */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Us Routes */}
          <Route path="/about/University" element={<University />} />
          <Route path="/about/Vision" element={<Vision />} /> 
          <Route path="/about/Technology" element={<Technology />} />
          <Route path="/about/Rankings" element={<Rankings />} />
          
          <Route path="/academics/Faculty" element={<Faculty />} />
          <Route path="/academics/Syllabus" element={<Syllabus />} /> 
          <Route path="/academics/Academic_Calender" element={<AcademicCalender />} />
          <Route path="/academics/Examination_Rules" element={<ExaminationRules />} />

          {/* Main Navigation Routes */}
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admissions/AdmissionProcess" element={<AdmissionProcess openApplyModal={() => setIsModalOpen(true)} />} />
          <Route path="/admissions/AdmissionAssistance" element={<AdmisssionAssistance />} />
          <Route path="/admissions/fees" element={<Fees />}/>
          <Route path="/admissions/Rules" element={<Rules />} />
          <Route path="/infrastructure/Environment" element={<Environment />} />
          <Route path="/infrastructure/Sports" element={<Sports />} />
          <Route path="/infrastructure/Cafeteria" element={<Cafeteria />} />
          <Route path="/infrastructure/Medical" element={<Medical />} />
          <Route path="/infrastructure/Hostel" element={<Hostel />} />
          <Route path="/infrastructure/Library" element={<Library />} />
          <Route path="/infrastructure/Theatre" element={<Theatre />} />
          <Route path="/GalleryPage/photo" element={<PhotoGallery />} />
          <Route path="/GalleryPage/video" element={<VideoGallery />} />
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage setAdminLoggedIn={setIsAdminLoggedIn} />} />
          <Route path="/admin/applications" element={<ProtectedRoute><AdminApplicationsPage /></ProtectedRoute>} />
          <Route path="/application-received" element={<ApplicationReceivedPage />} />
          
          {/* 404 Route */} 
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer>
            <SectionTitle>ONLINE FEE PAYMENT</SectionTitle>
            <img src="https://www.sanskriti.edu.in/images/logo.png" alt="Sanskriti University Logo" />
            <p>28 K. M. Stone, Mathura - Delhi Highway, Chhata, Mathura (U.P.), (INDIA)</p>
            <p>Contact No: <a href="tel:+91 73868 12345">+91 73868 12345</a></p>
            <p>Email ID: <a href="mailto:admissions@sanskriti.co.in">admissions@sanskriti.co.in</a></p>
        </Footer>
<FloatingButtons>
            <FloatingButton href="https://wa.me/917386812345" target="_blank" bg="#25D366"> <FaWhatsapp /> </FloatingButton>
        </FloatingButtons>
      </AppContainer>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
      <ToastContainer position="top-right" autoClose={5000} />
    </Router>
  );
}

export default App;