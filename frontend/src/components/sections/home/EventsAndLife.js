import React, { useState } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 40px 20px;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background-color: #1e2c5f;
  color: white;
  padding: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: white;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: white;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
`;

const NavigationArrows = styled.div`
  position: absolute;
  top: 50%;
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  transform: translateY(-50%);
  background-color: white;
  color: #1e2c5f;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);

  &:hover {
    background-color: #f0f0f0;
  }
`;

const EventsAndLife = () => {
  const eventsImages = [
  '/photos/E4.jpeg',
  '/photos/E5.jpeg',
  '/photos/E6.jpeg',
  '/photos/E7.jpeg',
  '/photos/E8.jpeg',
  '/photos/E9.jpeg',
  '/photos/E10.jpeg',
  '/photos/E11.jpeg',
  ];

  const lifeImages = [
    '/photos/E26.jpeg',
    "/images/clg1.jpeg",
  '/photos/E28.jpeg',
  '/photos/E16.jpeg',
  '/photos/E17.jpeg'

  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lifeCurrentImageIndex, setLifeCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? eventsImages.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === eventsImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleLifePrevClick = () => {
    setLifeCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? lifeImages.length - 1 : prevIndex - 1
    );
  };

  const handleLifeNextClick = () => {
    setLifeCurrentImageIndex((prevIndex) =>
      prevIndex === lifeImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <SectionContainer style={{ backgroundColor: '#1e2c5f',color: 'white' }}>
      <Section  style={{ backgroundColor: '#1e2c5f',color: 'white' }}>
        <SectionTitle style={{color:'white' }}>EVENTS & MORE</SectionTitle>
        <SectionDescription  style={{ backgroundColor: '#1e2c5f',color: 'white' }}>
          A reflection of the most enriching blend of Cultural & Academic events.
        </SectionDescription>
        <ImageContainer>
          <Image src={eventsImages[currentImageIndex]} alt="University Events" />
          <NavigationArrows direction="left" onClick={handlePrevClick}>‹</NavigationArrows>
          <NavigationArrows direction="right" onClick={handleNextClick}>›</NavigationArrows>
        </ImageContainer>
      </Section>

      <Section style={{ backgroundColor:'#1e2c5f',color:'white' }}>
        <SectionTitle style={{backgroundColor:'#1e2c5f',color:'white' }}>LIFE @ SU</SectionTitle>
        <SectionDescription style={{backgroundColor:'#1e2c5f',color:'white' }}>
          The most vibrant campus,to give you the most vibrant learning experience.
        </SectionDescription>
        <ImageContainer>
          <Image src={lifeImages[lifeCurrentImageIndex]} alt="Life at SU" />
          <NavigationArrows direction="left" onClick={handleLifePrevClick}>‹</NavigationArrows>
          <NavigationArrows direction="right" onClick={handleLifeNextClick}>›</NavigationArrows>
        </ImageContainer>
      </Section>
    </SectionContainer>
  );
};

export default EventsAndLife;
