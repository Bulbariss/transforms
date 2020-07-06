import React, { forwardRef } from "react";
import { selectOptions } from "./SelectOptions";
import Arrow from "./arrow.svg";

const Select = (props, ref) => {
  return (
    <select
      className="w-full md:w-64 bg-grey-50 border-2 border-grey-400 focus:border-grey-600 rounded-md"
      {...props}
      ref={ref}
      style={{ backgroundImage: `url(${Arrow})` }}
    >
      {selectOptions.map((k, i) => (
        <option value={k.id} key={i}>
          {k.value}
        </option>
      ))}
      <style jsx>{`
        select {
           {
            /* background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
            no-repeat 95% 50%; */
          }
          background-repeat: no-repeat;
          background-position-x: 98%;
          background-position-y: 50%;
          -moz-appearance: none;
          -webkit-appearance: none;
          appearance: none;
          height: 38px;
          padding: 6px 10px;
          /* The 6px vertically centers text on FF, ignored by Webkit */
          box-shadow: none;
          box-sizing: border-box;
          vertical-align: middle;
          line-height: normal;
        }
      `}</style>
    </select>
  );
};

export default forwardRef(Select);
