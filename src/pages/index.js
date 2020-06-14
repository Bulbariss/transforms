import React from "react";
// import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TransformItems from "../components/TransformItems";
import AddTransforms from "../components/AddTransforms";
import CustomCss from "../components/CustomCss";
// import BackgroundImage from "gatsby-background-image";

function IndexPage() {
  // const { image } = useStaticQuery(graphql`
  //   query {
  //     image: file(relativePath: { eq: "bg-hero.jpg" }) {
  //       sharp: childImageSharp {
  //         fluid {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);

  return (
    <Layout>
      <SEO title="" />
      <TransformItems />
      <AddTransforms />
      <CustomCss />
      {/* <BackgroundImage
        className="min-h-screen flex"
        Tag="section"
        fluid={image.sharp.fluid}
        fadeIn="soft"
      ></BackgroundImage> */}
    </Layout>
  );
}

export default IndexPage;
