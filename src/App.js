import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaBars, FaGraduationCap, FaImages, FaShareAlt } from 'react-icons/fa';

// Page and Component Imports
import HomePage from './pages/HomePage';
import ProgrammesPage from './pages/ProgrammesPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';
import ApplyNowModal from './components/ApplyNowModal';
import AdminLoginPage from './pages/AdminLoginpage';
import AdminApplicationsPage from './pages/AdminApplicationsPage';
import ProtectedRoute from './components/ProtectedRoute';
import AboutUsPage from './pages/AboutUsPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactUsPage from './pages/ContactUsPage';
import InfrastructurePage from './pages/InfrastructurePage';
import ApplicationReceivedPage from './pages/ApplicationReceivedPage';



// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Styled Components ---

const AppContainer = styled.div` background-color:rgb(33, 55, 116); overflow-x: hidden; position: relative; `;
const Header = styled.header` display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; background-color: #0a183d; position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid #1a2c5a; `;
const LogoContainer = styled.div` img { height: 40px; margin-right: 10px; } `;
const HeaderIcons = styled.div` display: flex; align-items: center; gap: 20px; color: white; `;
const ApplyNowButton = styled.button` background-color: #f7b500; color: #0a183d; font-weight: bold; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-size: 14px; `;
const AccessibilityButton = styled.button` position: fixed; left: 0; top: 50%; transform: translateY(-50%) rotate(-90deg); transform-origin: left top; background-color: #f7b500; color: #0a183d; font-weight: bold; border: none; padding: 8px 16px; border-top-left-radius: 8px; border-top-right-radius: 8px; cursor: pointer; z-index: 999; font-size: 14px; `;
export const Section = styled.section` padding: 20px 15px; `;
export const SectionTitle = styled.h2` text-align: center; font-size: 24px; margin-bottom: 20px; font-weight: 600;color:white; `;
export const HeroSlider = styled(Slider)` .slick-slide > div { position: relative; color: white; } .slick-dots { bottom: 25px; } .slick-dots li button:before { color: white; font-size: 10px; } .slick-dots li.slick-active button:before { color: #f7b500; } .slick-arrow { background-color: rgba(0, 0, 0, 0.5); border-radius: 50%; width: 30px; height: 30px; z-index: 1; } .slick-arrow:hover, .slick-arrow:focus { background-color: rgba(0, 0, 0, 0.7); } .slick-prev { left: 10px; } .slick-next { right: 10px; } `;
export const HeroSlide = styled.div` height: 400px; background-image: url(${props => props.bg}); background-size: cover; background-position: center; `;
export const HeroContent = styled.div` position: absolute; bottom: 60px; left: 20px; max-width: 70%; h1 { font-size: 28px; font-weight: bold; } p { font-size: 18px; font-weight: bold; color: #f7b500; } span { background-color: #f7b500; color: #0a183d; padding: 4px 8px; font-weight: bold; border-radius: 4px; } `;
export const HighlightCard = styled.div` position: relative; img { width: 100%; border-radius: 8px; } p { position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); background-color: rgba(0,0,0,0.6); padding: 8px 16px; border-radius: 20px; font-size: 14px; white-space: nowrap; } `;
export const Card = styled.div` background: linear-gradient(145deg,rgb(96, 133, 227), #0e1a3d); border-radius: 10px; padding: 25px 20px; text-align: center; border: 1px solid #2a3f7a; margin-bottom: 20px; `;
export const StatsGrid = styled.div` display: grid; grid-template-columns: 1fr 1fr; gap: 15px; ${Card} { margin-bottom: 0; } `;
export const StatNumber = styled.div` font-size: 37px; font-weight: bold; color:rgb(8, 135, 226); font-family: 'Poppins', sans-serif; `;
export const StatText = styled.p` margin-top: 8px; font-size: 14px; line-height: 1.4; color: rgb(3, 144, 245); `;
export const RecruiterLogoSlide = styled.div` background-color: white; border-radius: 8px; padding: 20px 0; margin: 0 10px; display: flex !important; align-items: center; justify-content: center; height: 40px; img { max-height: 40px; max-width: 80%; filter: grayscale(100%); opacity: 0.7; transition: all 0.3s ease; } &:hover img { filter: grayscale(0%); opacity: 1; } `;
export const CollaborationButtons = styled.div` display: flex; flex-direction: column; gap: 15px; button { background: linear-gradient(145deg, #1a2c5a, #0e1a3d); color: white; border: 1px solid #2a3f7a; padding: 15px; border-radius: 8px; font-size: 16px; text-align: left; cursor: pointer; } `;
export const AnnouncementList = styled.div` background: linear-gradient(145deg, rgb(85, 92, 174),rgb(1, 6, 11)); border-radius: 10px; padding: 20px; border: 1px solid #2a3f7a; `;
export const AnnouncementItem = styled.div` background-color: #071029; padding: 15px; border-radius: 8px; margin-bottom: 15px; &:last-child { margin-bottom: 0; } p { margin: 0 0 10px 0; } button { color: #f7b500; font-weight: bold; background: none; border: none; padding: 0; cursor: pointer; font-size: inherit; font-family: inherit; } span { background-color: red; color: white; font-size: 10px; padding: 2px 5px; border-radius: 3px; font-weight: bold; margin-left: 8px; } `;
export const MoreUpdatesButton = styled(ApplyNowButton)` width: 100%; padding: 15px; margin-top: 20px; font-size: 16px; `;
export const WhyChooseCard = styled(Card)` text-align: left; background: url(${props => props.bg}) no-repeat center center; background-size: cover; position: relative; padding: 0; height: 180px; &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.1)); border-radius: 10px; } `;
export const WhyChooseContent = styled.div` position: absolute; bottom: 15px; left: 15px; right: 15px; h3 { margin: 0 0 5px 0; font-size: 18px; } p { margin: 0 0 15px 0; font-size: 14px; color: #ddd; } button { background-color: rgba(255,255,255,0.2); color: white; border: 1px solid white; padding: 8px 12px; border-radius: 4px; cursor: pointer; } `;
export const TestimonialVideo = styled.div` position: relative; background-image: url('https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg'); background-size: cover; height: 200px; border-radius: 8px; display: flex; align-items: center; justify-content: center; cursor: pointer; &::after { content: '▶'; font-size: 50px; color: red; background-color: rgba(255,255,255,0.8); border-radius: 50%; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; padding-left: 5px; } `;
export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
   background: white;
`;

export const StatItem = styled.div`
  flex: 1 1 200px;
  min-width: 180px;
  padding: 20px;
  text-align: center;
  border-radius: 12px;
  background: white;
`;

const Footer = styled.footer` text-align: center; padding: 40px 15px 100px 15px; background-color: #0a183d; img { height: 50px; margin-bottom: 20px; } p { margin: 5px 0; font-size: 14px; color: #ccc; line-height: 1.6; a { color: #f7b500; text-decoration: none; } } `;
const BottomNav = styled.div` display: flex; justify-content: space-around; align-items: center; position: fixed; bottom: 0; left: 0; right: 0; background-color: #0a183d; border-top: 1px solid #2a3f7a; padding: 5px 0; z-index: 1000; `;
const NavItem = styled(NavLink)` display: flex; flex-direction: column; align-items: center; color: #ccc; font-size: 10px; cursor: pointer; text-decoration: none; &.active { color: #f7b500; } svg { font-size: 20px; margin-bottom: 3px; } `;
const CentralNavItem = styled(Link)` width: 50px; height: 50px; border-radius: 50%; background-color: #071029; display: flex; align-items: center; justify-content: center; margin-top: -25px; border: 2px solid #2a3f7a; img { height: 30px; } `;
const FloatingButtons = styled.div` position: fixed; bottom: 80px; right: 15px; display: flex; flex-direction: column; gap: 10px; z-index: 999; `;
const FloatingButton = styled.a` width: 45px; height: 45px; border-radius: 50%; background-color: ${props => props.bg}; color: white; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.2); `;
const SubHeader = styled.nav` background-color: #0e1a3d; padding: 10px 15px; display: flex; justify-content: center; align-items: center; gap: 25px; border-bottom: 1px solid #1a2c5a; @media (max-width: 768px) { display: none; } `;
const NavLinkStyled = styled(NavLink)` color: #ccc; text-decoration: none; font-weight: 500; padding: 8px 0; border-bottom: 2px solid transparent; transition: color 0.3s, border-color 0.3s; &.active, &:hover { color: white; border-bottom-color: #f7b500; } `;
const AdminLink = styled(Link)` color: #f7b500; text-decoration: none; font-size: 14px; &:hover { text-decoration: underline; } `;
const LogoutButton = styled.button` background: none; border: none; color: #ff4d4d; font-size: 14px; cursor: pointer; &:hover { text-decoration: underline; } `;

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
      {isModalOpen && <ApplyNowModal closeModal={() => setIsModalOpen(false)} />}
      <AppContainer>
        <Header style={{background: 'rgb(33, 55, 116)'}}>
          <LogoContainer> <Link to="/"><img src="https://www.sanskriti.edu.in/images/logo.png" alt="Sanskriti University Logo" /></Link> </LogoContainer>
          <HeaderIcons>
            {isAdminLoggedIn && onAdminPage ? (
              <>
                <AdminLink to="/admin/applications">Dashboard</AdminLink>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
              </>
            ) : (
              <>
                <AdminLink to="/admin/login">Admin</AdminLink>
                <FaPhoneAlt />
                <FaEnvelope />
                <FaShareAlt />
              </>
            )}
          </HeaderIcons>
        </Header>
        
        <SubHeader style={{background: 'rgb(33, 55, 116)'}}>
          <NavLinkStyled to="/about-us">About Us</NavLinkStyled>
          <NavLinkStyled to="/programmes">Programmes</NavLinkStyled>
          <NavLinkStyled to="/academics">Academics</NavLinkStyled>
          <NavLinkStyled to="/admissions">Admissions</NavLinkStyled>
          <NavLinkStyled to="/infrastructure">Infrastructure</NavLinkStyled>
          <NavLinkStyled to="/contact-us">Contact Us</NavLinkStyled>

        </SubHeader>

        <div onClick={() => setIsModalOpen(true)} style={{ position: 'absolute', top: '65px', right: '15px', zIndex: 99, cursor: 'pointer' }}>
           <ApplyNowButton>APPLY NOW</ApplyNowButton>
        </div>
        
        <AccessibilityButton>Accessibility</AccessibilityButton>

        <main>
           <Routes>
            {/* All existing public and admin routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/programmes" element={<ProgrammesPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />

            <Route path="/admin/login" element={<AdminLoginPage setAdminLoggedIn={setIsAdminLoggedIn} />} />
            <Route path="/admin/applications" element={<ProtectedRoute><AdminApplicationsPage /></ProtectedRoute>} />
              <Route path="/application-received" element={<ApplicationReceivedPage />} />
            {/* FIXED: Added the routes for the new pages */}

            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer>
            <SectionTitle>ONLINE FEE PAYMENT</SectionTitle>
            <img src="https://www.sanskriti.edu.in/images/logo.png" alt="Sanskriti University Logo" />
            <p>28 K. M. Stone, Mathura - Delhi Highway, Chhata, Mathura (U.P.), (INDIA)</p>
            <p>Landline No: <a href="tel:+918074101457">+91 8074101457</a>, <a href="tel:8074101457">8074101457</a></p>
            <p>Email ID: <a href="mailto:enquiry@sanskriti.co.in">enquiry@sanskriti.co.in</a></p>
            <p>Helpline No: <a href="tel:+91">+91 </a></p>
        </Footer>

        <BottomNav>
          <NavItem to="/programmes"> <FaGraduationCap /> PROGRAMMES </NavItem>
          <NavItem to="/gallery"> <FaImages /> GALLERY </NavItem>
          <CentralNavItem to="/"> <img src="https://www.sanskriti.edu.in/images/logo_icon.png" alt="Logo Icon"/> </CentralNavItem>
          <div onClick={() => setIsModalOpen(true)} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#ccc', fontSize: '10px', cursor: 'pointer'}}>
             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{fontSize: "22px", marginBottom: "3px"}}><path d="M649.9 298.3h-56.4c-22.7 0-45.9 9.1-45.9 50.8v47.2h97.4l-15.6 102.3h-81.8v274.6h-119V500.4H393.3V398.1h34.8v-59.3c0-40.4 18.3-99.8 107.1-99.8h84.5v99.3zM512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0zm0 928C282.3 928 96 741.7 96 512S282.3 96 512 96s416 186.3 416 416-186.3 416-416 416z"></path></svg>
            APPLY NOW
          </div>
          <NavItem to="/menu"> <FaBars /> MENU </NavItem>
        </BottomNav>

        <FloatingButtons>
            <FloatingButton href="https://wa.me/918074101457" target="_blank" bg="#25D366"> <FaWhatsapp /> </FloatingButton>
        </FloatingButtons>
      </AppContainer>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;