import React from 'react';
import {Link} from 'react-router-dom';
const Hostel = () => {
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
      <h1 className="text-3xl font-bold mb-6">Hostel Facility</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', marginBottom: '20px' }}>
        <img src="/images/hos.jpeg" alt="Hostel" style={{ width: '30%', borderRadius: '8px' ,marginLeft: '140px'}} />
        <img src="/images/hos1.jpeg" alt="Hostel" style={{ width: '30%', borderRadius: '8px' ,marginRight: '130px'}} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <img src="/images/hos2.jpeg" alt="Hostel" style={{ width: '30%', borderRadius: '8px',marginLeft: '140px' }} />
        <img src="/images/hos3.jpeg" alt="Hostel" style={{ width: '30%', borderRadius: '8px', marginRight: '130px' }} />
      </div>
      <p className="mb-4">
        It is rightly said that a hostel is a home away from home. For hostellers, their rooms become their small world. Necessary measures are taken to ensure the cleanliness and safety of all the hostels. The hostel service is student friendly and gives them a feeling of being at home.
      </p>
      <p className="mb-4">
        The University is providing hostel facilities to the students who join the University from different parts of the country and from overseas for pursuing their studies. There are separate hostels for boys and girls.
      </p>
      <p className="mb-4">
        The University takes special care about maintenance of the hostels as it understands that a hostel is like a home away from home for the students. Hence, necessary steps are taken to ensure that the facilities provided in the hostels are as much student-friendly as possible.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">CAMPUS SAFETY</h2>
      <p className="mb-4">
        Sanskriti University has taken strict measures to ensure the safety of its students, faculty members and the staff:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Sanskriti campus including hostels is secured by high boundary wall with barbed wire to prevent unauthorized entries.</li>
        <li>The campus has only one entry gate manned 24x7 by armed security guards.</li>
        <li>Bags and belongings of the students and the visitors are checked manually by the guards.</li>
        <li>Metal detector is also provided at the entrance.</li>
        <li>Electronic register is maintained for all visitors and unknown entrants at the entry point. Details of visitors along with their identification proof and contact numbers are examined and recorded in the electronic register at the entrance.</li>
        <li>CCTV cameras are provided at strategic points within the campus.</li>
        <li>Canteen, mess etc. are closely monitored and necessary action is taken whenever required.</li>
        <li>Students are provided ID cards and displaying of such cards in the campus is compulsory.</li>
        <li>Special security arrangements are made at girls’ hostel. No male is allowed to enter the girls’ hostel. Girl students are not allowed to leave/enter the hostel after specified hours.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">HANGOUT PLACES</h2>
      <p className="mb-4">
        It has been perennially found that the students' community flocks together in groups amongst classmates and other friends after routine classes for unwinding. Such meetings/get-togethers help in breaking the monotony of back-to-back classroom lectures attended during the day. Also, meeting at hang-outs gives the students an opportunity to refresh themselves in a group and, as the proverb goes, ‘raising storm over a cup of tea’ on various divergent topics ranging from art and culture to sports, music, politics etc.
      </p>
      <p className="mb-4">
        These meeting points are typically known as “hang-outs” where the students want to spend as much time as they can - for both enjoyment and unwinding/release of stress.
      </p>
      <p className="mb-4">
        The students of Sanskriti are no different and, at leisure time, they also wish to hang-out:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Within the campus premises in canteen</li>
        <li>At malls and other shopping centers in the town of Mathura.</li>
      </ul>
      <p className="mb-4">
        The University canteen is a well-designed, well-decorated place within the campus that has chairs and tables laid out in a systematic pattern where the students can comfortably sit, talk and enjoy delicious food. The kitchen area is always kept clean and the foods prepared are hygienic and tasty. The complex is spacious, air-conditioned and well-illuminated.
      </p>
      <p className="mb-4">
        Off-campus hang-outs: Occasionally, the students are found to visit Highway Plaza (on Agra-Mathura Highway NH-2) where popular restaurants like Cafe Coffee Day, Pizza Hut, and Dominos etc. are located. Besides these popular restaurants, the shopping mall located at Highway Plaza and other places are also visited by the students either for window shopping or for genuine purchases.
      </p>
      <p className="mb-4">
        Spacious rooms with necessary furniture for taking rest/sleeping as well as studying are provided to the students.
      </p>
      <p className="mb-4">
        Air-conditioned and non air-conditioned rooms are available for both boys and girls.
      </p>
      <p className="mb-4">
        24X7 Power back-up facility is available in every hostel and round-the-clock security arrangement is in place in all the hostels.
      </p>
      <p className="mb-4">
        The students are required to maintain discipline at all times and are not allowed to leave the hostel without prior permission of the competent authority.
      </p>
      <p className="mb-4">
        Rules related to different matters concerning the hostels are recorded in the hostel manual and the students are advised to ensure strict compliance of the rules. Regular supervision of the hostels is being carried out by the hostel supervisors. As far as discipline is concerned, the rule of ‘zero tolerance’ is strictly followed. The hostel administration ensures that all works are attended to as per the check list on routine maintenance and cleanliness.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Hostel Charges :</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">Boys</h3>
      <table className="table-auto border-collapse border border-gray-400 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">AC Room</th>
            <th className="border border-gray-400 px-4 py-2">Annual Fee</th>
            <th className="border border-gray-400 px-4 py-2">Non AC Room Type</th>
            <th className="border border-gray-400 px-4 py-2">Annual Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">2 seater</td>
            <td className="border border-gray-400 px-4 py-2">1,60,300/-</td>
            <td className="border border-gray-400 px-4 py-2">2 seater</td>
            <td className="border border-gray-400 px-4 py-2">1,20,800/-</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">3 seater</td>
            <td className="border border-gray-400 px-4 py-2">1,34,300/-</td>
            <td className="border border-gray-400 px-4 py-2">3 seater</td>
            <td className="border border-gray-400 px-4 py-2">1,00,800/-</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">3 seater Executive</td>
            <td className="border border-gray-400 px-4 py-2">2,15,800/-</td>
            <td className="border border-gray-400 px-4 py-2">3 seater Executive</td>
            <td className="border border-gray-400 px-4 py-2">1,45,800/-</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">3 seater Premium</td>
            <td className="border border-gray-400 px-4 py-2">2,25,000/-</td>
            <td className="border border-gray-400 px-4 py-2">2 seater Premium</td>
            <td className="border border-gray-400 px-4 py-2">2,00,000/-</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">2 seater Premium</td>
            <td className="border border-gray-400 px-4 py-2">2,50,000/-</td>
            <td className="border border-gray-400 px-4 py-2">4 Seater</td>
            <td className="border border-gray-400 px-4 py-2">95,800/-</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl font-semibold mt-4 mb-2">Girls</h3>
      <table className="table-auto border-collapse border border-gray-400 mb-6">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">AC Room</th>
            <th className="border border-gray-400 px-4 py-2">Annual Fee</th>
            <th className="border border-gray-400 px-4 py-2">Non AC Room Type</th>
            <th className="border border-gray-400 px-4 py-2">Annual Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">2 seater</td>
            <td className="border border-gray-400 px-4 py-2">1,60,300/-</td>
            <td className="border border-gray-400 px-4 py-2">2 seater</td>
            <td className="border border-gray-400 px-4 py-2">1,20,800/-</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">3 seater</td>
            <td className="border border-gray-400 px-4 py-2">1,34,300/-</td>
            <td className="border border-gray-400 px-4 py-2">3 seater</td>
            <td className="border border-gray-400 px-4 py-2">1,00,800/-</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">3 seater Executive</td>
            <td className="border border-gray-400 px-4 py-2">2,15,800/-</td>
            <td className="border border-gray-400 px-4 py-2">3 seater Executive</td>
            <td className="border border-gray-400 px-4 py-2">1,45,800/-</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">2 seater Executive</td>
            <td className="border border-gray-400 px-4 py-2">2,10,000/-</td>
            <td className="border border-gray-400 px-4 py-2">2 seater Executive</td>
            <td className="border border-gray-400 px-4 py-2">1,60,000/-</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl font-semibold mt-4 mb-2">Other Charges</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Caution Money fee of Rs. 5000/-in the first year of the programme (to be paid once and will be refunded after the completion of the course).</li>
        <li>Examination Form Fees Rs. 250/ Rs. 500 for programme having semester wise/ yearly wise exams.</li>
        <li>Hostel Security in the first year of the course 5000/ ( refundable on the vacation of the hostel on successful completion of the course).</li>
        <li>AC Premium/Executive Hostel Rs.10,000/- First year of the course (refundable upon vacating the Hostel after successful completion of the course.</li>
        <li>Hostel Management System: Rs.600/- per year (only for Hostelers)</li>
        <li>Sanskriti Youth Club Fees: Rs. 1,000/- per annum for all students.</li>
        <li>Alumni Association Fee: Rs. 1,000/- Charged in the final year only.</li>
        <li>Convocation Fee: Rs. 4,000/-</li>
        <li>Migration & Degree Fees: To be paid in the final year of the course</li>
        <li>Insurance Charges: Rs. 200/- per year.</li>
      </ul>
      <p className="mb-4">
        Note:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Rooms in the hostel will be allotted on first-come-first- serve basis.</li>
        <li>UGC Norms will be adhered for fee refund.</li>
        <li>Electricity in the AC hostel will be on a prepaid basis (additional charges).</li>
        <li>Students staying back during vacations will have to pay Rs. 5,000/- per month (without mess).</li>
        <li>Hostel availability is subject to charge as per university norms.</li>
        <li>Hostel fees once paid are non-refundable and non -adjustable.</li>
        <li>No refund will be considered even if students vacate the hostel during the middle of the academic year.</li>
      </ul>
    </div>
  );
};

export default Hostel;
