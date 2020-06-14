import React from "react";

function TransformCards({ heading, value }) {
  return (
    <div className="h-24 w-full md:w-56 rounded-lg bg-gray-400 m-2 px-4 py-2">
      <div className="flex justify-between">
        <p className="text-lg font-bold pb-2">{heading}</p>
        <button className="text-red-600">x</button>
      </div>
      {/* <p className="">{value}</p> */}
      <label className="" htmlFor="input-name">
        {/* <p className="pb-1">Your Name</p> */}
        <input
          className="w-full rounded-lg"
          type="text"
          placeholder={value}
          //   value={this.state.name}
          //   onChange={this.handleOnChange}
          //   onBlur={this.validateName}
        />
      </label>
    </div>
  );
}

export default TransformCards;
