import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IndianStatesAndCities } from '../data/locations';
import { useNavigate } from 'react-router-dom';
import { submitApplication } from '../services/api';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #0a183d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #142a5c;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const ApplyNowModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    state: '',
    city: '',
    course: '',
    message: ''
  });
  const [availableCities, setAvailableCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.state) {
      setAvailableCities(IndianStatesAndCities[formData.state] || []);
    } else {
      setAvailableCities([]);
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await submitApplication(formData);
      console.log('Success:', response);
      closeModal();
      navigate('/application-received');
    } catch (error) {
      console.error('Error submitting application:', error);
      setError(error.message || 'Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <h2>Apply Now</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            required
            value={formData.mobile}
            onChange={handleChange}
          />
          <Select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select State</option>
            {Object.keys(IndianStatesAndCities).map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </Select>
          <Select
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            disabled={!formData.state}
          >
            <option value="">Select City</option>
            {availableCities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </Select>
          <Input
            type="text"
            name="course"
            placeholder="Course of Interest"
            value={formData.course}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{ 
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Application'}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ApplyNowModal;
