// src/pages/HomePage.js

import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Testimonials from '../components/sections/home/Testimonials';
import SUReviews from './SUReviews';

// FIXED: This import list is now clean and correct.
import {
  Section, SectionTitle, HeroSlider, HeroSlide, HeroContent, HighlightCard,
  StatsGrid, Card,Stats,StatItem, StatNumber, StatText, RecruiterLogoSlide,
  CollaborationButtons, AnnouncementList, AnnouncementItem, MoreUpdatesButton,
  WhyChooseCard, WhyChooseContent, TestimonialVideo
} from '../App';

const HomePage = () => {
  const recruiterSliderSettings = { dots: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, autoplay: true, arrows: true };
const heroSliderSettings = {
  // ... other settings
  nav: true, // Show navigation arrows
  arrows: true, // Show arrow buttons
  // Other common settings:
  autoplay: true, // Optional auto-rotation
  speed: 500, // Transition speed
  slidesToShow: 1, // Show one slide at a time
  infinite: true // Infinite looping
};

  return (
    <>
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

      <Section>
        <SectionTitle>TOP HIGHLIGHTS</SectionTitle>
        <HighlightCard>
          <img src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop" alt="Business Conclave" />
          <p>Sanskriti Business Conclave 2025</p>
        </HighlightCard>
      </Section>
    

<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
  <Section style={{ flex: 1, minWidth: '300px' }}>
    <SectionTitle>LATEST ANNOUNCEMENTS</SectionTitle>
    <AnnouncementList>
      <AnnouncementItem>
        <p>TBI</p>
        <Link to="/announcements/tbi">
          <button>Click Here <span>NEW</span></button>
        </Link>
      </AnnouncementItem>
      <AnnouncementItem>
        <p>Ph.D. Admission Notification (Session 2025-26)</p>
        <Link to="/announcements/phd-2025">
          <button>Click Here <span>NEW</span></button>
        </Link>
      </AnnouncementItem>
      <AnnouncementItem>
        <p>Details of Provisional, Migration, Degree, Alumni Charges.</p>
        <Link to="/announcements/charges">
          <button>Click Here <span>NEW</span></button>
        </Link>
      </AnnouncementItem>
    </AnnouncementList>
    <MoreUpdatesButton>CLICK FOR MORE UPDATES</MoreUpdatesButton>
  </Section>

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
      
      <Section>
          <SectionTitle>WE ARE SPRINTING AHEAD</SectionTitle>
          <CollaborationButtons>
              <button>National Collaborations</button>
              <button>International Collaborations</button>
          </CollaborationButtons>
      </Section>
      
      <Section>
          <SectionTitle>WHY CHOOSE SU?</SectionTitle>
           <p style={{textAlign: 'center', marginTop: '-15px', marginBottom: '20px', color: '#ccc'}}>Be a part of an Edifying learning experience which offers additional value to your future.</p>
          <WhyChooseCard bg="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop">
              <WhyChooseContent> <h3>Top Reasons To Join SU</h3> <p>Honored with many awards for high-quality education, infrastructure and research.</p> <button>VIEW MORE</button> </WhyChooseContent>
          </WhyChooseCard>
          <WhyChooseCard style={{margin: '20px 0'}} bg="https://images.unsplash.com/photo-1541829076-2489e51a721b?q=80&w=2070&auto=format&fit=crop">
              <WhyChooseContent> <h3>50+ International University</h3> <p>Tie-Ups For Student Exchange Programme.</p> <button>VIEW MORE</button> </WhyChooseContent>
          </WhyChooseCard>
          <WhyChooseCard bg="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop">
              <WhyChooseContent> <h3>Interactive Pedagogy</h3> <p>Project Based Learning Experience.</p> <button>VIEW MORE</button> </WhyChooseContent>
          </WhyChooseCard>
      </Section>
      
      <Section style={{backgroundColor: 'white', color: 'rgb(33, 55, 116)'}}>
<SectionTitle
  style={{
    backgroundColor: 'white',
    color: 'rgb(33, 55, 116)',
    fontSize: '1.7rem',           // Font size
    fontFamily: 'Poppins, sans-serif', // Font family
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
    fontSize: '1.3rem',               // Font size
    fontFamily: 'Poppins, sans-serif', // Font family
  }}
>
  Leading the search for knowledge with our highly equipped research facilities.
</p>

<Stats>
  <StatItem>
    <StatNumber>2500+</StatNumber>
    <StatText>Research Papers</StatText>
  </StatItem>
  <StatItem>
    <StatNumber>2700+</StatNumber>
    <StatText>Patents</StatText>
  </StatItem>
  <StatItem>
    <StatNumber>30</StatNumber>
    <StatText>Grants Filed</StatText>
  </StatItem>
  <StatItem>
    <StatNumber>12 Million</StatNumber>
    <StatText>Research Articles</StatText>
  </StatItem>
  <StatItem>
    <StatNumber>5 Lakhs</StatNumber>
    <StatText>Thesis & Dissertation</StatText>
  </StatItem>
</Stats>

      </Section>
      
      <Section>
          <Testimonials />
      </Section>

      <section className="py-12 px-4 ">
      <div className="text-center mb-8 ">
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

      <SUReviews />
    </>
  );
};

export default HomePage;