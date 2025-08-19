import React from "react";
import "./InputField.css";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
};

export const InputField1: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  variant = "outlined",
  size = "md",
}) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`input-base ${sizeMap[size]} variant-${variant} ${
          invalid ? "border-red-500" : ""
        }`}
        aria-invalid={invalid}
      />
      {helperText && !invalid && (
        <span className="helper-text">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="error-text">{errorMessage}</span>
      )}
    </div>
  );
};
