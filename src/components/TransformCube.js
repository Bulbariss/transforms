import React from "react";

function TransformCube({ className }) {
  return (
    <div id="example-element" className={`transition-all ${className}`}>
      <div className="face front">1</div>
      <div className="face back">2</div>
      <div className="face right">3</div>
      <div className="face left">4</div>
      <div className="face top">5</div>
      <div className="face bottom">6</div>
      <style jsx>{`
        .face {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          position: absolute;
          backface-visibility: inherit;
          font-size: 60px;
          color: #fff;
        }
        .front {
          background: rgba(90, 90, 90, 0.7);
          transform: translateZ(50px);
        }
        .back {
          background: rgba(0, 210, 0, 0.7);
          transform: rotateY(180deg) translateZ(50px);
        }
        .right {
          background: rgba(210, 0, 0, 0.7);
          transform: rotateY(90deg) translateZ(50px);
        }
        .left {
          background: rgba(0, 0, 210, 0.7);
          transform: rotateY(-90deg) translateZ(50px);
        }
        .top {
          background: rgba(210, 210, 0, 0.7);
          transform: rotateX(90deg) translateZ(50px);
        }
        .bottom {
          background: rgba(210, 0, 210, 0.7);
          transform: rotateX(-90deg) translateZ(50px);
        }
        #example-element {
          width: 100px;
          height: 100px;
          perspective: 550px;
          transform-style: preserve-3d;
          transition: all 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}

export default TransformCube;
