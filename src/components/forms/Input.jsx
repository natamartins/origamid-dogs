import React from 'react';

const Input = ({ label, type, name, onChange, value, error, onBlur }) => {
  return (
    <div className="wrapper">
      <label className="wrapper_label" htmlFor={name}>
        {label}
      </label>
      <input
        className="wrapper_input"
        type={type}
        id={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className="wrapper_error">{error}</p>}
    </div>
  );
};

export default Input;
