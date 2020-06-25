import React, { useContext } from "react";
import { counterContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";

function TransformCube() {
  const store = useContext(counterContext);
  const faceCss =
    "flex items-center justify-center w-full h-full absolute text-6xl text-white";
  return useObserver(() => (
    <>
      <div
        className="cube item w-40 h-40"
        style={{
          transform: store.getString(),
        }}
      >
        <div className={`${faceCss} front`}>1</div>
        <div className={`${faceCss} back`}>2</div>
        <div className={`${faceCss} right`}>3</div>
        <div className={`${faceCss} left`}>4</div>
        <div className={`${faceCss} top`}>5</div>
        <div className={`${faceCss} bottom`}>6</div>
        <style jsx>{`
          .front {
            background: rgba(90, 90, 90, 0.7);
            transform: translateZ(5rem);
          }
          .back {
            background: rgba(0, 210, 0, 0.7);
            transform: rotateY(180deg) translateZ(5rem);
          }
          .right {
            background: rgba(210, 0, 0, 0.7);
            transform: rotateY(90deg) translateZ(5rem);
          }
          .left {
            background: rgba(0, 0, 210, 0.7);
            transform: rotateY(-90deg) translateZ(5rem);
          }
          .top {
            background: rgba(210, 210, 0, 0.7);
            transform: rotateX(90deg) translateZ(5rem);
          }
          .bottom {
            background: rgba(210, 0, 210, 0.7);
            transform: rotateX(-90deg) translateZ(5rem);
          }

          .cube {
            perspective: 550px;
            transform-style: preserve-3d;
          }
        `}</style>
      </div>
      <style>{store.itemCss}</style>
    </>
  ));
}

export default TransformCube;
