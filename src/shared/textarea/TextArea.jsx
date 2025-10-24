import React from "react";
import "./TextArea.css";
const Textarea = ({ placeholder, value, onChange, error, className = "", ...props }) => {
  return (
    <div className="textarea-container">
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`custom-textarea ${error ? "textarea-error" : ""} ${className}`}
        {...props}
      />
      {error && <span className="textarea-error-message">{error}</span>}
    </div>
  );
};

export default Textarea;
