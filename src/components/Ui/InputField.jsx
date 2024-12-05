import React from "react";

const InputField = ({
  type,
  id,
  name,
  placeholder,
  register,
  validation,
  errors,
  className = "", // Default value for className is an empty string
}) => {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        {...register(name, validation)} // Register the input with react-hook-form
        className={`${className}`}
      />

      {/* Display validation error message if any */}
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default InputField;
