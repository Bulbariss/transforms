import React, { forwardRef } from "react";
import { selectOptions } from "./SelectOptions";

const Select = (props, ref) => {
  return (
    <select className="pr-4" ref={ref}>
      {selectOptions.map((k, i) => (
        <option value={k.value} key={i}>
          {k.value.split(",")[0]}
        </option>
      ))}
    </select>
  );
};

export default forwardRef(Select);
