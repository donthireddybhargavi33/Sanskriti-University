import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.section`
  padding: 3rem 0;
  background: linear-gradient(135deg, #0a183d 0%, #1a2c5a 100%);
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
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
`;

const HighlightCard = styled.div`
  margin: 0 1rem;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 300px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const HighlightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HighlightOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
  
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    opacity: 0.9;
  }
`;

const TopHighlights = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const highlights = [
    {
      image: "https://example.com/path-to-image1.jpg",
      title: "Hon'ble Dy CM Keshav Prasad",
      description: "Visit to Sanskriti University Campus"
    },
    {
      image: "https://example.com/path-to-image2.jpg",
      title: "Dr.Ramesh Pokhriyal 'Nishank'",
      description: "Union Minister of Education, Govt. of India"
    },
    {
      image: "https://example.com/path-to-image3.jpg",
      title: "Hon'ble MP Rajya Sabha Arun Singh",
      description: "Special Address at Sanskriti University"
    },
    {
      image: "https://example.com/path-to-image4.jpg",
      title: "Rajat Sharma",
      description: "Guest of Honour at Sanskriti University"
    }
  ];

  return (
    <Section>
      <Container>
        <Title>TOP HIGHLIGHTS</Title>
        <Slider {...settings}>
          {highlights.map((highlight, index) => (
            <HighlightCard key={index}>
              <HighlightImage src={highlight.image} alt={highlight.title} />
              <HighlightOverlay>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </HighlightOverlay>
            </HighlightCard>
          ))}
        </Slider>
      </Container>
    </Section>
  );
};

export default TopHighlights;
