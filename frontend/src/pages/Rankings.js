import React from 'react';
import { Link } from 'react-router-dom';

const Rankings = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Link
        to="/"
        style={{
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
        }}
      >
        Home
      </Link>
      <br />
      <h1 className="text-3xl font-bold mb-6">Rankings &amp; Awards</h1>
      <p className="text-lg mb-8">Sanskriti among the Top Ranking Universities in India</p>

      {/* The Week Rankings Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">The Week</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University Ranked 4th Emerging Multidisciplinary Universities in all India by The Week Magazine 2025.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University Ranked 11th Private &amp; Deemed Multidisciplinary Universities in North Zone by The Week Magazine 2025.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University Ranked 30th Private &amp; Deemed Multidisciplinary Universities in all India by The Week Magazine 2025.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University Ranked 6th Among Multidisciplinary Universities in India Ranked 5th Among Multidisciplinary Universities in North Zone Ranked 13th Among Private &amp; Deemed Multidisciplinary Universities in North Zone by The Week 2024.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University Ranked 28th Emerging Private Engineering College, Ranked 20th in Private Engineering Colleges North Zone by The Week 2024.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of management &amp; Commerce Ranked 1st in U.P. &amp; 21st in India by The Week 2024.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School Of Management and Commerce Ranked 19th In All India by The Week Magazine Emerging Best B- Schools 2022”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University Ranked 8th in Multidisciplinary Emerging Universities (All India) by the Week ”
            </p>
          </div>
        </div>
      </section>

      {/* Outlook Rankings Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Outlook</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Management &amp; Commerce Ranked 1st in Top Emerging Management Institutes in India by Times B School 2024.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti Ayurvedic Medical College &amp; Hospital Ranked 18th in India &amp; 4th in U.P. by Outlook 2024.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University Ranked 23rd in top 50 State private Universities &amp; 3rd in U.P. by Outlook 2024.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University Ranked 16th Among the Top Private MBA Institutions in the North Zone &amp; 6th in U.P. by Outlook 2024.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Engineering Ranked 5th in U.P. &amp; 53rd All Over India by Outlook Magazine 2023”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Tourism &amp; Hospitality Ranked 3rd in U.P. &amp; 20th in All Over India by Outlook Magazine 2023”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Management &amp; Commerce Ranked 4th in U.P. &amp; 62nd in All Over India by Outlook Magazine 2023”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Ranked 7th in U.P. Top Private MBA Institutions by Outlook 2022”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Ranked 3rd PRIVATE CONSTITUENT COLLEGES in U.P. by Outlook 2022”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Engineering &amp; Information Technology Ranked 6th in U.P. by Outlook I Care Rankings 2021”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Management &amp; Commerce Ranked 6th in U.P. in Top 100 B. Schools BBA Edition in India Survey by Times B School”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Management &amp; Commerce Ranked 6th in U.P. Among Top 124 Private BBA Colleges by Outlook.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Engineering &amp; Information Technology Ranked 5th in U.P. Among 110 Top Private Engineering colleges by Outlook.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Ranked 9th in U.P Among Top Private MBA institutions by Outlook India’s Best B-Schools 2021 ”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Ranked 30th in Top 50 Private state Universities by outlook India University Ranking 2020.”
            </p>
          </div>
        </div>
      </section>

      {/* India Today Rankings Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">India Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University, Hotel Management Ranked 8th North India &amp; 4th in U.P. by India Today 2024.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University, Bachelor of Business Administration Ranked 27th North india &amp; 6th in U.P. by India Today 2024.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University, bachelor of Computer Application Ranked 24th North India &amp; 7th in U.P. by India Today 2024.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University, School of Engineering Ranked 19th in North India &amp; 8th in U.P. by India Today 2024.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Management &amp; Commerce Ranked 1st in U.P. &amp; 4th in All Over India under Top 10 Best Value for Money, by India Today Magazine 2023”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Management &amp; Commerce Ranked 1st in U.P. &amp; 8th in All Over India under Top 10 Colleges with Lowest Fees, by India Today Magazine 2023”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Fashion Ranked 1st in U.P. &amp; 3rd in All Over India under Top 10 Best Value for Money, by India Today Magazine 2023”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Fashion Ranked 1st in U.P. &amp; 10th in All Over India under Top 10 Colleges with Lowest Fees, by India Today Magazine 2023”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Engineering Ranked 10th In U.P. by India Today Magazine 2023”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Tourism &amp; Hospitality 4th in U.P. by India Today Magazine 2023”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Ranked 4th in U.P. Best Fashion Designing Colleges by India Today Magazine 2023”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Ranked 7th in U.P. Best BBA Colleges by India Today Magazine 2023”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Ranked 8th in U.P. BCA Colleges by India Today Magazine 2023”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “SCHOOL OF MANAGEMENT &amp; COMMERCE Ranked 5th in U.P. TOP 100 ROI by India Today 2022”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “SCHOOL OF MANAGEMENT &amp; COMMERCE Ranked 11th in U.P. AMONG TOP 100 IN LEARNING EXPERIENCE IN NORTH INDIA by India Today 2022”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti School of Tourism &amp; Hospitality (Best Value for Money) Ranked 1st in Private Colleges, Uttar Pradesh by India Today, Best Colleges Ranking 2020”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti School of Engineering &amp; Information Technology Ranked 6th in Private Colleges, Uttar Pradesh by India Today, Best Colleges Ranking 2020”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti School of Management &amp; Commerce Ranked 5th in Private Colleges, Uttar Pradesh by India Today, Best Colleges Ranking 2020”
            </p>
          </div>
        </div>
      </section>

      {/* Careers 360 Rankings Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Careers 360</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Engineering AAA+ Rating in U.P. by Career 360 Magazine 2024.”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “School of Engineering AAA+ Rating In uttar Pradesh By career 360 Magazine”
            </p>
          </div>
          <div className="border p-4 text-center shadow-md rounded">
            <p className="text-sm italic">
              “Sanskriti University Rated AAA+ Best Engineering Colleges by Careers 360 2022”
            </p>
          </div>
        </div>
      </section>

      {/* Other Awards and Recognitions Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Other Awards &amp; Recognitions</h2>
        <ul className="list-disc list-inside space-y-2 text-sm italic">
          <li>“Intellectual Property India: Ranked 1st in India with the Highest number of Patent applications”</li>
          <li>“ICAR: School of Agriculture Accredited by Indian Council of Agriculture Research (ICAR)”</li>
          <li>“ARIIA: Ranked among Top 30 Band Performer, ARIIA Ranking 2021”</li>
          <li>“Business Today: School Of Management &amp; Commerce Ranked Among Top 10 Private B-School in Uttar Pradesh by Business Today, Mdra Survey 2020.”</li>
          <li>“Jagran Josh: Ranked 1st in Most Promising University in Engineering &amp; Management in India”</li>
          <li>“The Times of India: Ranked 2nd Emerging Engg. Institutes - Research Capability.”</li>
          <li>“The Times of India: Ranked 4th in all india survey for emerging engineering &amp; BBA Institution in india.”</li>
          <li>“Outlook: Ranked 5th in all India Best Infrastructure Category”</li>
          <li>“India Today: Ranked among top 15 Universities”</li>
          <li>“THEWEEK: Ranked 16th In North Zone Non-Government (Private &amp; Deemed) Multi-Disciplinary Universities by THEWEEK”</li>
          <li>“Outlook: Ranked among Top 20 Private Universities”</li>
          <li>“ASSOCHAM: Emerging University of the year”</li>
          <li>“Sanskriti University was awarded Excellence Student Diversity &amp; Recognition as the Best Young University in infrastructure &amp; Research by Hindustan Shiksha Shikhar Samman.”</li>
          <li>“Sanskriti University, Mathura recognized as District Green Champion for Mathura by Mahatma Gandhi National Council of Rural Educatior, Department of Higher Education, Ministry of Education. The Certificate is given by Hon'ble Shri Navneet Singh Chahal ji, District Magistrate, Mathura.”</li>
          <li>“Sanskriti University, Mathura recognized as Outstanding University with Excellent Infrastructure and Green campus Initiative by ARDORCOMM Media Group.”</li>
          <li>“Achiever Award Excellence in Higher Education Most Trusted Institution by Jagran”</li>
          <li>“Educational Excellence and Infrastructural Facilities as Emerging and Research University by Times Business Awards”</li>
        </ul>
      </section>

      {/* Descriptive Paragraphs Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">About Rankings &amp; College Search</h2>
        <p className="mb-4">
          The list of private universities in India and smaller private colleges in Delhi NCR &amp; UP belt is a long one. Therefore zeroing in on the right kind of institution could be a tricky task.
        </p>
        <p className="mb-4">
          In their college search, students are greatly aided by independent private university rankings in India. It makes their college search process more data based and thereby more accurate. The top ranking universities in India too greatly benefit from college rankings India because the true picture of the strongest institutions emerges clearly and fairly.
        </p>
        <p className="mb-4">
          Sanskriti has improved its rankings, year over year, to arrive at a spot where it can confidently stand out in the list of top ranking universities in India. It has sustained a prime spot in the college rankings India thereby becoming a popular answer to student’s college search question. The list of private universities in India is bewilderingly long and Sanskriti had started at the bottom of the college ranking pyramid. Notably, the pace with which it has climbed up the private university rankings in India is promising and encouraging.
        </p>
        <p className="mb-4">
          A note of caution here is that the private university ranking in India can be misleading and often forged. Therefore, aspiring students should perform due diligence by checking the credentials of the issuer of the private university ranking in India or anywhere else for that matter. Moreover, the list of private colleges in Delhi NCR and across the nation, which have been ranked by a credible issuer, is not very long. Therefore it’s a wise college search strategy to witness the campuses first hand and talk to the alumni.
        </p>
      </section>
    </div>
  );
};

export default Rankings;
