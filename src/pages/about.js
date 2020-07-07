import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const transformsList = [
  {
    label: "matrix",
    desc: "six <number> values.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix",
  },
  {
    label: "matrix3d",
    desc: "sixteen <number> values.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d",
  },
  {
    label: "perspective",
    desc: "One <length> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d",
  },
  {
    label: "rotate",
    desc: "One <angle> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate",
  },
  {
    label: "rotate3d",
    desc: "Three <number> values and an <angle>.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d",
  },
  {
    label: "rotateX",
    desc: "One <angle> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateX",
  },
  {
    label: "rotateY",
    desc: "One <angle> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotateY",
  },
  {
    label: "scale",
    desc: "One or two <number> values.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale",
  },
  {
    label: "scale3d",
    desc: "Three <number> values.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale3d",
  },
  {
    label: "scaleX",
    desc: "One <number> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleX",
  },
  {
    label: "scaleY",
    desc: "One <number> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleY",
  },
  {
    label: "scaleZ",
    desc: "One <number> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleZ",
  },
  {
    label: "skew",
    desc: "One or two <angle> values.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew",
  },
  {
    label: "skewX",
    desc: "One <angle> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewX",
  },
  {
    label: "skewY",
    desc: "One <angle> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skewY",
  },
  {
    label: "translate",
    desc: "One or two <length-percentage> values.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate",
  },
  {
    label: "translate3d",
    desc: "Two <length-percentage> values and a <length>.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d",
  },
  {
    label: "translateX",
    desc: "One <length-percentage> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX",
  },
  {
    label: "translateY",
    desc: "One <length-percentage> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY",
  },
  {
    label: "translateZ",
    desc: "One <length-percentage> value.",
    link:
      "https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateZ",
  },
];

const inputList = [
  {
    label: "<number>",
    desc: "Integer or float, supports scientific notation.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/number",
  },
  {
    label: "<length>",
    desc: "Consists of a <number> followed by one length unit.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/length",
  },
  {
    label: "<angle>",
    desc: 'Consists of a <number> followed by "deg", "grad", "rad" or "turn"',
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/angle",
  },
  {
    label: "<percentage>",
    desc: 'Consists of a <number> followed by "%".',
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/percentage",
  },
  {
    label: "<length-percentage>",
    desc: "Either a <length> or a <percentage> value.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage",
  },
];

function About() {
  const transforms = transformsList.map((item) => {
    return (
      <li key={item["label"]} className="pb-2">
        <a
          href={item["link"]}
          target="_blank"
          rel="noreferrer"
          className="underline font-bold"
        >
          {item["label"]}
        </a>{" "}
        - {item["desc"]}
      </li>
    );
  });
  const inputs = inputList.map((item) => {
    return (
      <li key={item["label"]} className="pb-2">
        <a
          href={item["link"]}
          target="_blank"
          rel="noreferrer"
          className="underline font-bold"
        >
          {item["label"]}
        </a>{" "}
        - {item["desc"]}
      </li>
    );
  });

  return (
    <Layout>
      <SEO title="About" />
      <section>
        <div className="px-4 sm:px-10 mx-auto pt-12 py-10 text-lg relative max-w-2xl">
          <h1 className="mb-6 text-4xl font-bold">About</h1>
          <div>
            <h2 className="mb-4 text-2xl font-bold">What is this website?</h2>
            <p className="mb-6">
              I created this website as a playground for CSS transforms. You can
              get more info about them{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                here
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">
              Transform values reference
            </h3>
            <ul className="list-disc padding-inline-start mb-6">
              {transforms}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-2xl font-bold">Input type Reference</h4>
            <ul className="list-disc padding-inline-start mb-6">{inputs}</ul>
          </div>
          <div>
            <h5 className="mb-4 text-2xl font-bold">Contact Me</h5>
            <p className="mb-6">
              If you have any questions, you can contact me:{" "}
              <a href="mailto:name@email.com" className="underline">
                test@test.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
