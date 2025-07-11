import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IndianStatesAndCities } from '../data/locations';
import { useNavigate } from 'react-router-dom';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 580px;
  position: relative;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  font-size: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #aaa;
  transition: color 0.2s ease;

  &:hover {
    color: #333;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #1f1f1f;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.25rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  width: 100%;

  &:focus {
    border-color: #e0b100;
    outline: none;
    box-shadow: 0 0 0 3px rgba(224, 177, 0, 0.2);
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;

  &:focus {
    border-color: #e0b100;
    outline: none;
    box-shadow: 0 0 0 3px rgba(224, 177, 0, 0.2);
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.95rem;
  color: #333;

  input {
    margin-top: 4px;
  }
`;

const SubmitButton = styled.button`
  padding: 0.9rem;
  background-color: #e0b100;
  color: #1a1a1a;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #f2c200;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: #e63946;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

const ApplyNowModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    state: '',
    city: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [availableCities, setAvailableCities] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.state) {
      setAvailableCities(IndianStatesAndCities[formData.state] || []);
      setFormData((prev) => ({ ...prev, city: '' }));
    } else {
      setAvailableCities([]);
    }
  }, [formData.state]);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email is required.';
    if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter a valid 10-digit mobile number.';
    if (!formData.state) newErrors.state = 'Please select a state.';
    if (!formData.city) newErrors.city = 'Please select a city.';
    if (!formData.agree) newErrors.agree = 'You must agree to the terms.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch('/api/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Submission failed');

        closeModal();
        navigate('/application-received', {
          replace: true,
          state: { applicationId: data.id },
        });
      } catch (error) {
        setErrors({ submit: 'Submission failed. Please try again later.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={closeModal}>×</CloseButton>
        <Title>Apply Now</Title>
        <Form onSubmit={handleSubmit}>
          <div style={{ width: '90%' }}>
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
          </div>

          <div style={{ width: '90%' }}>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </div>

          <div style={{ width: '90%' }}>
            <Input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <ErrorText>{errors.mobile}</ErrorText>}
          </div>

          <div style={{ width: '90%' }}> 
            <Select style={{ width: '106%' }} name="state" value={formData.state} onChange={handleChange}>
              <option value="">Select State</option>
              {Object.keys(IndianStatesAndCities).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
            {errors.state && <ErrorText>{errors.state}</ErrorText>}
          </div>

          <div style={{ width: '90%' }}>
            <Select style={{ width: '106%' }} name="city" value={formData.city} onChange={handleChange}>
              <option value="">Select City</option>
              {availableCities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Select>
            {errors.city && <ErrorText>{errors.city}</ErrorText>}
          </div>

          <CheckboxContainer style={{ width: '90%' }}>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <span>I agree to the terms and conditions</span>
          </CheckboxContainer>
          {errors.agree && <ErrorText>{errors.agree}</ErrorText>}

          <SubmitButton style={{ width: '90%' }} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </SubmitButton>

          {errors.submit && <ErrorText style={{ textAlign: 'center' }}>{errors.submit}</ErrorText>}
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ApplyNowModal;
