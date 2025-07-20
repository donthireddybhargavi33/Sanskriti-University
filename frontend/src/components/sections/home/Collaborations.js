import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.section`
  padding: 4rem 0;
  width: 100%;
  min-height: 100vh;
  background: url('/images/sanskriti-newspaper-bg.jpeg') no-repeat center center;
  background-size: cover;
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
    background: url('/images/sanskriti-newspaper-bg.png') no-repeat;
    background-size: cover;
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
    min-height: auto;
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

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  background-size: cover;
  padding: 1rem 2rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    margin-bottom: 2rem;
  }
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

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 1rem;
  }
  
  &:hover {
    background-color: #f7b500;
    color: #0a183d;
    transform: translateY(-2px);
  }
`;

const SlideContainer = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 15px;
  padding: 0;
  margin: 0 rem;
  min-height: 500px;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.5);
  position: relative;
  z-index: 1;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 350px;
  }
`;

const LogoContainer = styled.div`
  padding:3rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: 6.5rem;
  width: 340px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
    max-height: 100%;
    align-self: center;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    height: auto;
    padding: 1rem;
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
        logo: "/images/SAS.jpeg",
        title: "Sri Aurobindo Society",
        description: "Sri Aurobindo Foundation for Indian Culture (SAFIC) under the aegis of Sri Aurobindo Society shall work collaboratively with Sanskriti University in the process of curriculum development, academic delivery, research, exchange programmes and allied areas to offer certificate, diploma, under graduate and post graduate programmes. Sanskriti University and SAFIC under the aegis of Sri Aurobindo Society shall offer all the educational and training programmes collaboratively."
      },
      {
        logo: "/images/SA.jpeg",
        title: "Santhigiri Ashram",
        description: "Sanskriti Ayurvedic Medical College and Hospital has an exclusive MoU with Santhigiri Ashram, renowned for its exceptional service and high quality Ayurvedic treatment and medicines. Santhigiri's experienced doctors, time-tested healing techniques and authentic Ayurvedic medicines will not only aid in training of medical students but will also cultivate a culture of entrepreneurship."
      }
    ,{
        logo: "/images/MSME.jpeg",
        title: "MSME (Agriculture)",
        description: "Sanskriti is the only University in the Region providing training to youth and farmers about the latest trends in agriculture. Programme on ecological farming including organic farming is very well received as the grain and the fodder derived from these do not leave any adverse impact on any living organisms. This helps in maintaining the bio-diversity and the Govt. is promoting this type of farming."
      }
    ],
    international: [
      {
        logo: "/images/UCR.jpeg",
        title: "Agreement Of Cooperation (AOC) With University Of California Riverside, USA",
        description: "Sanskriti University signed an Agreement of Cooperation with University of California Riverside (UCR), USA. University of California Riverside, USA popularly known as UCR is one of the most diverse, inclusive institutions within the prestigious 10 campus University of California system. The main campus sits on 1,900 acres in a suburban district of Riverside."      },
      {
        logo: "/images/ANIMT.jpeg",
        title: "Mou With Australian National Institute Of Management And Technology – Australia",
        description: "An MOU with ANIMT, Australia has paved the way for Sanskriti Students to pursue higher education in Australia by being exempt of the credits already completed in Sanskriti University. This understanding is very useful for such students who are pursuing BBA or any other similar course at Sanskriti and wish to acquire a diploma from an Australian Institute.  "
      },
      {
        logo: "/images/IUBH.jpeg",
        title: "IUBH University Of Applied Sciences",
        description: "An MoU was signed between Sanskriti University and IUBH University of Applied Sciences, Germany in order to strengthen academic areas of mutual interest in promoting the exchange of students. This gives a significant advantage to our students in their journey to be the leaders of tomorrow. A leading objective of the partnership is post-study employment opportunities for students."
      },
      {
        logo: "/images/saylor.jpeg",
        title: "MOU With Saylor Academy",
        description: "Sanskriti University signed MoU with Saylor Academy with its office in Annapolis, Maryland, USA. This MoU will facilitate the Students of Sanskriti University to access the free courses of Saylor Academy to enhance their knowledge, skills and competencies. This partnership will supplement the knowledge and skills of the students of Sanskriti University. Saylor Academy shall prepare a dedicated landing page and list all the courses for the students of Sanskriti University."
      }
    ]
  };

  // Dynamically set slidesToShow based on activeTab and number of collaborations
  const slidesToShow = (activeTab === 'international' && collaborations.international.length >= 2) || (activeTab === 'national' && collaborations.national.length >= 2) ? 2 : 1;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: slidesToShow === 2,
    centerPadding: slidesToShow === 2 ? '0px' : '50px',
    afterChange: (current) => setCurrentSlide(current),
    prevArrow: <NavigationArrow direction="prev" />,
    nextArrow: <NavigationArrow direction="next" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0px',
        }
      }
    ]
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
