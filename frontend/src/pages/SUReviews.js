import React from 'react';
import styled from 'styled-components';

const ReviewsSection = styled.section`
  padding: 50px 0;
  width: 100%;
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
    padding: 30px 0;
  }
`;

const ReviewsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ReviewCard = styled.div`
  background-color: ${props => props.bgColor || '#1a47b8'};
  border-radius: 10px;
  padding: 30px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 20px;
    min-height: 200px;
  }
`;

const ReviewTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const ReviewContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const ReviewFooter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const ReviewerName = styled.div`
  font-weight: bold;
`;

// Responsive iframe wrapper for videos
const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
    border-radius: 10px;
  }
`;

const SUReviews = () => {
  const reviews = [
    {
      type: "Student Reviews",
      bgColor: "#1a47b8",
      content: "My name is Joshua from Ghana, pursuing M.Sc. Agriculture. My experience with Sanskriti University has been awesome. Sanskriti University is a true blend of academia and cultural hub for everyone who want to further his education. A serene atmosphere that provides you with every resources necessary to successfully accomplish your goals.",
      name: "Joshua",
    },
    {
      type: "Parents Reviews",
      bgColor: "#3498db",
      content: "Sanskriti University has lived up to our expectations in all fields - academic, sports, co-curricular. We were skeptical of looking for an educational institution that would provide our children with all-round development as well as a competitive environment.",
      name: "Anita Vadera",
    },
    {
      type: "Faculty Reviews",
      bgColor: "#1a47b8",
      content: "It's a great privilege for me to work in Sanskriti University. The management and staff are very supportive and cooperative. The infrastructure and facilities provided by the university are excellent.",
      name: "Dr. Rajesh Kumar",
    },
    {
      type: "HR Reviews",
      bgColor: "#1e2c5f",
      content: "I appreciate the professionals enhancing the employability quotient and preparing students for the corporate world. The university has a strong industry connection and provides excellent placement opportunities to its students.",
      name: "Mr. Amit Singh",
    }
  ];

  return (
    <ReviewsSection>
      <ReviewsTitle style={{ marginTop: '0px', marginBottom: '0px' }}>SU REVIEWS</ReviewsTitle>
      <ContentLayout>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '70px' , marginTop: '10px' }}>
          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/PhHs6UBgqy8?si=25qobliaYc2Drm5c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/DON6iBmn6Xg?si=LpF2ElcIchk5RJ0H"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/r1O_N_nmlTI?si=CbVSuZmJgEVoIMi7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
          <VideoWrapper>
            <iframe
              src="https://www.youtube.com/embed/-MgJXKs3NJk?si=u2oYdBWYhEu4KGJA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </VideoWrapper>
        </div>
        <ReviewsContainer style={{ marginTop: '23px', marginBottom: '0px', }}>
          {reviews.map((review, index) => (
            <ReviewCard key={index} bgColor={review.bgColor}>
              <div>
                <ReviewTitle>{review.type}</ReviewTitle>
                <ReviewContent>{review.content}</ReviewContent>
              </div>
              <ReviewFooter>
                <ReviewerName>{review.name}</ReviewerName>
              </ReviewFooter>
            </ReviewCard>
          ))}
        </ReviewsContainer>
      </ContentLayout>
    </ReviewsSection>
  );
};

export default SUReviews;
