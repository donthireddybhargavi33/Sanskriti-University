import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionProcess = ({ openApplyModal }) => {
  return (
    <div  style={{backgroundColor:'white'}} className="admission-process p-6 max-w-4xl mx-auto">
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
      <h1 className="text-3xl font-bold mb-6">Admission Procedure</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">I. Application Submission Procedure</h2>
        <p>Candidate intending to apply should first check his/her eligibility as per the eligibility conditions laid down for each programme.</p>
        <p>Depending upon his/her eligibility, he/she will submit the Application Form in the prescribed format.</p>
        <p>The submission of Application Form can be done online or in person:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>For online submission:</strong> He/she will have to register online using <span onClick={openApplyModal} style={{color: '#f7b500', cursor: 'pointer', textDecoration: 'underline'}}>this link</span>.</li>
          <li><strong>For offline submission:</strong></li>
        </ul>
        <p>He/she can download the application form using this link and deposit the duly filled up form along with the Registration fee at the following places:</p>
        <ul className="list-disc list-inside mb-4">
          <li>University Campus</li>
        </ul>
        <p>Candidate can also collect the Application form &amp; Prospectus @ Rs 1,200/- from the University Campus or from the Regional Offices.</p>
        <p>Candidate can also send a request by post, within India, to the University Campus along with a Bank Draft of Rs 1,250/- for collecting the Application Form along with Prospectus.</p>
        <p>Registration Fee of <code>10,000/-</code>, is to be submitted while submitting the application form. In case of online submission, online payment can be made. In case of offline submission, Bank Draft of the amount due, made in favour of ‘Sanskriti University’, Payable at Chhata, Mathura, Uttar Pradesh, is to be submitted along with duly filled application form.</p>
        <p>Candidate will have to give his/her preference for the programme, in which he/she wants to seek admission in the appropriate columns of the application form.</p>
        <p>In case the candidate opt for more than one programme in his/her preference in the application form, he/she will have to deposit the higher registration fees as applicable, out of the programmes opted in the preference list.</p>
        <p>The Registration Fees once deposited is non-refundable. The fees shall, however, be adjusted against the total fee to be deposited for the programme, if he/she is offered admission.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">II. Admission Offer Procedure</h2>
        <p>The candidate registered for a particular programme, after being examined of his/her eligibility, based on his merit and availability of seats, shall be sent an offer letter.</p>
        <p>Candidate will normally be given 15 days time to deposit the first Installment of fees.</p>
        <p>Candidate will be required to report for depositing the first Installment at any of the following places:</p>
        <ul className="list-disc list-inside mb-4">
          <li>At the University Campus.</li>
          <li>Or online.</li>
        </ul>
        <p>Candidate at the time of reporting should bring the following documents :-</p>
        <ul className="list-disc list-inside mb-4">
          <li>A Bank Draft of the amount indicated in the offer letter as first Installment.</li>
          <li><em>Admission Form (Hard Copy)</em> duly filled in &amp; signed by the Candidate &amp; Parent.</li>
          <li>Proof of Date of Birth.</li>
          <li>Certificate and Mark sheet of 10th &amp; 12th Examination.</li>
          <li>Certificate and Mark sheet of Graduation/Post Graduation, if applicable.</li>
          <li>Migration/Transfer Certificate.</li>
          <li>Conduct and Character Certificate from Head of the Institution from where the student passed the qualifying exam.</li>
          <li>Medical Fitness Certificate to be signed by a Registered Medical Practitioner holding a degree not lower than MBBS or equivalent.</li>
          <li>Aadhar Card.</li>
          <li>All Original documents for verification &amp; three Sets of Photo copies of all the above mentioned Documents.</li>
          <li>Color Passport Size Photos - Applicant (10)</li>
          <li>Color Passport Size Photos - Parent (04)</li>
          <li>An <em>undertaking</em> on the prescribed form attached with the Prospectus, in case the result of the qualifying examination has not been declared, duly signed by The Applicant &amp; Parent.</li>
        </ul>
        <p>On submission of the first Installment of fees and verification of documents in regard to fulfillment of eligibility conditions, the student will be given Provisional Admission in the programme.</p>
        <p>Candidate will be subsequently advised to report to the University on the day of commencement of the session for orientation, programme/course registration.</p>
        <p>Candidate will be required to deposit the balance fees before being allowed to attend classes.</p>
        <p>Candidate at the time of Course registration will bring Anti-ragging undertaking signed by him/her and the Parent. The formats of undertakings have to be downloaded from website <a href="http://www.antiragging.in" target="_blank" rel="noopener noreferrer">www.antiragging.in</a></p>
        <p><strong>Note:</strong> <em>Admission Forms &amp; Undertaking</em> are also available on the website. Hard copies, duly filled in are to be submitted.</p>
        <p>All fees to be deposited in the bank account of Sanskriti University Only</p>
      </section>
    </div>
  );
};

export default AdmissionProcess;
