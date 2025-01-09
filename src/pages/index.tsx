import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <div className="relative h-screen">
        {" "}
        {/* Relative container */}
        <StaticImage
          src="/Users/kevinnguyen/Downloads/34817541.jpg" // Relative path to your image in src/images
          alt="Fencing sketch"
          // layout="fill" // Important: Fills the parent container
          objectFit="contain" // Ensures the image covers the entire area
          className="absolute inset-0" // Positions the image absolutely within the container
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          {" "}
          {/* Overlay and content */}
          <div className="bg-white/75 p-8 rounded-lg ml-0.8 w-0.5">
            <h1 className="text-5xl font-bold text-center text-gray-800 mb-4">
              Monash University Fencing Club
            </h1>
            <p className="text-xl text-center text-gray-800">
              I'm making this by following the Gatsby Tutorial.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
