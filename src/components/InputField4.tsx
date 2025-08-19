import React from "react";
import "./InputField.css";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  loading?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "input-sm",
  md: "input-md",
  lg: "input-lg",
};

export const InputField4: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder,
  loading,
  size = "md",
}) => {
  return (
    <div className="input-container relative">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={loading}
        className={`input-base ${sizeMap[size]} variant-outlined`}
      />
      {loading && (
        <span className="absolute right-2 top-2 text-gray-400 text-xs">
          Loading...
        </span>
      )}
    </div>
  );
};
