import { Link } from 'react-router-dom';

const academicCalendarData = [
  { date: "07.08.2024", details: "Commencement of Semester" },
  { date: "10.08.2024", details: "Meeting of IQAC" },
  { date: "14.08.2024 - 19.08.2024", details: "Immersion Programme" },
  { date: "21.08.2024", details: "Deeksharambh - 2024" },
  { date: "22.08.2024", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "05.09.2024", details: "Celebration of Teacher's Day" },
  { date: "28.09.2024", details: "Fresher's Welcome" },
  { date: "29.09.2024", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "30.09.2024", details: "Foundation Day" },
  { date: "26.10.2024", details: "Terminal I Examinations" },
  { date: "28.10.2024", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "30.10.2024 - 04.11.2024", details: "Industrial Visit" },
  { date: "11.11.2024", details: "Meeting of IQAC" },
  { date: "26.11.2024", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "28.11.2024 - 02.12.2024", details: "Terminal II Examinations" },
  { date: "01.12.2024", details: "Internal Complaints Committee Meeting" },
  { date: "December, 2024", details: "National Conference" },
  { date: "18.12.2024", details: "Commencement of Practical Exams" },
  { date: "26.12.2024 - 06.01.2025", details: "Terminal III Examinations" },
  { date: "26.12.2024", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "Semester Break (07.01.2025 - 14.01.2025)", details: "" },
  { date: "12.01.2025", details: "National Youth Day and Birth Anniversary of Swami Vivekananda" },
  { date: "15.01.2025", details: "Registration for Even Semester and Commencement of Semester for all Students" },
  { date: "16.01.2025", details: "IP Patent Workshop" },
  { date: "26.01.2025", details: "Celebration of Republic Day" },
  { date: "27.01.2025", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "Second Week of February 2025", details: "University Alumni Meet" },
  { date: "16.02.2025 & 17.02.2025", details: "National Conference" },
  { date: "17.02.2025", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "26.02.2025 - 04.03.2025", details: "Terminal-I Examination" },
  { date: "28.02.2025", details: "National Science Day" },
  { date: "First Week of March 2025", details: "Convocation (Tentative)" },
  { date: "05.03.2025 - 10.03.2025", details: "Industrial Visit" },
  { date: "II - III week", details: "Board of Studies Monthly review Meetings for all schools" },
  { date: "25.03.2025", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "25.03.2025 - 29.03.2025", details: "Terminal - II Examination" },
  { date: "27.03.2025", details: "Academic Council Meeting" },
  { date: "April, 2025", details: "National Conference" },
  { date: "06.04.2025", details: "Internal Complaint Committee Meeting" },
  { date: "22.04.2025", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "04.05.2025 - 09.05.2025", details: "Commencement of Practical Exams" },
  { date: "09.05.2025", details: "Meeting of IQAC" },
  { date: "10.05.2025", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "13.05.2025", details: "Semester End Exams for continuing Students" },
  { date: "01.06.2025 - 15.06.2025", details: "Faculty Development Programmes & Staff Development Programmes" },
  { date: "21.06.2025", details: "International Yoga day" },
  { date: "25.06.2025", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" },
  { date: "2nd and 3rd week of July, 2025", details: "Board of Studies Meetings" },
  { date: "25.07.2025", details: "Monthly Review Meeting of All Deans, HoD's, Registrar, Controller of Exams, Admission Cell, Finance, T&P and HR" }
];

const Academic_Calender = () => {
  return (
    <div style={{ padding: '20px',  margin: 'auto',backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{
        marginTop: '100px',
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
        top: '10px',
        left: '10px',
        zIndex: 1000
      }}>
        Home
      </Link>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Academic Calendar 2024-25</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#0a183d', color: 'white' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Details</th>
          </tr>
        </thead>
        <tbody>
          {academicCalendarData.map((item, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ border: '1px solid #ddd', padding: '8px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>{item.date}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Academic_Calender;
