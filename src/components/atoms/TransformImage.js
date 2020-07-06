import React, { useContext } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import image from "../../images/image.jpg";

function TransformText() {
  const store = useContext(appContext);
  return useObserver(() => (
    <>
      <img
        className="item rounded-lg w-4/5 sm:w-auto h-auto sm:max-w-sm  md:max-w-md lg:max-w-lg"
        style={{
          transform: store.getString(),
        }}
        src={image}
        alt="Palm trees"
      />
      <style>{store.itemCss}</style>
    </>
  ));
}

export default TransformText;
