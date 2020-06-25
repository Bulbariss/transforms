import React, { useContext } from "react";
import { counterContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function TransformText() {
  const store = useContext(counterContext);
  return useObserver(() => (
    <>
      <img
        className="item rounded-lg w-auto h-1/2"
        style={{
          transform: store.getString(),
        }}
        src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
        alt="Woman paying for a purchase"
      />
      <style>{store.itemCss}</style>
    </>
  ));
}

export default TransformText;
