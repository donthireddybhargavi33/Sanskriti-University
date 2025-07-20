
import React from 'react';
import {Link} from 'react-router-dom';

const feeData = [
  {
    specialization: 'B.Tech- CSE',
    duration: '4 Year',
    eligibility: 'Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/Biology/Technical Vocational subject/Computer Science/Information Technology/Informatics Practices/Agriculture/Engineering Graphics/ Business Studies. Obtained at least 50% marks (40% marks in case of candidates belonging to reserved category) in the above subjects taken together.',
    annualFee: '130000/-',
    semesterFee: '67000/-',
  },
  {
    specialization: 'B.Tech- Mechanical (ME)*',
    duration: '4 Year',
    eligibility: 'Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/Biology/Technical Vocational subject/Computer Science/Information Technology/Informatics Practices/Agriculture/Engineering Graphics/ Business Studies. Obtained at least 50% marks (40% marks in case of candidates belonging to reserved category) in the above subjects taken together.',
    annualFee: '130000/-',
    semesterFee: '67000/-',
  },
  {
    specialization: 'B.Tech- AI & ML*',
    duration: '4 Year',
    eligibility: 'Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/Biology/Technical Vocational subject/Computer Science/Information Technology/Informatics Practices/Agriculture/Engineering Graphics/ Business Studies. Obtained at least 50% marks (40% marks in case of candidates belonging to reserved category) in the above subjects taken together.',
    annualFee: '150000/-',
    semesterFee: '77000/-',
  },
  {
    specialization: 'B.Tech- Data Science & Business Analytics*',
    duration: '4 Year',
    eligibility: 'Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/Biology/Technical Vocational subject/Computer Science/Information Technology/Informatics Practices/Agriculture/Engineering Graphics/ Business Studies. Obtained at least 50% marks (40% marks in case of candidates belonging to reserved category) in the above subjects taken together.',
    annualFee: '150000/-',
    semesterFee: '77000/-',
  },
  {
    specialization: 'B.Tech- Cloud Computing & Cyber Security*',
    duration: '4 Year',
    eligibility: 'Passed 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry/ Biotechnology/Biology/Technical Vocational subject/Computer Science/Information Technology/Informatics Practices/Agriculture/Engineering Graphics/ Business Studies. Obtained at least 50% marks (40% marks in case of candidates belonging to reserved category) in the above subjects taken together.',
    annualFee: '170000/-',
    semesterFee: '87000/-',
  },
  {
    specialization: 'B.Tech- CSE (Lateral)*',
    duration: '3 Year',
    eligibility: 'Polytechnic with 50% Marks Or B.Sc Mathematics with 50% Marks.',
    annualFee: '130000/-',
    semesterFee: '67000/-',
  },
  {
    specialization: 'B.Tech- Mechanical (Lateral)*',
    duration: '3 Year',
    eligibility: 'Polytechnic with 50% Marks Or B.Sc Mathematics with 50% Marks.',
    annualFee: '130000/-',
    semesterFee: '67000/-',
  },
  {
    specialization: 'B.Tech- AI & ML (Lateral)*',
    duration: '3 Year',
    eligibility: 'Polytechnic with 50% Marks Or B.Sc Mathematics with 50% Marks.',
    annualFee: '150000/-',
    semesterFee: '77000/-',
  },
  {
    specialization: 'B.Tech- Data Science & Business Analytics(Lateral)*',
    duration: '3 Year',
    eligibility: 'Polytechnic with 50% Marks Or B.Sc Mathematics with 50% Marks.',
    annualFee: '150000/-',
    semesterFee: '77000/-',
  },
  {
    specialization: 'BCA- General',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '80000/-',
    semesterFee: '42000/-',
  },
  {
    specialization: 'BCA- AI & ML*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '110000/-',
    semesterFee: '57000/-',
  },
  {
    specialization: 'BCA- Data Science*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '110000/-',
    semesterFee: '57000/-',
  },
  {
    specialization: 'BCA- Cyber Security*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '110000/-',
    semesterFee: '57000/-',
  },
  {
    specialization: 'BCA- Cloud Computing & Cyber Security*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '120000/-',
    semesterFee: '62000/-',
  },
  {
    specialization: 'B.Com (Hons.)',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '60000/-',
    semesterFee: '32000/-',
  },
  {
    specialization: 'B.Com- Fin-Tech with AI*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '80000/-',
    semesterFee: '42000/-',
  },
  {
    specialization: 'BBA- General',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '80000/-',
    semesterFee: '42000/-',
  },
  {
    specialization: 'BBA- Logistics(AVAAN)*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '100000/-',
    semesterFee: '52000/-',
  },
  {
    specialization: 'BBA- Data Science & Artificial Intelligence*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '100000/-',
    semesterFee: '52000/-',
  },
  {
    specialization: 'BBA- Business Intelligence & Data Analytics*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '100000/-',
    semesterFee: '52000/-',
  },
  {
    specialization: 'BBA- E-Commerce & Digital Marketing*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in Best Four Subjects',
    annualFee: '100000/-',
    semesterFee: '52000/-',
  },
  {
    specialization: 'B.Sc- Hotel Management',
    duration: '3 Year',
    eligibility: '10+2 with 50% in any Stream.',
    annualFee: '60000/-',
    semesterFee: '32000/-',
  },
  {
    specialization: 'B.Ed',
    duration: '2 Year',
    eligibility: 'Graduate (Any Stream) with 50%',
    annualFee: '60000/-',
    semesterFee: '32000/-',
  },
  {
    specialization: 'B.Sc B.Ed',
    duration: '4 Year',
    eligibility: '10+2 with 50% in Humanities/Science',
    annualFee: '45000/-',
    semesterFee: '24500/-',
  },
  {
    specialization: 'BA B.Ed',
    duration: '4 Year',
    eligibility: '10+2 with 50% in Humanities/Science',
    annualFee: '45000/-',
    semesterFee: '24500/-',
  },
  {
    specialization: 'B.El.Ed*',
    duration: '4 Year',
    eligibility: '10+2 with 50% marks.',
    annualFee: '40000/-',
    semesterFee: '22000/-',
  },
  {
    specialization: 'B.Ed- Learning Disability (LD)*',
    duration: '2 Year',
    eligibility: 'As per RCI Norms, "(a) Candidates with at least fifty percent marks either in the Bachelors Degree and/or in the Masters degree in Sciences/ Social Sciences/ Humanities, Bachelor’s in Engineering or Technology with specialization in Science and Mathematics with 55 % marks or any other qualification equivalent thereto, are eligible for admission to the programme. (b) The reservation and relaxation for SC/ST/OBC/PWD and other categories shall be as per the rules of the Central Government/ State Government, whichever is applicable. "',
    annualFee: '70000/-',
    semesterFee: '37000/-',
  },
  {
    specialization: 'B.Ed- Visual Impairment (VI)*',
    duration: '2 Year',
    eligibility: 'As per RCI Norms, "(a) Candidates with at least fifty percent marks either in the Bachelors Degree and/or in the Masters degree in Sciences/ Social Sciences/ Humanities, Bachelor’s in Engineering or Technology with specialization in Science and Mathematics with 55 % marks or any other qualification equivalent thereto, are eligible for admission to the programme. (b) The reservation and relaxation for SC/ST/OBC/PWD and other categories shall be as per the rules of the Central Government/ State Government, whichever is applicable. "',
    annualFee: '70000/-',
    semesterFee: '37000/-',
  },
  {
    specialization: 'B.Ed- Intellectual Disability (ID)*',
    duration: '2 Year',
    eligibility: 'As per RCI Norms, "(a) Candidates with at least fifty percent marks either in the Bachelors Degree and/or in the Masters degree in Sciences/ Social Sciences/ Humanities, Bachelor’s in Engineering or Technology with specialization in Science and Mathematics with 55 % marks or any other qualification equivalent thereto, are eligible for admission to the programme. (b) The reservation and relaxation for SC/ST/OBC/PWD and other categories shall be as per the rules of the Central Government/ State Government, whichever is applicable. "',
    annualFee: '70000/-',
    semesterFee: '37000/-',
  },
  {
    specialization: 'B.Ed- Hearing Impairment (HI)*',
    duration: '2 Year',
    eligibility: 'As per RCI Norms, "(a) Candidates with at least fifty percent marks either in the Bachelors Degree and/or in the Masters degree in Sciences/ Social Sciences/ Humanities, Bachelor’s in Engineering or Technology with specialization in Science and Mathematics with 55 % marks or any other qualification equivalent thereto, are eligible for admission to the programme. (b) The reservation and relaxation for SC/ST/OBC/PWD and other categories shall be as per the rules of the Central Government/ State Government, whichever is applicable. "',
    annualFee: '70000/-',
    semesterFee: '37000/-',
  },
  {
    specialization: 'BNYS*',
    duration: '5.6 Year',
    eligibility: '10+2 With (PCB) as compulsory Subject, 50% marks',
    annualFee: '100000/-',
    semesterFee: '52000/-',
  },
  {
    specialization: 'BA- Fashion*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in any Stream.',
    annualFee: '50000/-',
    semesterFee: '27000/-',
  },
  {
    specialization: 'B.Sc- Nursing',
    duration: '4 Year',
    eligibility: '(10+2 with PCB Mark)',
    annualFee: '250000/-',
    semesterFee: '127000/-',
  },
  {
    specialization: 'B.Pharma',
    duration: '4 Year',
    eligibility: 'Passed 10+2 examination with English as one of the subjects and Physics, Chemistry, Mathematics (PCM) and/or Biology (PCB, PCMB) as optional subjects individually (as per PCI norms).',
    annualFee: '125000/-',
    semesterFee: '64500/-',
  },
  {
    specialization: 'B.Pharma(Lateral)',
    duration: '3 Year',
    eligibility: 'Passed D. Pharma. with 50%+ Marks .(As per PCI Norms)',
    annualFee: '135000/-',
    semesterFee: '69500/-',
  },
  {
    specialization: 'BA- General*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in any Stream.',
    annualFee: '40000/-',
    semesterFee: '22000/-',
  },
  {
    specialization: 'BA- Psychology (Hons.)*',
    duration: '3 Year',
    eligibility: '10+2 with 50% in any Stream.',
    annualFee: '60000/-',
    semesterFee: '32000/-',
  },
  {
    specialization: 'B.Sc- Agriculture (Hons.) - ICAR ACCREDITED',
    duration: '4 Year',
    eligibility: '10+2 with (PCM/PCB or Agriculture with 50%)',
    annualFee: '125000/-',
    semesterFee: '64500/-',
  },
  {
    specialization: 'BAMS',
    duration: '5.6 Year',
    eligibility: '10+2 examination with Physics, Chemistry, & Biology as compulsory subjects, having obtained minimum 50% marks in the above subjects taken together. Student Should qualify Neet Exam (as per NCISM/ Ayush/NEET/ norms).',
    annualFee: '-',
    semesterFee: '-',
  },
  {
    specialization: 'B.Sc- Cardiovascular Technology (CVT)*',
    duration: '3.6 Year',
    eligibility: '10+2 with PCB as compulsory with English, having minimum 50% marks.',
    annualFee: '75000/-',
    semesterFee: '39500/-',
  },
  {
    specialization: 'B.Sc - Rediology & Imaging Technology (RIT)*',
    duration: '3.6 Year',
    eligibility: '10+2 with PCB as compulsory with English, having minimum 50% marks.',
    annualFee: '90000/-',
    semesterFee: '47000/-',
  },
  {
    specialization: 'B.AOTT-Baccalaureate in Anesthesia and Operation Technology*',
    duration: '3.6 Year',
    eligibility: '10+2 with PCB as compulsory with English, having minimum 50% marks.',
    annualFee: '80000/-',
    semesterFee: '42000/-',
  },
  {
    specialization: 'BPT',
    duration: '4.6 Year',
    eligibility: '10+2 with PCB as compulsory with English, having minimum 50% marks.',
    annualFee: '90000/-',
    semesterFee: '47000/-',
  },
  {
    specialization: 'BMLS',
    duration: '3.6 Year',
    eligibility: '10+2 with PCB as compulsory with English, having minimum 50% marks.',
    annualFee: '90000/-',
    semesterFee: '47000/-',
  },
  // New postgraduate programmes appended below
  {
    specialization: 'M.Tech- CSE',
    duration: '2 Year',
    eligibility: 'B.Tech. with Minimum 55% marks in the relevant branch or 60% in MCA for Computer Science & Engineering.',
    annualFee: '70000/-',
    semesterFee: '37000/-',
  },
  {
    specialization: 'MCA',
    duration: '2 Year',
    eligibility: 'Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent Degree. OR passed B.Sc./ B.Com./ B.A. with Mathematics at l0+2 Level or at Graduation Level (with additional bridge Courses as per the norms of the concerned University). Obtained at least 50% marks (45% marks in case of candidates belonging to reserved category) in the qualifying Examination.',
    annualFee: '70000/-',
    semesterFee: '37000/-',
  },
  {
    specialization: 'MCA - AI & ML*',
    duration: '2 Year',
    eligibility: 'Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent Degree. OR passed B.Sc./ B.Com./ B.A. with Mathematics at l0+2 Level or at Graduation Level (with additional bridge Courses as per the norms of the concerned University). Obtained at least 50% marks (45% marks in case of candidates belonging to reserved category) in the qualifying Examination.',
    annualFee: '100000/-',
    semesterFee: '52000/-',
  },
  {
    specialization: 'MCA- Cloud Computing & Cyber Security*',
    duration: '2 Year',
    eligibility: 'Passed BCA/ Bachelor Degree in Computer Science Engineering or equivalent Degree. OR passed B.Sc./ B.Com./ B.A. with Mathematics at l0+2 Level or at Graduation Level (with additional bridge Courses as per the norms of the concerned University). Obtained at least 50% marks (45% marks in case of candidates belonging to reserved category) in the qualifying Examination.',
    annualFee: '115000/-',
    semesterFee: '59500/-',
  },
  {
    specialization: 'MBA- Dual Specialization',
    duration: '2 Year',
    eligibility: "Bachelor's degree (any discipline) with 50% marks in aggregate. Preference will be given to candidates who qualified CAT/ MAT/XMAT/NAT with good score.",
    annualFee: '160000/-',
    semesterFee: '82000/-',
  },
  {
    specialization: 'MBA - Agri Business (ABM)*',
    duration: '2 Year',
    eligibility: "Bachelor's degree (any discipline) with 50% marks in aggregate. Preference will be given to candidates who qualified CAT/ MAT/XMAT/NAT with good score.",
    annualFee: '150000/-',
    semesterFee: '77000/-',
  },
  {
    specialization: 'MBA -Business Analytics*',
    duration: '2 Year',
    eligibility: "Bachelor's degree (any discipline) with 50% marks in aggregate. Preference will be given to candidates who qualified CAT/ MAT/XMAT/NAT with good score.",
    annualFee: '160000/-',
    semesterFee: '82000/-',
  },
  {
    specialization: 'M.Ed',
    duration: '2 Year',
    eligibility: 'B.Ed with 50%',
    annualFee: '50000/-',
    semesterFee: '27000/-',
  },
  {
    specialization: 'M.Pharma - Pharmaceutics & Pharmaceutical Chemistrty',
    duration: '2 Year',
    eligibility: 'Passed B. Pharma with 50% marks .As per PCI Norms',
    annualFee: '100000/-',
    semesterFee: '52000/-',
  },
  {
    specialization: 'M.Sc- Biotech*',
    duration: '2 Year',
    eligibility: 'Graduate with sciecne 50% marks.',
    annualFee: '60000/-',
    semesterFee: '32000/-',
  },
  {
    specialization: 'MA- Psychology*',
    duration: '2 Year',
    eligibility: 'Graduate with 50% marks.',
    annualFee: '50000/-',
    semesterFee: '27000/-',
  },
  {
    specialization: 'M.Sc- Agronomy / Horticulture*',
    duration: '2 Year',
    eligibility: 'Graduation in relevant subject with 50%',
    annualFee: '70000/-',
    semesterFee: '37000/-',
  },
  {
    specialization: 'MPT - Orthopedics / Sports / Neurology / Pediatrics',
    duration: '2 Year',
    eligibility: 'BPT with 50% an Compulsory 6 month internship.',
    annualFee: '90000/-',
    semesterFee: '47000/-',
  },
  {
    specialization: 'MS- Shalya Tantra / Prasuti Tantra Evam Stree Rog',
    duration: '3 Year',
    eligibility: 'As per AIAPGET Norms',
    annualFee: '-',
    semesterFee: '-',
  },
];

const Fees = () => {
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
      <h1 className="text-2xl font-bold mb-4">Eligibility & Fee Structure</h1>
      <p className="mb-6">Commencement Year 2025</p>
      <div className="overflow-x-auto">
<table  style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' , flexDirection: 'column', alignItems: 'center'  }}>
  <thead >
    <tr style={{ borderBottom: '1px solid #ddd',alignItems: 'center', justifyContent: 'center' }}>
      <th className="border border-gray-900 px-4 py-2 text-left">Specialization</th>
      <th className="border border-gray-900 px-4 py-2 text-left">Duration</th>
      <th className="border border-gray-900 px-4 py-2 text-left">Eligibility</th>
      <th className="border border-gray-900 px-4 py-2 text-left">Annual Fee</th>
      <th className="border border-gray-900 px-4 py-2 text-left">Semester Fee</th>
    </tr>
  </thead>
  <tbody>
    {feeData.map((item, index) => (
      <tr key={index} style={{ borderBottom: '1px solid #ddd',alignItems: 'center', justifyContent: 'center' }} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
        <td className="border border-gray-900 px-4 py-2">{item.specialization}</td>
        <td className="border border-gray-900 px-4 py-2">{item.duration}</td>
        <td className="border border-gray-900 px-4 py-2 break-words">{item.eligibility}</td>
        <td className="border border-gray-900 px-4 py-2">{item.annualFee}</td>
        <td className="border border-gray-900 px-4 py-2">{item.semesterFee}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};


export default Fees;
