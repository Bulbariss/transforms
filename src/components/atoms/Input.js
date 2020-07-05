import React, { forwardRef } from "react";

const classes = "";

const Input = ({ className, ...props }, ref) => {
  return (
    <>
      <input {...props} className={`${classes} ${className}`} ref={ref} />
      <style jsx>{`
        input {
          vertical-align: middle;
          line-height: normal;
          height: 38px;
          padding: 6px 10px;
          /* The 6px vertically centers text on FF, ignored by Webkit */
          box-shadow: none;
          box-sizing: border-box;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Input);
