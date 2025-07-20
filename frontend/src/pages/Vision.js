import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  background-color: #fff;
`;

const TextBlock = styled.div`
  flex: 1 1 300px;
  background-color: #f0f4f8;
  padding: 1.5rem;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Heading = styled.h2`
  font-weight: 900;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #222;
`;

const Image = styled.img`
  flex: 1 1 300px;
  max-width: 200px;
  border-radius: 8px;
  object-fit: cover;
`;

const Vision = () => {
  return (

    <Container>
            <Link to="/" style={{
         position: 'absolute',
        display: 'flex',
        padding: '10px 2px',
        backgroundColor: '#f7b500',
        color: '#0a183d',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        transition: 'all 0.3s ease',
      }}>
        Home
      </Link><br></br>
      <TextBlock>
        <Heading>Vision</Heading>
        <Paragraph>
          To became a highly ranked world class research driven University committed towards setting new benchmarks of excellence in higher, technical, professional and health education with high emphasis on research & development, innovation, incubation and services to the society, industry and the globe.
        </Paragraph>
      </TextBlock>
      <Image src="/images/vision.webp" alt="Vision" />
      <Image src="/images/mission.webp" alt="Mission" />
      <TextBlock>
        <Heading>Mission</Heading>
        <Paragraph>
          To provide quality education in technology enabled campus with high emphasis on outcomes, values and skills
        </Paragraph>
      </TextBlock>
    </Container>
  );
};

export default Vision;
