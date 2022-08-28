import React from "react";
import { useTranslate } from "react-polyglot";
import Marquee from "react-fast-marquee";

import styles from "./index.module.scss";

import Section from "../../containers/Section";

import { useAppContext } from "../../hocs/withAppContext/index";

const Partners = () => {
  const t = useTranslate();
  const { referenceImages } = useAppContext();

  return (
    <Section
      whiteBackground={true}
      title={t("references")}
      description={t("references.description")}
    >
      <Marquee
        pauseOnHover={true}
        speed={100}
        gradientWidth={120}
        className={styles.Marquee}
      >
        {referenceImages.map((image, index) => (
          <div key={index} className={styles.Partner}>
            <img src={require(`../../../public/images/references/${image}`)} />
          </div>
        ))}
      </Marquee>
    </Section>
  );
};

export default Partners;
