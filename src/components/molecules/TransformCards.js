import React, { useContext } from "react";
import TransformCard from "../atoms/TransformCard";
import { counterContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function TransformCards() {
  const store = useContext(counterContext);

  let padding = "";
  if (store.items.name) {
    padding = "p-4";
  }
  return useObserver(() => (
    <div className={`${padding} flex flex-wrap justify-center`}>
      {store.items.map((el) => (
        <TransformCard key={el.id} id={el.id} />
      ))}
    </div>
  ));
}

export default TransformCards;
