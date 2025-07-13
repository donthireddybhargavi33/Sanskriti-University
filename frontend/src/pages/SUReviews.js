import React from 'react';
import styled from 'styled-components';

const ReviewsSection = styled.section`
  padding: 50px 0;
  background-color: #1e2c5f;
  color: white;
`;

const ReviewsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  color: white;
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

// YouTube Shorts Style Cards
const ShortsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ShortCard = styled.a`
  background-color: #111d4a;
  border-radius: 10px;
  padding: 20px;
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
  position: relative;

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .youtube-badge {
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: red;
    color: white;
    font-size: 12px;
    padding: 2px 6px;
    border-radius: 4px;
  }

  h4 {
    font-size: 1rem;
    margin: 8px 0 4px;
  }

  p {
    font-size: 0.85rem;
    margin: 0;
  }
`;

// Right Reviews
const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReviewCard = styled.div`
  background-color: ${props => props.bgColor || '#1a47b8'};
  border-radius: 10px;
  padding: 30px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const ReviewerImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ReviewerName = styled.div`
  font-weight: bold;
`;

const SUReviews = () => {
  const shorts = [
    {
      name: "Anushka Sharma",
      course: "B.Tech",
      image: "/images/anushka.png",
      url: "https://youtu.be/DON6iBmn6Xg"
    },
    {
      name: "Vidhi Choudhary",
      course: "MBA",
      image: "/images/vidhi.png",
      url: "https://youtu.be/VIDHI123456"
    },
    {
      name: "Priya Singh",
      course: "BBA",
      image: "/images/priya.png",
      url: "https://youtu.be/PRIYA123456"
    },
    {
      name: "Aditya Verma",
      course: "MCA",
      image: "/images/aditya.png",
      url: "https://youtu.be/ADITYA123456"
    },
  ];

  const reviews = [
    {
      type: "Student Reviews",
      bgColor: "#1a47b8",
      content: "My name is Joshua from Ghana, pursuing M.Sc. Agriculture. My experience with Sanskriti University has been awesome. Sanskriti University is a true blend of academia and cultural hub for everyone who want to further his education. A serene atmosphere that provides you with every resources necessary to successfully accomplish your goals.",
      name: "Joshua",
      image: "/images/joshua.jpg"
    },
    {
      type: "Parents Reviews",
      bgColor: "#3498db",
      content: "Sanskriti University has lived up to our expectations in all fields - academic, sports, co-curricular. We were skeptical of looking for an educational institution that would provide our children with all-round development as well as a competitive environment.",
      name: "Anita Vadera",
      image: "/images/anita.jpg"
    },
    {
      type: "Faculty Reviews",
      bgColor: "#1a47b8",
      content: "It's a great privilege for me to work in Sanskriti University. The management and staff are very supportive and cooperative. The infrastructure and facilities provided by the university are excellent.",
      name: "Dr. Rajesh Kumar",
      image: "/images/rajesh.jpg"
    },
    {
      type: "HR Reviews",
      bgColor: "#1e2c5f",
      content: "I appreciate the professionals enhancing the employability quotient and preparing students for the corporate world. The university has a strong industry connection and provides excellent placement opportunities to its students.",
      name: "Mr. Amit Singh",
      image: "/images/amit.jpg"
    }
  ];

  return (
    <ReviewsSection>
      <ReviewsTitle>SU REVIEWS</ReviewsTitle>
      <ContentLayout>
        <ShortsGrid>
          {shorts.map((short, i) => (
            <ShortCard key={i} href={short.url} target="_blank">
              <div className="youtube-badge">YouTube</div>
              <img src={short.image} alt={short.name} />
              <h4>{short.name}</h4>
              <p>{short.course}</p>
            </ShortCard>
          ))}
        </ShortsGrid>
        <ReviewsContainer>
          {reviews.map((review, index) => (
            <ReviewCard key={index} bgColor={review.bgColor}>
              <div>
                <ReviewTitle>{review.type}</ReviewTitle>
                <ReviewContent>{review.content}</ReviewContent>
              </div>
              <ReviewFooter>
                <ReviewerImage src={review.image} alt={review.name} />
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
