import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TransformItems from "../components/TransformItems";
import DisplayTransforms from "../components/DisplayTransforms";
import ItemCss from "../components/molecules/ItemCss";
import ContainerCss from "../components/molecules/ContainerCss";

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" keywords={["CSS transforms", "transform-function"]} />
      <TransformItems />
      <DisplayTransforms />
      <section className="max-w-80 flex flex-col md:flex-row">
        <ContainerCss />
        <ItemCss />
      </section>
    </Layout>
  );
}

export default IndexPage;
