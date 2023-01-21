import React, {useState} from "react"
import Seo from "../components/Seo";
import HeroBanner from "../components/HeroBanner";
import Experience from "../components/Experience";
import Layout from "../layout";
import StartWynning from "../components/StartWynning";
import Community from "../components/Community";
import Disclaimer from "../components/Disclaimer";

const IndexPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const checkDisclaimer = () => {
    if(localStorage.getItem('disclaimer')) {
      window.open('https://dex.wynddao.com/', '_blank').focus();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <main>
      <Seo />
      <Layout checkDisclaimer={checkDisclaimer}>
        <HeroBanner checkDisclaimer={checkDisclaimer} />
        <Experience />
        <StartWynning />
        <Community />
        <Disclaimer active={isModalOpen} checkDisclaimer={checkDisclaimer} setModalOpen={setModalOpen} />
      </Layout>
    </main>
  );
}

export default IndexPage;
