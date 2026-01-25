import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-primary-700 mb-2">
          {label}
        </label>
      )}
      <input
        id={id}
        className="w-full px-4 py-2 border border-primary-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-transparent"
        {...props}
      />
    </div>
  );
};
