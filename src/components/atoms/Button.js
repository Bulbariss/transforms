import React, { forwardRef } from "react";

const STYLES = {
  pill: "font-bold w-24 h-8 rounded-lg",
  classic: "classic font-bold whitespace-no-wrap",
};

const Button = ({ children, className, type, ...props }, ref) => {
  return (
    <>
      <button
        ref={ref}
        className={`${STYLES[type]} ${className} transition-colors duration-100`}
        {...props}
      >
        {children}
      </button>
      <style jsx>{`
        .classic {
          border-radius: 5px;
          padding: 0.5rem 0.9rem;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Button);
