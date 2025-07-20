import React from 'react';
import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

const Section = styled.section`
  padding: 3rem 0;
  background: #1a2c5a;
  color: white;
`;

const Container = styled.div`
  max-width: 800px;
  width: 90%;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #e0b100;
    margin: 0.5rem 0 0;
    border-radius: 2px;
  }
`;

const AnnouncementList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AnnouncementCard = styled.a`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
    border-color: #e0b100;
  }
`;

const CardContent = styled.div`
  flex: 1;
`;

const AnnouncementTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #e0b100;
`;

const MoreUpdates = styled.button`
  background: #e0b100;
  color: #0a183d;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;

  &:hover {
    background: #f2c200;
    transform: translateY(-2px);
  }
`;

const LatestAnnouncements = () => {
  const announcements = [
    {
      title: "Recruitment for JRF ISRO Sponsored Project",
      link: "#"
    },
    {
      title: "Exciting Career Opportunities in DST (ITBI) Funded Project",
      link: "#"
    },
    {
      title: "Call for proposals for funding under DST sponsored i-TBI",
      link: "#"
    },
    {
      title: "Ph.D. Admission Notification (Session 2025-26)",
      link: "#"
    },

  ];

  return (
    <Section>
      <Container>
        <div>
          <Title>LATEST ANNOUNCEMENTS</Title>
          <AnnouncementList>
            {announcements.map((announcement, index) => (
              <AnnouncementCard href={announcement.link} key={index}>
                <CardContent>
                  <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
                </CardContent>
                <FiArrowRight size={20} color="#e0b100" />
              </AnnouncementCard>
            ))}
          </AnnouncementList>
          <MoreUpdates>
            CLICK FOR MORE UPDATES
            <FiArrowRight size={18} />
          </MoreUpdates>
        </div>
      </Container>
    </Section>
  );
};

export default LatestAnnouncements;
