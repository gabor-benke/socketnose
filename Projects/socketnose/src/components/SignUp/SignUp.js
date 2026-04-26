import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {

  // Hooks for form data, error/success messages, and navigation

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    customer_name: '',
    address: '',
    phone: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showRequired, setShowRequired] = useState(false);
  const navigateSignIn = useNavigate();

  // Handle input changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  // Backend-et be kell állítani a HTTP-response-okra!
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Check if all fields are filled
    if (!formData.email || !formData.password || !formData.customer_name || !formData.address || !formData.phone) {
      setShowRequired(true);
      return;
    } else {
      setShowRequired(false);
    }

    try {

      const payload = {
        email: formData.email,
        password: formData.password,
        customer_name: formData.customer_name,
        address: formData.address,
        phone: formData.phone
      };

      const response = await axios.post('http://localhost:9090/sign-up', payload);

      if (response.status === 201 || response.status === 200) {
        setSuccess('Sign up successful!');
        setFormData({
          email: '',
          password: '',
          customer_name: '',
          address: '',
          phone: ''
        });
      } else {
        setError('Sign up failed. Please try again.');
      }
    }
    catch (error) {

      if (error.response) {
        const { status, data } = error.response;
      
        // Conflict - email already exists
        if (status === 409) {
          setError('This email address is already registered. Please use a different email or try to log in.');

        // Bad request with email-related error
        } else if (status === 400 && data?.message?.includes('email')) {
          setError(data.message || 'Invalid email address. Please check and try again.');

        // Unprocessable entity - validation errors
        } else if (status === 422) {
          setError(data.message || 'Please check your information and try again.');

        // Other server errors
        } else {
          setError('Sign up failed. Please try again later.');
        }
      

      // Network error
      } else if (error.request) {
        setError('Network error. Please check your connection and try again.');

      // Other errors
      } else {
        setError('An unexpected error occurred. Please try again.');
      }

      console.error(error);

    }
  };

  // useEffect to navigate to sign-in page on successful sign-up

  useEffect(() => {
    if (success === 'Sign up successful!') {
      navigateSignIn('/sign-in');
    }
  }, [success, navigateSignIn]);
 
  
  return (
    <div className="sign-up-container">
      <h1 className="sign-up-header">Sign up</h1>
      <h2 className="sign-up-subheader">Already have an account? Sign in <a className="sign-up-link" href="/sign-in">here</a>.</h2>
      {showRequired && <h3 className="all-required">All fields are required.</h3>}
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="email">E-Mail:<div className="red-asterisk">*</div></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:<div className="red-asterisk">*</div></label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="customer_name">Name:<div className="red-asterisk">*</div></label>
        <input
          type="text"
          id="customer_name"
          name="customer_name"
          value={formData.customer_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:<div className="red-asterisk">*</div></label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone:<div className="red-asterisk">*</div></label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;