import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import programmes from '../data/programmesData';


const Container = styled.div`
  padding: 80px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
  gap: 20px;
`;

const Card = styled.div`
  position: relative;
  background-color: #eee;
  height: 220px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-image: ${props => props.imgSrc ? `url(${props.imgSrc})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
`;

const Title = styled.div`
  position: relative;
  padding: 0 10px 40px;
  z-index: 2;
`;

const MoreInfoButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ff6f00;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  z-index: 2;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e65100;
  }
`;

const CommencementNote = styled.p`
  margin-top: 30px;
  font-size: 0.9rem;
  color: #999;
  text-align: right;
`;

const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 8px;
  padding: 20px;
  position: relative;
`;

const ModalHeader = styled.div`
  background-color: #03a9f4;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  padding: 10px 20px;
  border-radius: 6px 6px 0 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  color: #333;
`;

const CourseList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-top: 15px;
  font-size: 1rem;
  color: #333;
`;

const CourseItem = styled.li`
  margin-bottom: 8px;
  &::before {
    content: "→";
    margin-right: 8px;
    color: #03a9f4;
  }
`;

const ProgrammesPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProgramme, setSelectedProgramme] = React.useState(null);

  const openModal = (programme) => {
    setSelectedProgramme(programme);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProgramme(null);
  };

  return (
    <Container>
            <Link to="/" style={{
              position: 'absolute',
              top: 110,
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
      <Grid>
        {programmes.map((prog, index) => (
          <Card key={index} imgSrc={prog.imgSrc} aria-label={prog.imgAlt}>
            <Overlay />
            <Title>{prog.title}</Title>
            <MoreInfoButton onClick={() => openModal(prog)} aria-label={`More info about ${prog.title}`}>
              More Info &rarr;
            </MoreInfoButton>
          </Card>
        ))}
      </Grid>
      <CommencementNote>* Commencement Year 2025</CommencementNote>

      {modalOpen && selectedProgramme && (
        <ModalBackground onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              Courses List
              <CloseButton onClick={closeModal} aria-label="Close modal">&times;</CloseButton>
            </ModalHeader>
            <CourseList>
              {selectedProgramme.courses.map((course, idx) => (
                <CourseItem key={idx}>{course}</CourseItem>
              ))}
            </CourseList>
          </ModalContent>
        </ModalBackground>
      )}
    </Container>
  );
};

export default ProgrammesPage;
