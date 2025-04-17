import React from "react";

function Input({ placeholder, type, onChange, value, className }) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      className={className}
    />
  );
}

export default Input;
