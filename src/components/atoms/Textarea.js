import React, { forwardRef } from "react";

const Textarea = (props, ref) => {
  return (
    <>
      <textarea
        ref={ref}
        maxLength="180"
        rows="6"
        wrap="hard"
        className="h-64 w-full bg-grey-50 border-2 border-grey-400 focus:border-grey-600 rounded-md"
        {...props}
      ></textarea>
      <style jsx>{`
        textarea::placeholder {
          color: #52606d;
          /* color: #3C4859; */
          line-height: 1.5;
        }

        textarea:-ms-input-placeholder {
          color: #52606d;
          line-height: 1.5;
        }

        textarea::-webkit-input-placeholder {
          color: #52606d;
          line-height: 1.5;
        }

        textarea {
          padding: 6px 10px;
          /* The 6px vertically centers text on FF, ignored by Webkit */
           {
            /* border: 2px solid #e2e5e8; */
          }
          box-shadow: none;
          box-sizing: border-box;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          min-height: 100px;
        }

        textarea:focus {
           {
            /* border: 2px solid #3e4c59; */
          }
          outline: 0;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Textarea);
