import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I made this bitch with Gatsby. -Kevin the Club Secretary</p>
      <StaticImage
        alt="Two female foil fencers in close combat, one is standing high, attempting a parry, while the other is in a lunge, with her blade bent and on target."
        src="https://upload.wikimedia.org/wikipedia/commons/2/24/Final_2013_Fencing_WCH_FMS-IN_t200907.jpg"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <title>About Me</title>;

export default AboutPage;
