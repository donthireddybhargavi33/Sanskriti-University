import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 0;
  background: linear-gradient(135deg, #1a2c5a 0%, #1a2c5a 100%);
  color: white;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  color: white;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #e0b100;
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const Layout = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainHighlight = styled.div`
  flex: 2;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 500px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Grid = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 250px);
  gap: 1rem;
  overflow-y: auto;
  max-height: 620px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 200px);
    max-height: none;
  }
`;

const HighlightCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ArrowMark = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  background: rgba(224, 177, 0, 0.9);
  clip-path: polygon(30% 20%, 80% 50%, 30% 80%);
  cursor: pointer;
`;

const HighlightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const HighlightOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.85), transparent);
  color: white;
  width: 100%;
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const TopHighlights = () => {
  const highlights = [
    {
      image: "/images/cm.jpeg",
      title: "Hon'ble Dy CM Keshav Prasad",
      description: "Visit to Sanskriti University Campus"
    },
    {
      image: "/images/UM.jpeg",
      title: "Dr.Ramesh Pokhriyal 'Nishank'",
      description: "Union Minister of Education, Govt. of India"
    },
    {
      image: "/images/mp.jpeg",
      title: "Hon'ble MP Rajya Sabha Arun Singh",
      description: "Special Address at Sanskriti University"
    },
    {
      image: "/images/RS.jpeg",
      title: "Rajat Sharma",
      description: "Guest of Honour at Sanskriti University"
    },
    {
      image: "/images/clg.jpeg",
      title: "Sanskriti University",
      description: "A beautiful campus with modern facilities"
    },
    {
      image: "/images/bajaj.jpeg",
      title: "Bajaj Visit",
      description: "Industry Partnership"
    },
    {
      image: "/images/byjus.jpeg",
      title: "Byjus Visit",
      description: "Educational Collaboration"
    },
    {
      image: "/images/fedex.jpeg",
      title: "FedEx Visit",
      description: "Logistics Partnership"
    }
  ];

  const [mainHighlight, setMainHighlight] = useState(highlights[0]);
  const [otherHighlights, setOtherHighlights] = useState(highlights.slice(1, 5)); // limit to 4 for 2x2 grid

  const handleArrowClick = (index) => {
    const selectedHighlight = otherHighlights[index];
    const newOtherHighlights = [...otherHighlights];
    newOtherHighlights[index] = mainHighlight;
    setMainHighlight(selectedHighlight);
    setOtherHighlights(newOtherHighlights);
  };

  return (
    <Section>
      <Container>
        <Title>TOP HIGHLIGHTS</Title>
        <Layout>
          <MainHighlight>
            <HighlightImage src={mainHighlight.image} alt={mainHighlight.title} />
            <HighlightOverlay>
              <h3>{mainHighlight.title}</h3>
              <p>{mainHighlight.description}</p>
            </HighlightOverlay>
          </MainHighlight>
          <Grid>
            {otherHighlights.map((highlight, index) => (
              <HighlightCard key={index}>
                <HighlightImage src={highlight.image} alt={highlight.title} />
                <ArrowMark onClick={() => handleArrowClick(index)} />
                <HighlightOverlay>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.description}</p>
                </HighlightOverlay>
              </HighlightCard>
            ))}
          </Grid>
        </Layout>
      </Container>
    </Section>
  );
};

export default TopHighlights;
