import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IndianStatesAndCities } from '../data/locations';
import { useNavigate } from 'react-router-dom';
import { submitApplication } from '../services/api';
import { toast } from 'react-toastify';

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
  border-radius: 20px;
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 600px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.4s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.8rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #94a3b8;
  transition: all 0.2s ease;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #475569;
    background: #f1f5f9;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  color: #0a183d;
  margin-bottom: 2rem;
  font-family: 'Poppins', sans-serif;
  
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #e0b100;
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem 1.2rem;
  border: 2px solid #eef1f6;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  background: #f8fafc;

  &:focus {
    border-color: #e0b100;
    outline: none;
    box-shadow: 0 0 0 4px rgba(224, 177, 0, 0.1);
    background: #fff;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

const Select = styled.select`
  padding: 1rem 1.2rem;
  border: 2px solid #eef1f6;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  width: 100%;
  background: #f8fafc;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M8 10.5l-4-4h8l-4 4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1.2rem center;

  &:focus {
    border-color: #e0b100;
    outline: none;
    box-shadow: 0 0 0 4px rgba(224, 177, 0, 0.1);
    background-color: #fff;
  }
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  color: #475569;
  width: 90%;
  cursor: pointer;

  input {
    margin-top: 2px;
    width: 18px;
    height: 18px;
    border: 2px solid #e0b100;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #e0b100;
  color: #1a1a1a;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 90%;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    background-color: #f2c200;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(224, 177, 0, 0.2);

    &:before {
      left: 100%;
    }
  }

  &:disabled {
    background-color: #e2e8f0;
    color: #94a3b8;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorText = styled.p`
  color: #e11d48;
  font-size: 0.85rem;
  margin-top: 0.35rem;
  display: flex;
  align-items: center;
  gap: 4px;

  &:before {
    content: '⚠️';
    font-size: 0.9rem;
  }
`;

const ApplyNowModal = ({ onClose }) => {
  console.log('ApplyNowModal rendered with props:', { onClose: typeof onClose });
  
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
    console.log('Form submission started');
    e.preventDefault();
    
    const validationErrors = validate();
    console.log('Validation errors:', validationErrors);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Validation passed, proceeding with submission');
      setIsSubmitting(true);
      
      try {
        console.log('Calling API with data:', formData);
        const response = await submitApplication(formData);
        console.log('API Response:', response);
        
        console.log('Attempting to show success toast');
        toast.success('Application submitted successfully!');
        
        console.log('Attempting navigation');
        navigate('/application-received', { 
          replace: true,
          state: { applicationId: response.applicationId }
        });
        
        console.log('Attempting to close modal with onClose:', typeof onClose);
        if (typeof onClose === 'function') {
          onClose();
        } else {
          console.error('onClose is not a function!', onClose);
        }
      } catch (error) {
        console.error('Detailed submission error:', {
          error,
          message: error.message,
          stack: error.stack
        });
        toast.error(error.message || 'Failed to submit application');
        setErrors({ submit: error.message || 'Submission failed. Please try again.' });
      } finally {
        console.log('Submission process completed');
        setIsSubmitting(false);
      }
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
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
