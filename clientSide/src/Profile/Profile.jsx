import React, { useState } from 'react';
import './Profile.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Profile = ({ userData, setUserData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '(123) 456-7890',
    budget:'$100',
  });

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveProfile = () => {
    setUserData(formData); // Assuming setUserData updates the user's data in the parent component or context
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="card-container">
          <img
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            alt="Profile"
            className="profile-image"
          />
          <p className="profile-name">{formData.name}</p>

          <button className="edit-profile-button" onClick={handleEditProfile}>
            {isEditing ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>

      <div className="main-container">
      

        <div className="info-container">
          <div className="info-content">
            {isEditing ? (
              <>
                <p>
                  <strong>Name:</strong>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="edit-input"
                  />
                </p>
                <p>
                  <strong>Email:</strong>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="edit-input"
                  />
                </p>
                <p>
                  <strong>Phone Number:</strong>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="edit-input"
                  />
                </p>
                <p>
                  <strong>Budget:</strong>
                  <input
                    type="email"
                    name="email"
                    value={formData.budget}
                    onChange={handleChange}
                    className="edit-input"
                  />
                </p>
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
                <p><strong>BudgetSpent:</strong>{formData.budget}</p>
              </>
            )}
          </div>
        </div>

        <div className="info-contain">
          <p><strong>Currency Details</strong></p>
          <ul className="expenses-list">
          <p> Please choose currency type </p>
          <select
               
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="INR">INR</option>
              </select>

          </ul>
        </div>

        
         
      </div>
      <div className="container">
  
  <div className="feedback-section">
  <p><strong>Note:</strong></p>
    <p>If you have any feedback or need assistance, feel free to contact us:</p>
    <p><strong>Email:</strong> support@example.com</p>
    <p><strong>Phone:</strong> (123) 456-7890</p>
    <p><strong>Address:</strong> 123 Main Street, City, Country</p>
    <p>We appreciate your feedback and are here to help!</p>
  </div>
</div>

      <div className="second-container">
        <div className='social-media'>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
</div>
      </div>
    </div>
  );
};

export default Profile;
