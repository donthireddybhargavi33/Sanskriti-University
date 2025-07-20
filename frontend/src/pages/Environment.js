import React from 'react';
import {Link} from 'react-router-dom';
const Environment = () => {
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
      <h1 className="text-3xl font-bold mb-6">Environment at Sanskriti</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <img src="/images/env3.jpeg" alt="Environment" style={{ width: '40%', borderRadius: '8px',marginLeft:'50px' }} />
        <img src="/images/env5.jpeg" alt="Environment " style={{ width: '40%', borderRadius: '8px', marginRight:'50px'}} />
      </div>
      <p className="mb-4">
        The environment at Sanskriti is very conducive for learning in a serene atmosphere.
      </p>
      <p className="mb-4">
        Infra-structural facilities for learning like computers, laboratories and libraries match the standards of premier educational establishments of India.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <img src="/images/env2.jpeg" alt="Environment" style={{ width: '40%', borderRadius: '8px',marginLeft:'50px' }} />
        <img src="/images/env4.jpeg" alt="Environment" style={{ width: '40%', borderRadius: '8px' ,marginRight:'50px'}} />
      </div>
      <p className="mb-4">
        The relationship between students and teachers is very cordial and every teacher plays the role of friend, philosopher and guide of the students. The endeavour of all members of the Sanskriti team is to make the students comfortable at his/her place of learning.
      </p>

      <p className="mb-4">
        Sanskriti believes in spreading education to different parts of the country and it boasts of having students from different states like Meghalaya, Arunachal Pradesh, Mizoram, Sikkim and neighboring countries like Nepal, Bhutan etc. Because of this combination of students from different states irrespective of caste, creed & culture, cosmopolitan culture prevails at Sanskriti. The students learn a lot from such cultural diversity.
      </p>
      <p className="mb-4">
        While strict regime is followed for academics, care is also taken for providing liberty to the students for unwinding and stress release. This is accomplished through music, sports & various extra-curricular activities.
      </p>
      <p className="mb-4">
        Mentoring system is in place at Sanskriti in which every faculty members takes care of the need of a group of students under him/her - about academics and beyond academics.
      </p>
            <img src="/images/env1.jpeg" alt="Environment" className="mb-6 rounded-lg shadow-lg" style={{ width: '100%', maxWidth: '600px' }} />
      <p className="mb-4">
        The campus is located in a pollution free area. Students, faculty members and staff can breathe fresh air at all times, which keeps them in healthy state of mind and physique.
      </p>
    </div>
  );
};

export default Environment;
