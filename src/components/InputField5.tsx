import React from "react";
import "./InputField.css";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  theme?: "light" | "dark";
}

export const InputField5: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder,
  theme = "light",
}) => {
  return (
    <div
      className={`input-container ${
        theme === "dark" ? "bg-gray-800 text-white" : ""
      }`}
    >
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-base input-md ${
          theme === "dark"
            ? "bg-gray-700 text-white border-gray-600"
            : "variant-outlined"
        }`}
      />
    </div>
  );
};
