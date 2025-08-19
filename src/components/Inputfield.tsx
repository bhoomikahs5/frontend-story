import React, { useState } from "react";
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
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}

      <div className="input-container">
        <input
          type={type === "password" && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`input-field input-${size} input-${variant} 
            ${disabled ? "input-disabled" : ""} 
            ${invalid ? "input-invalid" : ""}`}
          aria-invalid={invalid}
        />

        {/* Password toggle */}
        {type === "password" && (
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}

        {/* Clear button */}
        {clearable && value && (
          <button
            type="button"
            className="clear-btn"
            onClick={() => onChange?.({ target: { value: "" } } as any)}
          >
            ✕
          </button>
        )}

        {/* Loading spinner */}
        {loading && <span className="clear-btn">⏳</span>}
      </div>

      {helperText && !invalid && (
        <span className="input-helper">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="input-error">{errorMessage}</span>
      )}
    </div>
  );
};
