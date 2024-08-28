"use client";

import React, { forwardRef } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, name, type, placeholder }, ref) => (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
);

export default InputField;
