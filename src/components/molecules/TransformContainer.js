import React, { useContext } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function TransformContainer({ children }) {
  const store = useContext(appContext);

  return useObserver(() => (
    <>
      <div className="container flex justify-center items-center min-h-96 px-4 h-screen">
        {children}
      </div>
      <style>{store.containerCss}</style>
    </>
  ));
}

export default TransformContainer;
