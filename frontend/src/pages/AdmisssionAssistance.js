import React from 'react';
import {Link} from 'react-router-dom';
const AdmisssionAssistance = () => {
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
      <h1 className="text-3xl font-bold mb-6">Admission Assistance</h1>

      <section className="mb-6">
        <p>
          If application is approved, an offer of admission to the programme of choice will be sent via an email, followed by an official letter of admission.
        </p>
        <p>
          The letter of admission will be sent via courier. Details regarding payment of fees at the time of admission and date, time and venue for commencement of the academic session will be included in the admission letter.
        </p>
        <p>
          Offer of admission will be valid only for the particular programme opted by the candidate and for the academic session indicated by the student on the application form.
        </p>
        <p>
          Admission may be given provisionally. This will be specified in the letter.
        </p>
        <p>
          The offer of admission will automatically lapse if the conditions are not fulfilled within the specified time.
        </p>
        <p>
          Failure to pay the fee within the specified date or reporting for classes after specified date will result in cancellation of admission.
        </p>
      </section>
    </div>
  );
};

export default AdmisssionAssistance;
