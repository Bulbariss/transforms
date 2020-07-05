import React, { forwardRef } from "react";

const STYLES = {
  default:
    "text-red-600 w-6 h-6 inline-flex justify-center items-center hover:bg-grey-400 rounded-md duration-100 transition-colors",
};

const CloseButton = ({ className, type, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`${STYLES[type]} ${className}`}
      {...props}
      aria-label="Close"
      type="button"
    >
      <svg
        viewBox="0 0 24 24"
        focusable="false"
        role="presentation"
        aria-hidden="true"
        className="h-3 w-3 text-black"
        stroke="red"
        strokeWidth="4px"
      >
        <line x1="2" y1="2" x2="22" y2="22" />
        <line x1="2" y1="22" x2="22" y2="2" />
      </svg>
    </button>
  );
};

export default forwardRef(CloseButton);
