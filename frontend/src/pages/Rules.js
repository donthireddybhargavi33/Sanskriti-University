import React from 'react';
import {Link} from 'react-router-dom';

const rulesData = [
  {
    sno: 1,
    topic: 'General Rules And Regulations',
    pdfLink: '/GeneralRulesAndRegulations.pdf',
  },
  {
    sno: 2,
    topic: 'Hostel Rule',
    pdfLink: '/HostelRule.pdf',
  },
  {
    sno: 3,
    topic: 'Mess Rule',
    pdfLink: '/MessRule.pdf',
  },
];

const Rules = () => {
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
      <h1 className="text-2xl font-bold mb-4">Rules And Regulations</h1>
      <div className="overflow-x-auto">
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' , flexDirection: 'column', alignItems: 'center' }}>
          <thead>
            <tr style={{ border: '1px solid #ddd', padding: '4px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>
              <th style={{ border: '1px solid #ddd', padding: '4px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>S.No.</th>
              <th style={{ border: '1px solid #ddd', padding: '4px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>Topic</th>
              <th style={{ border: '1px solid #ddd', padding: '4px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>Download PDF</th>
            </tr>
          </thead>
          <tbody>
            {rulesData.map((item) => (
              <tr key={item.sno} style={{ borderBottom: '1px solid #ddd',alignItems: 'center', justifyContent: 'center' }}>
                <td style={{ border: '1px solid #ddd', padding: '4px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{item.sno}</td>
                <td style={{ border: '1px solid #ddd', padding: '4px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{item.topic}</td>
                <td style={{ border: '1px solid #ddd', padding: '4px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                  <a
                    href={item.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rules;
