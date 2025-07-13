// src/pages/HomePage.js

import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Testimonials from '../components/sections/home/Testimonials';
import SUReviews from './SUReviews';
import TopHighlights from '../components/sections/home/TopHighlights';
import LatestAnnouncements from '../components/sections/home/LatestAnnouncements';
import Collaborations from '../components/sections/home/Collaborations';
import EventsAndLife from '../components/sections/home/EventsAndLife';

// Import base components from App.js
import {
  Section,
  SectionTitle,
  HeroSlider,
  HeroSlide,
  HeroContent,
  HighlightCard,
  StatsGrid,
  Card,
  StatNumber,
  StatText,
  RecruiterLogoSlide,
  CollaborationButtons
} from '../App';

// Local Styled Components
const MainWrapper = styled.div`
  background: #0a183d;
  min-height: 100vh;
  width: 100%;
  color: white;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem 0;
`;

const StatsGridItem = styled.div`
  text-align: center;
  flex: 1;
  min-width: 200px;
`;

const FeatureCard = styled.div`
  position: relative;
  height: 300px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const FeatureContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  button {
    background: #f7b500;
    color: #0a183d;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
    cursor: pointer;
    font-weight: bold;
  }
`;

const HomePage = () => {
  const recruiterSliderSettings = { dots: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, autoplay: true, arrows: true };
  const heroSliderSettings = {
    nav: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    infinite: true
  };

  return (
    <MainWrapper>
      <div>
        <HeroSlider {...heroSliderSettings}>
          {/* Slide 1 */}
          <HeroSlide bg="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop">
            <HeroContent>
              <h1>Where Innovation Meets Opportunity</h1>
              <p><strong>2.5 Crore</strong></p>
              <p style={{color: 'white', fontSize: '14px'}}>Startup Grant Sanctioned for Sanskriti Incubation Centre by DST, Govt. of India</p>
              <span>Admission Open 2025-26</span>
            </HeroContent>
          </HeroSlide>
          
          {/* Slide 2 */}
          <HeroSlide bg="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop">
            <HeroContent>
              <h1>Cutting-Edge Research Facilities</h1>
              <p><strong>State-of-the-art Labs</strong></p>
              <p style={{color: 'white', fontSize: '14px'}}>Equipped with latest technology for hands-on learning</p>
              <span>Apply Now for 2025-26</span>
            </HeroContent>
          </HeroSlide>
          
          {/* Slide 3 */}
          <HeroSlide bg="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop">
            <HeroContent>
              <h1>Industry-Aligned Curriculum</h1>
              <p><strong>100+ Industry Partners</strong></p>
              <p style={{color: 'white', fontSize: '14px'}}>Ensuring our graduates are job-ready</p>
              <span>Limited Seats Available</span>
            </HeroContent>
          </HeroSlide>
        </HeroSlider>

        <TopHighlights />

        <Section>
          <SectionTitle>TOP HIGHLIGHTS</SectionTitle>
          <HighlightCard>
            <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop" alt="Business Conclave" />
            <p>Sanskriti Business Conclave 2025</p>
          </HighlightCard>
        </Section>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <LatestAnnouncements />

          {/* Right Section - Stats */}
          <Section style={{ flex: 1, minWidth: '300px' }}>
            <SectionTitle>OUR SUCCESS</SectionTitle>
            <StatsGrid>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '30px',textAlign: 'center' , background: 'linear-gradient(135deg, #213774 50%, #0b1e4f 50%)',borderRadius: '15px', }}><StatNumber  style={{  color:'white' , fontSize:'35px', fontWeight:'lighter'}}>85%</StatNumber><StatText  style={{  color:'white'}}>Student Placed on highest package</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '30px',textAlign: 'center', padding: '30px' , borderRadius: '15px',background: 'rgb(33, 55, 116)'}}><StatNumber  style={{  color:'rgb(229, 207, 42)', fontSize:'35px', fontWeight:'lighter' }}>2500+</StatNumber><StatText  style={{  color:'white'}}>Research Papers</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '30px',textAlign: 'center',borderRadius: '15px', background: 'rgb(33, 55, 116)'}}><StatNumber  style={{  color:'rgb(229, 207, 42)', fontSize:'35px', fontWeight:'lighter'}}>6.20 Lakhs</StatNumber><StatText  style={{  color:'white'}}>Average Package offered by 200+ Companies</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '30px',textAlign: 'center' , borderRadius: '15px', background: 'linear-gradient(122deg, #213774 50%, #0b1e4f 50%)'}}><StatNumber  style={{  color:'white', fontSize:'35px', fontWeight:'lighter',marginTop:'35px'}}>2700+</StatNumber><StatText  style={{  color:'white'}}>Patents</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '30px',textAlign: 'center',borderRadius: '15px', background: 'linear-gradient(125deg, #213774 50%, #0b1e4f 50%)' }}><StatNumber  style={{  color:'white', fontSize:'35px', fontWeight:'lighter'}}>54 Lakhs</StatNumber><StatText  style={{  color:'white'}}>Highest Package</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '30px',textAlign: 'center',borderRadius: '15px' ,background: 'rgb(33, 55, 116)' }}><StatNumber style={{  color:'rgb(229, 207, 42)', fontSize:'35px', fontWeight:'lighter'}}>200+</StatNumber><StatText  style={{  color:'white'}}>Companies visited campus for Placement</StatText></Card>
            </StatsGrid>
          </Section>
        </div>

        <Section>
          <SectionTitle>OUR PLACEMENTS</SectionTitle>
          <Slider {...recruiterSliderSettings}>
            <RecruiterLogoSlide> <img src="https://www.sanskriti.edu.in/images/recruiters/shree-cement.png" alt="Shree Cement" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="https://www.sanskriti.edu.in/images/recruiters/tcs.png" alt="TCS" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="https://www.sanskriti.edu.in/images/recruiters/vedantu.png" alt="Vedantu" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="https://www.sanskriti.edu.in/images/recruiters/w.png" alt="W" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="https://www.sanskriti.edu.in/images/recruiters/genpact.png" alt="Genpact" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="https://www.sanskriti.edu.in/images/recruiters/hcl.png" alt="HCL" /> </RecruiterLogoSlide>
          </Slider>
        </Section>
        
        <Collaborations />
        
        <Section>
          <SectionTitle>WHY CHOOSE SU?</SectionTitle>
           <p style={{textAlign: 'center', marginTop: '-15px', marginBottom: '20px', color: '#ccc'}}>Be a part of an Edifying learning experience which offers additional value to your future.</p>
          <FeatureCard bg="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop">
              <FeatureContent> <h3>Top Reasons To Join SU</h3> <p>Honored with many awards for high-quality education, infrastructure and research.</p> <button>VIEW MORE</button> </FeatureContent>
          </FeatureCard>
          <FeatureCard style={{margin: '20px 0'}} bg="https://images.unsplash.com/photo-1541829076-2489e51a721b?q=80&w=2070&auto=format&fit=crop">
              <FeatureContent> <h3>50+ International University</h3> <p>Tie-Ups For Student Exchange Programme.</p> <button>VIEW MORE</button> </FeatureContent>
          </FeatureCard>
          <FeatureCard bg="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop">
              <FeatureContent> <h3>Interactive Pedagogy</h3> <p>Project Based Learning Experience.</p> <button>VIEW MORE</button> </FeatureContent>
          </FeatureCard>
        </Section>
        
        <Section style={{backgroundColor: 'white', color: 'rgb(33, 55, 116)'}}>
          <SectionTitle
            style={{
              backgroundColor: 'white',
              color: 'rgb(33, 55, 116)',
              fontSize: '1.7rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
            }}
          >
            CUTTING EDGE RESEARCH
          </SectionTitle>

          <p
            style={{
              textAlign: 'center',
              marginTop: '-10px',
              marginBottom: '20px',
              color: 'rgb(33, 55, 116)',
              fontSize: '1.3rem',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Leading the search for knowledge with our highly equipped research facilities.
          </p>

          <StatsContainer>
            <StatsGridItem>
              <StatNumber>2500+</StatNumber>
              <StatText>Research Papers</StatText>
            </StatsGridItem>
            <StatsGridItem>
              <StatNumber>2700+</StatNumber>
              <StatText>Patents</StatText>
            </StatsGridItem>
            <StatsGridItem>
              <StatNumber>30</StatNumber>
              <StatText>Grants Filed</StatText>
            </StatsGridItem>
            <StatsGridItem>
              <StatNumber>12 Million</StatNumber>
              <StatText>Research Articles</StatText>
            </StatsGridItem>
            <StatsGridItem>
              <StatNumber>5 Lakhs</StatNumber>
              <StatText>Thesis & Dissertation</StatText>
            </StatsGridItem>
          </StatsContainer>
        </Section>
        
        <Section>
          <Testimonials />
        </Section>

        <section className="py-12 px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">LIFE @ SU</h2>
            <p className="mt-2 text-gray-300">
              The most vibrant campus, to give you the most vibrant learning experience.
            </p>
          </div>
          <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://picsum.photos/seed/lifeatsu/800/500"
              alt="Students playing football"
              className="w-full h-auto"
            />
          </div>
        </section>

        <EventsAndLife />

        <SUReviews />
      </div>
    </MainWrapper>
  );
};

export default HomePage;