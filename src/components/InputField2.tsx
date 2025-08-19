import React, { useState } from "react";
import "./InputField.css";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  size?: "sm" | "md" | "lg";
  variant?: "filled" | "outlined" | "ghost";
}

const sizeMap = {
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
};

export const InputField2: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  type = "text",
  size = "md",
  variant = "outlined",
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="input-container relative">
      {label && <label className="input-label">{label}</label>}
      <div className="relative">
        <input
          type={type === "password" && show ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`input-base ${sizeMap[size]} variant-${variant}`}
        />
        {type === "password" && (
          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShow(!show)}
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>
    </div>
  );
};
