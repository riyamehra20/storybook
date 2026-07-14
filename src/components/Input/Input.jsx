import React from 'react';

export function Input({
  label = 'Label',
  placeholder = 'Type something…',
  type = 'text',
  error = '',
  disabled = false,
  required = false,
}) {
  const inputId = React.useId();

  return (
    <div className="flex flex-col gap-1.5 w-72">
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        className={[
          'rounded-md border px-3 py-2 text-sm outline-none transition-colors',
          'bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100',
          'placeholder:text-gray-400',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-gray-800',
          error
            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
            : 'border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-brand focus:border-brand',
        ].join(' ')}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

export default Input;
