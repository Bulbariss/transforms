import React, { forwardRef } from "react";

const Textarea = (props, ref) => {
  return (
    <>
      <textarea
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        ref={ref}
        maxLength="180"
        rows="6"
        wrap="hard"
        className="h-64 w-full bg-grey-50 border-2 border-grey-400 focus:border-grey-600 rounded-md text-base"
        {...props}
      ></textarea>
      <style jsx>{`
        textarea::placeholder {
          color: #52606d;
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
          box-shadow: none;
          box-sizing: border-box;
          appearance: none;
          min-height: 100px;
        }

        textarea:focus {
          outline: 0;
        }
      `}</style>
    </>
  );
};

export default forwardRef(Textarea);
