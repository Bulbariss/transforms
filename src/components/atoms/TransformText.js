import React, { useContext } from "react";
import { counterContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function TransformText() {
  const store = useContext(counterContext);

  return useObserver(() => (
    <>
      <p
        className="text-4xl font-bold item"
        style={{
          transform: store.getString(),
        }}
      >
        Transform Me
      </p>
      <style>{store.itemCss}</style>
    </>
  ));
}

export default TransformText;
