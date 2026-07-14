import React from 'react';

const VARIANT_CLASSES = {
  primary:
    'bg-brand text-white hover:bg-brand-hover focus-visible:outline-brand',
  secondary:
    'bg-transparent text-brand border border-brand hover:bg-brand/10 focus-visible:outline-brand',
  danger:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600',
};

const SIZE_CLASSES = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-2.5',
};

export function Button({
  label = 'Button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        'rounded-md font-medium transition-colors',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-none',
        VARIANT_CLASSES[variant],
        SIZE_CLASSES[size],
      ].join(' ')}
    >
      {label}
    </button>
  );
}

export default Button;
