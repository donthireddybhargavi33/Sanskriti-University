import React from 'react';
import {Link} from 'react-router-dom';
const Library = () => {
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
      <h1 className="text-3xl font-bold mb-4">Library</h1>
      <p className="mb-4">
        Library of the University is a treasure house of authentic and valuable information that support the educational and research needs. It facilitates learning and enrichment of knowledge. It serves the need for enhancement of quality of education. Ranked 5th In All India Best Infrastructure Category.
      </p>
      <p className="mb-4">
        The spacious library with requisite furniture and a reading room provides the right environment for students to enrich their knowledge by studying the books written by eminent authors - both national and international - and also by browsing reputed national and international journals, magazines, etc. The library is well-stacked with more than 1,00,000 books. It subscribes to approximately 50 Indian and 25 foreign journals apart from e-journals.
      </p>
      <p className="mb-4">
        Book bank facility is provided to the students through which each student gets requisite text books on all subjects according to the academic requirements of different semesters. This facility is in addition to the students' entitlement of books issued against library cards.
      </p>
      <p className="mb-4 font-semibold">
        Top emerging engineering college in UP
      </p>
      <p className="mb-4">
        All library books are barcoded. The users can find out the availability status of the books and other materials through the software - Online Public Access Catalog (OPAC).
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Digital Library</h2>
      <p className="mb-4">
        The users of the library enjoy the privilege of reading materials through this network also. It provides the facility of inter-connection of all libraries registered under DELNET scheme. This facilitates access to a wide range of book, journals, magazines, etc.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Library Photos</h2>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px' }}>
        <img src="/images/lib1.jpeg" alt="library1" style={{ width: '30%', borderRadius: '8px',marginLeft: '140px' }} />
        <img src="/images/lib2.jpeg" alt="library2" style={{ width: '30%', borderRadius: '8px' ,marginRight: '130px'}} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <img src="/images/lib3.jpeg" alt="library3" style={{ width: '30%', borderRadius: '8px',marginLeft: '140px' }} />
        <img src="/images/lib4.jpeg" alt="library4" style={{ width: '30%', borderRadius: '8px', marginRight: '130px'}} />
      </div>
    </div>
  );
};

export default Library;
