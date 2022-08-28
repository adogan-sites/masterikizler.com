import React from "react";
import { useTranslate } from "react-polyglot";

import Layout from "../../containers/Layout/layout";
import Section from "../../containers/Section/index";
import ComBanner from "../../regions/Banners/ComBanner/index";
import MitBanner from "../../regions/Banners/MitBanner/index";
import VideoList from "../../regions/VideoList/index";
import WhyChooseUs from "../../regions/WhyCooseUs/index";

const Home = () => {
  const t = useTranslate();

  return (
    <Layout>
      <MitBanner />

      <Section
        title={t("our_services")}
        description={t("our_services.description")}
        whiteBackground={true}
      >
        <VideoList />
      </Section>

      <ComBanner />

      <Section title={t("why_choose_us")}>
        <WhyChooseUs />
      </Section>
    </Layout>
  );
};

export default Home;
