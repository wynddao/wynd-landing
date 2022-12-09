import * as React from "react"
import Seo from "../components/Seo";
import HeroBanner from "../components/HeroBanner";
import Experience from "../components/Experience";
import Layout from "../layout";
import StartWynning from "../components/StartWynning";
import Community from "../components/Community";

const IndexPage = () => {
  return (
    <main>
      <Seo />
      <Layout>
        <HeroBanner />
        <Experience />
        <StartWynning />
        <Community />
      </Layout>
    </main>
  );
}

export default IndexPage;