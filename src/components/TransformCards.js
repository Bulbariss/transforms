import React from "react";

function TransformCards({ list }) {
  const transformItems = list.map((el, key) => (
    <div className="h-20 w-40 rounded-l-lg" key={key}>
      <p className="text-lg font-bold">{el[0]}</p>
      <p className="">{el[1]}</p>
    </div>
  ));
  return (
    <>
      <div className="">{transformItems}</div>
    </>
  );
}

export default TransformCards;
