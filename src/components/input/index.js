import React from 'react';

const Input = ({ input, placeholder, label, type, meta: { touched, error }
}) => (
  <div className='form-field'>
    <label className="form-label">{label}</label>
    <div className='form-input'>
      <input {...input} placeholder={placeholder} type={type} />
    </div>
    {touched &&
      ((error && <div className="error"><i className="fas fa-exclamation-triangle"></i> {error}</div>))}
    </div>
  );

  export default Input;
