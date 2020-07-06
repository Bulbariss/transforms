import React, { useContext } from "react";
import { appContext } from "../store/Store";
import { useObserver } from "mobx-react-lite";
import css from "styled-jsx/css";

const styles = css`
  .front {
    background: hsla(237, 65%, 50%, 0.7);
    transform: translateZ(5rem);
  }
  .back {
    background: hsla(0, 65%, 50%, 0.7);
    transform: rotateY(180deg) translateZ(5rem);
  }
  .right {
    background: hsla(116, 52%, 50%, 0.7)
    transform: rotateY(90deg) translateZ(5rem);
  }
  .left {
    background: hsla(177, 65%, 50%, 0.7);
    transform: rotateY(-90deg) translateZ(5rem);
  }
  .top {
    background: hsla(278, 65%, 50%, 0.7);
    transform: rotateX(90deg) translateZ(5rem);
  }
  .bottom {
    background: hsla(319, 65%, 50%, 0.7);
    transform: rotateX(-90deg) translateZ(5rem);
  }
`;

function TransformCube() {
  const store = useContext(appContext);
  const faceCss =
    "flex items-center justify-center w-full h-full absolute text-6xl text-white";
  return useObserver(() => (
    <>
      <div
        className="item w-40 h-40"
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
        <style jsx>{styles}</style>
      </div>
      <style>{store.itemCss}</style>
    </>
  ));
}

export default TransformCube;
