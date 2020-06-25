import React, { useContext } from "react";
import { counterContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function TransformContainer({ children }) {
  const store = useContext(counterContext);

  return useObserver(() => (
    <>
      <div className="container flex justify-center items-center h-96 p-4">
        {children}
      </div>
      <style>{store.containerCss}</style>
    </>
  ));
}

export default TransformContainer;
