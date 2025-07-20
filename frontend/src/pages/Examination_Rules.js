import { Link } from 'react-router-dom';

const Examination_Rules = () => {
  return (
    <div style={{ padding: '20px', margin: '40px auto', backgroundColor:'white'}}>
      <Link
        to="/"
        style={{
          position: 'absolute',
           marginTop: '140px',
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
          zIndex: 1000,
        }}
      >
        Home
      </Link>
    <h1>Examination Rules</h1>

      <section>
        <h2>DEFINITIONS</h2>
        <p><strong>Academic Year:</strong> A period of nearly 12 months devoted to completion of requirements specified in the Scheme of Teaching and the related examinations.</p>
        <p><strong>Semester System:</strong> A programme wherein each academic year is apportioned into two semesters.</p>
        <p><strong>Course:</strong> A component of the academic programme, carrying a distinctive code no. and specific credits assigned to it.</p>
        <p><strong>External examiner:</strong> An examiner who is not in the employment of the University.</p>
        <p><strong>UEC:</strong> University Examination Committee.</p>
        <p><strong>COE:</strong> Controller of Examinations.</p>
      </section>

      
      <section>
        <h2>SCHEDULING OF EXAMINATION FOR VARIOUS PROGRAMMES</h2>
        <p>
          The University shall hold examinations for all such academic programmes as are approved by the Academic Council and as it may notify from time to time for awarding Bachelor’s/ Master’s Degrees, Under-Graduate/Post-Graduate Diplomas, as the case may be, as per the prescribed Schemes of Teaching & Examinations and Syllabi approved by the Academic Council.
        </p>
      </section>

      <section>
        <h2>ELIGIBILITY TO APPEAR IN THE EXAMINATION</h2>
        <p>
          Examinations of the University shall be open to regular students who have undergone a course of study in the University, for a period specified for that programme of study in the Scheme of Teaching & Examination and Syllabi.
        </p>
        <p>A student may be debarred from appearing in the Examinations. Attendance Criteria for taking Examinations is as follows:</p>
        <ul>
          <li>Attendance between 75% and 100% - Eligible to take the Examination</li>
          <li>Attendance between 60% to 74.99% - Only Vice-chancellor of the University may allow in very special cases.</li>
          <li>Those students who are not covered - Dean of the concerned Faculty shall announce the names of all such students who are not eligible to appear in a particular course(s).</li>
        </ul>
      </section>

      <section>
        <h2>ASSESSMENT/ EVALUATION</h2>
        <table border="1" cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Type of Evaluation</th>
              <th>Max. marks for which the exam is conducted</th>
              <th>Net Weightage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Term - I</td>
              <td>20 marks</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Term - II</td>
              <td>20 marks</td>
              <td>20%</td>
            </tr>
            <tr>
              <td>Quizzes / Assignment / Surprise Tests / Presentations / Seminars / Workshops / Any other Academic Activities related to the Programme.</td>
              <td>Each quiz will be conducted for a minimum of 20 marks and will be converted accordingly / In the form of a report, seminar, presentation, quiz, experiment, etc. as defined in the course syllabus/ course plan</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Attendance</td>
              <td></td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Term – III</td>
              <td>80 marks</td>
              <td>40%</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td>100 marks</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <p>Internal Component = 20%</p>
        <p>External Component = 80% (Term 1+ Term 2 + Term 3)</p>
      </section>

      <section>
        <h2>ATTENDANCE MARKS TABLE</h2>
        <table border="1" cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Attendance (in %)</th>
              <th>Marks Awarded</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1.</td><td>95% and above</td><td>10</td></tr>
            <tr><td>2.</td><td>90% and above, lessthan 95%</td><td>9</td></tr>
            <tr><td>3.</td><td>85% and above, lessthan  90%</td><td>8</td></tr>
            <tr><td>4.</td><td>80% and above, lessthan  85%</td><td>7</td></tr>
            <tr><td>5.</td><td>Above 75% ,  lessthan  80% </td><td>6</td></tr>
            <tr><td>6.</td><td>Equal to 75%</td><td>5</td></tr>
            <tr><td>7.</td><td>70% and above,  lessthan  75% </td><td>4</td></tr>
            <tr><td>8.</td><td>60% and above,lessthan 70% </td><td>3</td></tr>
          <tr><td>9.</td><td>Below 60%</td><td>0</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>DISTRIBUTION OF WEIGHTAGE</h2>
        <p>The distribution of weightage for various components of evaluation in Bachelor’s degree/Master’s degree shall be as under:</p>
        <h3>A. THEORY COURSES</h3>
        <ul>
          <li>(a) Term – I & Term - II: 20% + 20%</li>
          <li>(b) Term - III: 40%</li>
          <li>(c) Continuous evaluation by the teacher including Attendance: 20%</li>
        </ul>
        <h3>B. PRACTICAL/LABORATORY COURSES</h3>
        <ul>
          <li>(a) Term - III Practical Examination: 50%</li>
          <li>(b) Continuous evaluation by the teachers Including attendance: 40% + 10% = 50%</li>
        </ul>
      </section>

      <section>
        <h2>ABSENCE FROM AN EXAM</h2>
        <p>If a student fails to write any Quiz (due to ill-health or any valid/casual reason), no re-Quiz will be conducted and zero marks will be awarded for that quiz.</p>
        <p>If a student fails to write Term I or Term II Exam or both, those student will be given one chance to appear in only one make-up examination by paying the prescribed fees.</p>
        <p>Complete syllabus will be covered in the make-up examination conducted for Term I and Term II.</p>
      </section>

      <section>
        <h2>COPYING/ USE OF UNFAIR MEANS IN EXAMS</h2>
        <p>If a student indulges in copying or any use of unfair means in any of the either of Term Examinations written in that period shall deem to have been cancelled and zero marks will be awarded in the specific course.</p>
      </section>

      <section>
        <h2>PERUSAL/ RE-CHECKING OF EVALUATED ANSWER SCRIPTS</h2>
        <p>After evaluation of Term - I & Term - II Examination answer scripts, they will be shown to students by their respective course faculty. Any discrepancy will be corrected then and there.</p>
        <p>Students desirous of Re-Evaluation/rechecking / retotalling of their Term - III answer scripts have to apply to COE through Dean for the same within fifteen days from the date of publication of results by paying the prescribed fee.</p>
        <p>There is no provision for re-checking in case of Lab/Practical exams, Student Project viva-voce exam or Seminar/Design/Mini-project courses.</p>
      </section>

      <section>
        <h2>GRADING</h2>
        <p>The scores of all the assessments are added for conversion into a Letter Grade as follows:</p>
        <table border="1" cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Grade</th>
              <th>Qualitative Meaning</th>
              <th>Grade Point Attached</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A+</td><td>Outstanding</td><td>10</td></tr>
            <tr><td>A</td><td>Excellent</td><td>9</td></tr>
            <tr><td>B+</td><td>Very Good</td><td>8</td></tr>
            <tr><td>B</td><td>Good</td><td>7</td></tr>
            <tr><td>C+</td><td>Above Average</td><td>6</td></tr>
            <tr><td>C</td><td>Average</td><td>5</td></tr>
            <tr><td>D</td><td>Border Line</td><td>4</td></tr>
            <tr><td>F</td><td>Fail</td><td>0</td></tr>
            <tr><td>DE</td><td>Debarred from writing the SEE due to lack of attendance</td><td>0</td></tr>
            <tr><td>WH</td><td>Acts of indiscipline till the decision is arrived</td><td>0</td></tr>
            <tr><td>AB</td><td>Absent in SEE</td><td>0</td></tr>
            <tr><td>ACP</td><td>Audit Course Pass. Grades obtained are not considered in the calculation of CGPA or SGPA.</td><td>0</td></tr>
            <tr><td>ACF</td><td>Audit Course Fail. Grades obtained are not considered in the calculation of CGPA or SGPA.</td><td>0</td></tr>
          </tbody>
        </table>
      </section>
        <p>General guidelines for award of Grades are:</p>
        <ul>
          <li>Evaluation of different components of a Course Unit for each student shall be initially done in numerical marks.</li>
          <li>A Normal Class with a range of scores should be graded by a convenient method and should usually produce a fairly normal distribution of grades.</li>
          <li>Grading will be done on raw score awarded by the evaluator in all continuous assessment for Semester / Yearly based pattern.</li>
          <li>For award of D grade, the minimum percentage of marks shall not be less than 40% for UG & PG programmes and 35% for all diploma programmes.</li>
          <li>There is no boundation of scoring minimum marks in the Term I & Term – II Examinations but Student must score minimum of 30% in Term - III Examinations for scoring pass grade in the respective course.</li>
          <li>The results, if considered necessary, shall be moderated by a duly constituted Results Moderation Committee.</li>
          <li>The procedure for evaluation and award of grades for Project/Training /Seminar/ Comprehensive viva-voce shall be such as may be decided by the respective Board of Studies.</li>
        </ul>
        <p>Conversion of numerical marks into letter grades:</p>
        <table border="1" cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Grade</th>
              <th>Qualitative Value of Grade</th>
              <th>Minimum Percentage of marks for letter Grade for PG & UG Programmes</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>A+</td><td>Outstanding</td><td>Above 95</td></tr>
            <tr><td>A</td><td>Excellent</td><td>85 – 94</td></tr>
            <tr><td>B+</td><td>Very Good</td><td>75 – 84</td></tr>
            <tr><td>B</td><td>Good</td><td>65 – 74</td></tr>
            <tr><td>C+</td><td>Above Average</td><td>55 – 64</td></tr>
            <tr><td>C</td><td>Average</td><td>45 – 54</td></tr>
            <tr><td>D</td><td>Border Line</td><td>40 – 40 - 44 (For All UG & PG Programmes)</td></tr>
            <tr><td></td><td></td><td>35 - 44 (for All Diploma Programmes)</td></tr>
            <tr><td>F</td><td>Fail</td><td>Less than or equal to 39 (For UG & PG Programmes)</td></tr>
            <tr><td></td><td></td><td>Less than or equal to 34 (For Diploma Programmes)</td></tr>
          </tbody>
        </table>
        <p>In the case of Non-credit and Audit Courses which are not reckoned for assessment of SGPA and CGPA, the students shall be awarded "SC" (successfully completed) Grade for satisfactory performance and “NC” (not completed) Grade for unsatisfactory performance.</p>
        <p>The Semester performance of a student will be indicated as “Semester Grade Point Average (SGPA). The SGPA will be weighted average of Grade Points of all letter grades received by a student for all the Course units in the semester. The formula for Computing SGPA is given below:</p>
        <p><strong>SGPA = <br />
          (C₁G₁ + C₂G₂ + C₃G₃ + …) / (C₁ + C₂ + C₃ + …)</strong></p>
        <p>Where C1,C2,C3 denote credits associated with courses taken by the Student and G1,G2,G3 are the Grade Point of the letter grades awarded in the respective Course. An example of these calculations is given below:</p>

        <h3>FIRST SEMESTER :-</h3>
        <table border="1" cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Associated Course Unit Credits</th>
              <th>Grade Awarded</th>
              <th>Credits earned</th>
              <th>Grade Point</th>
              <th>Point Secured</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>MAL 101</td><td>4</td><td>C</td><td>4</td><td>5</td><td>20</td></tr>
            <tr><td>CSL 102</td><td>4</td><td>C</td><td>4</td><td>5</td><td>20</td></tr>
            <tr><td>PHP 103</td><td>4</td><td>A</td><td>4</td><td>9</td><td>36</td></tr>
            <tr><td>PHL 104</td><td>3</td><td>B+</td><td>3</td><td>8</td><td>24</td></tr>
            <tr><td>MEL 105</td><td>4</td><td>F</td><td>0</td><td>0</td><td>00</td></tr>
            <tr><td>AML 106</td><td>4</td><td>C</td><td>4</td><td>5</td><td>20</td></tr>
            <tr><td><strong>Total</strong></td><td>23</td><td>19</td><td>120</td></tr>
          </tbody>
        </table>
        <p>Total associated credits in the semester (total of column 2) = 23</p>
        <p>Earned credits in the semester (total of column 4) = 19</p>
        <p>Points secured in this semester (total of column 6) = 120</p>
        <p>Points secured in the semester (120)</p>
        <p><strong>SGPA = Points secured in the semester (120) / Credit Units in Courses appeared (23) = 5.22</strong></p>
        <p>CGPA is not applicable in first semester</p>

        <h3>SECOND SEMESTER :-</h3>
        <table border="1" cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Course code</th>
              <th>Associated Course  Credits</th>
              <th>Grade Awarded</th>
              <th>Credits earned</th>
              <th>Grade Point</th>
              <th>Point Secured</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>MAL 201</td><td>5</td><td>A+</td><td>5</td><td>10</td><td>50</td></tr>
            <tr><td>EEL 202</td><td>5</td><td>B</td><td>5</td><td>7</td><td>35</td></tr>
            <tr><td>CYL 203</td><td>5</td><td>C</td><td>5</td><td>5</td><td>20</td></tr>
            <tr><td>CYP 204</td><td>4</td><td>A</td><td>4</td><td>9</td><td>36</td></tr>
            <tr><td>MEL 205</td><td>4</td><td>B+</td><td>4</td><td>8</td><td>32</td></tr>
            <tr><td>AML 206</td><td>5</td><td>B</td><td>5</td><td>7</td><td>35</td></tr>
            <tr><td>HUL 207</td><td>3</td><td>F</td><td>0</td><td>0</td><td>00</td></tr>
            <tr><td><strong>Total</strong></td><td>31</td><td>28</td><td>44</td><td>208</td></tr>
          </tbody>
        </table>
        <p>Associated Credit Units in the semester (total of column 2) = 31</p>
        <p>Earned Units in the semester (total of column 4) = 28</p>
        <p>Cumulative points secured (total of points secured in 1st semester 120 and in II semester 208 ) = 328</p>
        <p><strong>SGPA = Points secured in II semester (208) / Credit Units of appeared courses in II semester (31) = 6.71</strong></p>
        <p><strong>CGPA = Cumulative points secured in all passed course in I & II Semester (328) / Cumulative Associated Credit Units in I & II semesters (54) = 6.07</strong></p>
        <p>In the case of Trimester or Annual system of evaluation of students performance,trimester grade points average (TGPA) or Annual Grade Points Average(AGPA) shall be assessed as per above guidelines .</p>
        <p>In final Grade Card will indicate Cumulative Grade Points Average (CGPA) which shall be calculated as above and shall be based only on Grade Points obtained in courses for which units have been earned.</p>

      <section>
        <h2>MINIMUM ACADEMIC REQUIREMENTS</h2>
        <p>The student must score a minimum Grade ‘D’ in each course unit.</p>
        <p>Minimum qualifying marks for all diploma programmes will be 35 and Undergraduate & Post Graduates programmes will be 40.</p>
        <p>The successful candidates shall be placed in Divisions as below :</p>
        <table border="1" cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>CGPA</th>
              <th>EQUIVALENT DIVISION</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>7.5 and above</td><td>First class with Distinction</td></tr>
            <tr><td>6.0 but less than 7.5</td><td>First Division</td></tr>
            <tr><td>5.0 but less than 6.0</td><td>Second Division</td></tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>MINIMUM & MAXIMUM DURATION OF ACADEMIC PROGRAMMES</h2>
        <p>The minimum & maximum period required for completion of a programme shall be as specified in the Scheme of Teaching and Examination and Syllabi for concerned programme and approved by the Competent Authorities of the University and also as prescribed by the Statutory Councils / Bodies.</p>
        <p>The maximum permissible period for completing a programme upto two academic years shall be n+1 academic year (two semesters) and for the programme of more than two academic years duration, the maximum permissible period shall be n+2 academic years (four semesters), where “n” represents the minimum duration of the programme.</p>
      </section>

      <section>
        <h2>CRITERIA FOR PASSING AND PROMOTION</h2>
        <p>A student shall be eligible for provisional promotion to the next academic year of study provided he/she has earned total 45% or more credits after rounding off to the next higher integer on the basis of the results of a particular academic year and in addition, he/she has earned CGPA of 4.5 or more. A student failing to satisfy this requirement shall have to repeat the entire academic year including the courses in which he/she has earned full credit after paying the prescribed fees.</p>
        <p>A student shall not be promoted to the third academic year of the program if he/she has not earned full credits of all the courses of first academic year, and, in addition satisfied the requirement under 1 above.</p>
        <p>A student shall not be promoted to the fourth academic year of the program if he/she has not earned full credits of all the courses of second academic year, and, in addition satisfied the requirement under 1 above.</p>
        <p>The maximum permissible period for completing a programme for which the prescribed programme duration is n semesters, shall be (n + 4) semesters for the programmes of the duration of three years or more than three years and (n + 2) semester for the programmes of the duration of two or less than two years. All the programme requirements shall have to be completed in (n + 4) / (n + 2) semesters, as the case may be.</p>
      </section>

      <section>
        <h2>AWARD OF DEGREE / DIPLOMA</h2>
        <p>A student shall be awarded a degree/diploma if:</p>
        <ul>
          <li>He /she has registered himself/ herself, undergone the entire programme of studies in any one of the University’s Schools of Studies and has successfully completed the same.</li>
          <li>There are no dues outstanding in his/her name to a School of the University; and no disciplinary action is pending against him/ her.</li>
        </ul>
      </section>

      <section>
        <h2>PROVISION FOR FAILED / DEBARRED / ABSENT / EXAM CANCELLED STUDENTS</h2>
        <p>If a student has been awarded F grade or absent in any of the theory or practical component or their Examination Cancelled due to any reason or ACF grade, he/she shall have to take the opportunity to take the examination with Odd and Even semester regular students. Internal awards will remain the same.</p>
        <p>Debarred students are required to re-register themselves by paying the prescribed fees for the course in which they have been debarred and will attend classes during the condensed semester to undertake the deficient studies. These student will be attached to the concerned faculty to take special classes or through self study under the faculty guidance to study the course and clear the all the examinations. Their Term - III Examination will be held after the completion of condensed semester.</p>
        <p>Special Supplementary Examination(SSE) will be announced for final year students. In exceptional circumstances, Vice-Chancellor may allow to conduct SSE for junior batches also.</p>
        <p>Theory component: The student shall take supplementary examination of 3 hours duration, of 100 marks, covering entire syllabus. All the other assessments of the student shall be used as regular result.</p>
        <p>Practical component: The student shall take practical supplementary examination of 50 marks, covering the entire list of practical, performed during the semester. All the internal assessments of the student shall be used as regular result.</p>
        <p>NOTE: Irrespective of the performance of the student in the re-appear / Special Supplementary examination, the maximum Grade awarded shall B Grade for each course.</p>
      </section>

      <section>
        <h2>UNFAIR MEANS</h2>
        <p>Writing name or putting signature or any other mark in the Answer Sheet which may disclose, in any way, the identity of the candidate or writing Roll No. in Answer Sheet at a place other than the space provided for it.</p>
        <p>Found sitting in a room or at a seat other than the allotted one without permission / knowledge of the Centre Superintendent.</p>
        <p>Having in his / her possession of book(s), notes, papers or any other like material connected with the examination, if open book system is not applicable.</p>
        <p>Receiving or giving assistance in copying or in any other form during the course of the examination.</p>
        <p>Smuggling in or out of the examination hall of Answer Sheet in whole or part or tampering with it in any way.</p>
        <p>Using abusive/derogatory language orally or in writing in the Answer Sheet against the Centre Superintendent /Examiner/Invigilator or threatening/using violence towards Centre Superintendent/ Invigilators.</p>
        <p>Impersonation, i.e. sending some other person to take the examination.</p>
        <p>Communicating with the examiner or any other person connected with the examination for favour.</p>
        <p>Any other type of misconduct or a deliberate previous arrangement to cheat in the examination.</p>
        <p>Writing questions and answers on any paper other than the Answer Sheet.</p>
        <p>Unethical and unlawful conduct with the faculty and staff involved in the conduct of examination.</p>
        <p>Any other case of Unfair Means detected at any stage during or after the examination.</p>

        <h3>Procedure for booking of cases of use of Unfair Means at the examination Centre</h3>
        <p><strong>Issuance of Second Answer Sheet</strong></p>
        <p>As soon as any case of unfair means comes to the notice of the Superintendent/ Invigilator of the examination centre, he shall take possession of the Answer Sheet of the candidate along with paper or other material found in his possession and provide the candidate with a second Answer Sheet immediately. On the top of the Answer Sheet it should be superscribed “Second Answer Sheet”. The Superintendent shall record on the first Answer Sheet the time when the case was brought to his notice. He shall also record the time on the second Answer Sheet when it was issued to the candidate.</p>

        <p><strong>Explanation of the candidate</strong></p>
        <p>While issuing the second Answer Sheet, the candidate shall be asked by the Centre Superintendent to submit his explanation in writing. In case the candidate refuses to give his statement, he should not be forced to do so, only the fact of his refusal should be recorded by the Invigilator(s) on duty at the time of occurrence and such a statement of the Invigilator(s) be attested by the Centre Superintendent.</p>

        <p><strong>Statement of the Invigilator</strong></p>
        <p>The Invigilator, who detects the use of UFM by a candidate, shall also record his statement which shall be verified and signed by the Centre Superintendent.</p>

        <p><strong>Material found from the candidate</strong></p>
        <p>As far as possible precise information as to from where the material was found (in the pocket, desk, shoes etc.) should be mentioned in the statement of the Invigilator(s). The copying material so detected by an Invigilator should also be signed by the Student and Invigilator and countersigned by the Centre Superintendent on each page and the total number of pages detected should be mentioned on the title of the Answer Sheet duly signed by the Invigilator and Centre Superintendent</p>

        <p><strong>Procedure to be followed in case of smuggling out an Answer Sheet</strong></p>
        <p>In case a candidate has smuggled out an answer Sheet, the Centre Superintendent should call for the candidate directly and try to secure the Answer Sheet. In case of non-availability of the Answer Sheet, the matter should be reported to the office of Controller of Examination along with the statement of the Invigilator present in the room and also of the candidate.</p>

        <p><strong>Other Cases of Unfair Means</strong></p>
        <p><strong>Impersonation</strong></p>
        <p>In case of impersonation, the Centre Superintendent should send to the Controller of Examination, the statement of the person found to be impersonating, the Invigilator(s) and the real candidate, if possible.</p>

        <p><strong>Documents required to be sent in UFM cases</strong></p>
        <p>All cases of UFM should be recorded in the prescribed form for reporting UFM cases. The form shall be accompanied by the following documents:</p>
        <ul>
          <li>First and/or second Answer Sheets</li>
          <li>Explanation of the candidate</li>
          <li>Statement of the Invigilator</li>
          <li>Incriminating material found from the student</li>
        </ul>
        <p>Invigilator(s) are not allowed to cancel or cut the answer sheet / answer(s) written by the students. He / she can only report to Centre Superintendent for the same.</p>
        <p>Submission of Unfair means cases</p>
        <p>A separate sealed cover should be sent to the office of Controller of Examination along with the prescribed Performa in each case booked daily under UFM with a covering Performa.</p>
      </section>


      </div>
  );
}
export default Examination_Rules;