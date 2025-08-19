import React from "react";
import "./InputField.css";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outlined" | "ghost";
  onClear?: () => void;
}

const sizeMap = {
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
};

export const InputField3: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  size = "md",
  variant = "outlined",
  onClear,
}) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <div className="relative">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input-base ${sizeMap[size]} variant-${variant}`}
        />
        {value && onClear && (
          <button type="button" className="clear-btn" onClick={onClear}>
            ✕
          </button>
        )}
      </div>
    </div>
  );
};
