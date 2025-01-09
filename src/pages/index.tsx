import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Monash Fencers posing, from left to right: Rhys, Daniel (with silver medal), Kevin (with gold medal), Chloe, and Warren (Club coach)"
        src="/Users/kevinnguyen/Downloads/IMG_1837.jpeg"
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
