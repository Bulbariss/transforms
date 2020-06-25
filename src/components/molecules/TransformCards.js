import React, { useContext } from "react";
import TransformCard from "../atoms/TransformCard";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function TransformCards() {
  const store = useContext(appContext);

  return useObserver(() => {
    if (store.items.length > 0) {
      return (
        <div className="p-4 flex flex-wrap justify-center">
          {store.items.map((el) => (
            <TransformCard key={el.id} id={el.id} />
          ))}
        </div>
      );
    } else {
      return null;
    }
  });
}

export default TransformCards;
