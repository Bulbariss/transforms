import React from "react";
import TransformCard from "../atoms/TransformCard";

function TransformCards({ list }) {
  let padding = "";
  if (list[0]) {
    padding = "p-4";
  }
  const transformItems = list.map((el, key) => (
    <TransformCard key={key} heading={el[0]} value={el[1]} />
  ));
  return (
    <div className={`${padding} flex flex-wrap justify-center`}>
      {transformItems}
    </div>
  );
}

export default TransformCards;
