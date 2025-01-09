import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About the Club">
      <p>I made this bitch with Gatsby. -Kevin the Club Secretary</p>
      <StaticImage
        alt="Monash fencers posing, from left to right: Rhys, Daniel (with silver medal), Kevin (with gold medal), Chloe, and Warren (Club coach)"
        src="/Users/kevinnguyen/Downloads/34817541.jpg"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <title>About Me</title>;

export default AboutPage;
