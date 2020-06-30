import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function About() {
  return (
    <Layout>
      <SEO title="About" />
      <section>
        <div className="px-6 sm:px-10 lg:px-16 mx-auto pt-12 py-10 text-lg relative max-w-2xl text-muted-black">
          <h1 className="mb-4 text-4xl font-bold">About</h1>
          <h2 className="mb-4 text-2xl font-bold">What Are Cookies</h2>
          <p className="mb-6">
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or
            &apos;break&apos; certain elements of the sites functionality.
          </p>
          <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, You can contact
            us: test@test.com
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default About;
