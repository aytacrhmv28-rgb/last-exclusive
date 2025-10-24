import React from 'react';
import './TextField.css';

const TextField = ({ label, type = 'text', placeholder, value, onChange, error, ...props }) => {
  return (
    <div className="textfield-container">
      {label && <label className="textfield-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`textfield-input ${error ? 'textfield-error' : ''}`}
        {...props}
      />
      {error && <span className="textfield-error-message">{error}</span>}
    </div>
  );
};

export default TextField;
