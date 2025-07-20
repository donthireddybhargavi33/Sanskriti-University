import React from 'react';
import { Link } from 'react-router-dom';

const University = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
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
      <div className="flex flex-col lg:flex-row gap-8" style={{ paddingLeft: '50px' }}>
        {/* Left side content */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Sanskriti University -</h1>
          <h2 className="text-xl font-semibold mb-6">Best in class among emerging Private Universities in India</h2>
          <div className="mt-8 bg-black aspect-video rounded-lg overflow-hidden shadow-2xl border-4 border-sanskriti-gold/50">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Mn75BjeL6Sw?si=p2EtfXND63dZ6dxD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mb-4">
            Sanskriti University, set up in a serene environment with state of the art infrastructure, is delivering 360-degree holistic development of students. Sanskriti's intellectual capital comprises highly qualified and experienced faculty drawn from Industry as well as from Academia. A Curriculum tailored to the needs of the industry, coupled with the use of industry-leading pedagogies enables the students to transform themselves into job-ready resources. Sanskriti is committed to elevating itself to the status of top 10 private universities on all key parameters by delivering exceptional skill-based education by making incremental progress at a quick pace.
          </p>

          <p className="mb-4 italic text-gray-600">
            private university in up, top private universities in up, private universities in india, top 10 private universities, top private universities in india, best private universities, best private universities of up, private universities, private universities in up, best private university in up, university in up, top university in up
          </p>

          <div className="container mx-auto px-4 py-4 bg-gray-900 rounded-lg shadow-md mb-4">
            <p className="mb-4">
              The vision of the founding fathers of Sanskriti University, a group of eminent philanthropists, was instrumental in its phenomenal growth ever since it was established in the year 2016. Since its inception, it has been robustly growing in terms of the quality of students and education imparted to them. The Chancellor and the Pro-Chancellor are well-educated and enterprising young persons and their team has been working tirelessly to catapult Sanskriti University into the list of top private universities in India. Their efforts have enabled them to establish this university after duly getting it notified under U.P. State Act. In its vision statement, the university has outlined the plan of ensuring continuous growth in different fields of education with the ultimate aim of being recognized as one of the best private universities in India.
            </p>
          </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <img src="/images/sanskriti.webp" alt="University " style={{ width: '28%',marginLeft:'150px', borderRadius: '8px' }} />
        <img src="/images/sanskriti1.jpg" alt="University" style={{ width: '28%', marginRight:'150px', borderRadius: '8px' }} />
      </div>
          <p className="mb-4">
            Spread over an expansive area of more than 40 plus acres Green Campus on NH-2 Chhata, Mathura, Sanskriti University is just 57 km from Delhi NCR. The state-of-the-art infrastructure and architectural excellence help the University make a strong impression. The University has been established with an idea of bringing “Excellence in Life” to the students. Amidst the plethora of universities in Uttar Pradesh, Sanskriti University has made a mark of its own.
          </p>

          <p className="mb-4">
            Students can choose from a wide variety of programmes, whether it is Management, Commerce, Engineering, Education, Science, Indian Medicine, Para-medical, Agriculture or Arts, or other areas. Gone are the days when students used to choose just the mainstream fields to pursue their higher studies. Today they want to explore new horizons which is exactly what we encourage at Sanskriti University. Apart from knowledge in the classroom, students get additional learning through dedicated and well-equipped laboratories, industrial visits and co-curricular activities etc. The focus is on igniting the young minds so that they innovate and focus on research-based projects. Students can also take advantage of the library that has a wide selection of textbooks, journals, and reference books.
          </p>

          <p className="mb-4">
            At Sanskriti University, we are very strict about the selection of faculty members, thus ensuring that only the best teachers who are highly qualified, passionate, and dedicated are hired. The 400 plus faculty members bring with them a perfect amalgamation of competence, experience, and expertise to make sure that students get to the pinnacle of success. Admission of students is done on the basis of merit. Admission tests are conducted and students are enrolled in various programmes based on their merit and performance in these tests and/or interview, wherever applicable. Sanskriti University aims to generate an environment that fosters technology incubation and leads to effective R&D.
          </p>

          <p className="mb-4">
            Sanskriti believes in value based education which helps students become a better human being and do something constructive for the society. At Sanskriti University, we are committed to the cause of delivering world class education.
          </p>
        </div>
</div>
</div>

  );
};

export default University;
