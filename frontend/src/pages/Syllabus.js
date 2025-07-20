import {Link} from 'react-router-dom';
const syllabusData = [
  {
    sn: 1,
    programName: 'Bachelor of Education',
    duration: '2 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 2,
    programName: 'Bachelor of Arts Bachelor of Education Integrated',
    duration: '4 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 3,
    programName: 'Bachelor of Science Bachelor of Education Integrated',
    duration: '4 Years',
    latestSyllabus: 'PCM',
    revisionInSyllabus: 'ZBC',
    posPsosCos: 'ZBC/PCM',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 4,
    programName: 'Master of Education',
    duration: '2 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 5,
    programName: 'Bachelor of Ayurveda and Medical Sciences',
    duration: '4 ½ Years+1 Year Internship',
    latestSyllabus: 'Professional-I',
    revisionInSyllabus: 'Professional-II',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 6,
    programName: 'B.Sc. Medical Laboratory Technology',
    duration: '3 Years+ ½ Year Internship',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 7,
    programName: 'Bachelor of Physiotherapy',
    duration: '4 Years+1 Year Internship',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 8,
    programName: 'Master of Physiotherapy',
    duration: '2 Years',
    latestSyllabus: 'Orthopedic',
    revisionInSyllabus: 'Neuro',
    posPsosCos: 'Sports',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 9,
    programName: 'Bachelor of Science Honours (Agriculture)',
    duration: '4 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: '',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '',
    posPsosCosLink: '#',
  },
  {
    sn: 10,
    programName: 'Master of Science-Agriculture (Agronomy)',
    duration: '2 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: '',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '',
    posPsosCosLink: '#',
  },
  {
    sn: 11,
    programName: 'Bachelor of Technology Computer Science Engineering',
    duration: '4 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 12,
    programName: 'M.Tech. (Computer Science)',
    duration: '2 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 13,
    programName: 'Bachelor of Computer Application',
    duration: '3 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 14,
    programName: 'Master of Computer Application',
    duration: '2 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 15,
    programName: 'Bachelor of Business Administration',
    duration: '3 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 16,
    programName: 'Master of Business Administration',
    duration: '2 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 17,
    programName: 'Bachelor of Commerce (P)',
    duration: '3 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 18,
    programName: 'Bachelor of Commerce (H)',
    duration: '3 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 19,
    programName: 'Bachelor of Science (Hotel Management)',
    duration: '3 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: 'View',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '#',
    posPsosCosLink: '#',
  },
  {
    sn: 20,
    programName: 'Bachelor of Pharmacy',
    duration: '4 Years',
    latestSyllabus: 'View',
    revisionInSyllabus: '',
    posPsosCos: 'View',
    latestSyllabusLink: '#',
    revisionInSyllabusLink: '',
    posPsosCosLink: '#',
  },
  {
    sn: 21,
    programName: 'Bachelor of Science Nursing',
    duration: '4 Years',
    latestSyllabus: '',
    revisionInSyllabus: '',
    posPsosCos: '',
    latestSyllabusLink: '',
    revisionInSyllabusLink: '',
    posPsosCosLink: '',
  },
];

const Syllabus = () => {
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
      <h1 style={{ marginBottom: '20px' }}>Syllabus Page</h1>
      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '800px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#0a183d', color: 'white' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>S. N.</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Program Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Duration</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Latest Syllabus</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Revision in Syllabus</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>POs, PSOs &amp; COs</th>
            </tr>
          </thead>
          <tbody>
            {syllabusData.map((item) => (
              <tr key={item.sn} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.sn}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.programName}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.duration}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  {item.latestSyllabusLink ? (
                    <a href={item.latestSyllabusLink} target="_blank" rel="noopener noreferrer" style={{ color: '#0a183d', fontWeight: '600' }}>
                      {item.latestSyllabus}
                    </a>
                  ) : (
                    item.latestSyllabus
                  )}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  {item.revisionInSyllabusLink ? (
                    <a href={item.revisionInSyllabusLink} target="_blank" rel="noopener noreferrer" style={{ color: '#0a183d', fontWeight: '600' }}>
                      {item.revisionInSyllabus}
                    </a>
                  ) : (
                    item.revisionInSyllabus
                  )}
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                  {item.posPsosCosLink ? (
                    <a href={item.posPsosCosLink} target="_blank" rel="noopener noreferrer" style={{ color: '#0a183d', fontWeight: '600' }}>
                      {item.posPsosCos}
                    </a>
                  ) : (
                    item.posPsosCos
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Syllabus;
