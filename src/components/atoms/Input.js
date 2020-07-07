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
          box-shadow: none;
          box-sizing: border-box;
          appearance: none;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Input);
