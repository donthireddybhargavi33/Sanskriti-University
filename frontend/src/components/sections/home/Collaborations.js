import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #0a183d 0%, #1a2c5a 100%);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/images/pattern-bg.png') repeat;
    opacity: 0.1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  text-transform: uppercase;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
`;

const TabButton = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.active ? '#f7b500' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? '#0a183d' : 'white'};
  border: none;
  
  &:hover {
    background-color: #f7b500;
    color: #0a183d;
    transform: translateY(-2px);
  }
`;

const SlideContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2.5rem;
  margin: 0 1rem;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  position: relative;
  z-index: 1;
`;

const LogoContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  width: 280px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const CollabTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
`;

const CollabDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding: 0 1rem;
`;

const DotIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.active ? '#f7b500' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    background-color: ${props => props.active ? '#f7b500' : 'rgba(255, 255, 255, 0.5)'};
  }
`;

const ViewMoreButton = styled.button`
  background-color: #f7b500;
  color: #0a183d;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(247, 181, 0, 0.2);
  }
`;

const NavigationArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'prev' ? 'left: 20px;' : 'right: 20px;'}
  background: rgba(255, 255, 255, 0.15);
  color: white;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.3);
  }

  &::before {
    content: '${props => props.direction === 'prev' ? '←' : '→'}';
    font-size: 1.2rem;
  }
`;

const Collaborations = () => {
  const [activeTab, setActiveTab] = useState('national');
  const [currentSlide, setCurrentSlide] = useState(0);

  const collaborations = {
    national: [
      {
        logo: "/images/sri-aurobindo-society-logo.png",
        title: "Sri Aurobindo Society",
        description: "Sri Aurobindo Foundation for Indian Culture (SAFIC) under the aegis of Sri Aurobindo Society shall work collaboratively with Sanskriti University in the process of curriculum development, academic delivery, research, exchange programmes and allied areas to offer certificate, diploma, under graduate and post graduate programmes. Sanskriti University and SAFIC under the aegis of Sri Aurobindo Society shall offer all the educational and training programmes collaboratively."
      },
      {
        logo: "/images/santhigiri-logo.png",
        title: "Santhigiri Ashram",
        description: "Sanskriti Ayurvedic Medical College and Hospital has an exclusive MoU with Santhigiri Ashram, renowned for its exceptional service and high quality Ayurvedic treatment and medicines. Santhigiri's experienced doctors, time-tested healing techniques and authentic Ayurvedic medicines will not only aid in training of medical students but will also cultivate a culture of entrepreneurship."
      }
    ],
    international: [
      {
        logo: "/images/msme-logo.png",
        title: "MSME (Agriculture)",
        description: "Sanskriti is the only University in the Region providing training to youth and farmers about the latest trends in agriculture. Programme on ecological farming including organic farming is very well received as the grain and the fodder derived from these do not leave any adverse impact on any living organisms. This helps in maintaining the bio-diversity and the Govt. is promoting this type of farming."
      },
      // Add more international collaborations as needed
    ]
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: setCurrentSlide,
    prevArrow: <NavigationArrow direction="prev" />,
    nextArrow: <NavigationArrow direction="next" />
  };

  const currentCollaborations = collaborations[activeTab];

  return (
    <Section>
      <Container>
        <Title>WE ARE SPRINTING AHEAD</Title>
        <ButtonGroup>
          <TabButton 
            active={activeTab === 'national'} 
            onClick={() => setActiveTab('national')}
          >
            National Collaborations
          </TabButton>
          <TabButton 
            active={activeTab === 'international'} 
            onClick={() => setActiveTab('international')}
          >
            International Collaborations
          </TabButton>
        </ButtonGroup>

        <Slider {...settings}>
          {currentCollaborations.map((collab, index) => (
            <SlideContainer key={index}>
              <LogoContainer>
                <img src={collab.logo} alt={collab.title} />
              </LogoContainer>
              <CollabTitle>{collab.title}</CollabTitle>
              <CollabDescription>{collab.description}</CollabDescription>
            </SlideContainer>
          ))}
        </Slider>

        <DotIndicators>
          {currentCollaborations.map((_, index) => (
            <Dot 
              key={index} 
              active={currentSlide === index} 
              onClick={() => setCurrentSlide(index)} 
            />
          ))}
        </DotIndicators>
      </Container>
    </Section>
  );
};

export default Collaborations;
