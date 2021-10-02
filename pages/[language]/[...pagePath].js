import React from "react";

import Home from "../../components/pages/Home/index";

import config from "../../configs/settings.json";

import { getAllUnslugPaths } from "../../utils/pageUtils";

import { getStaticProps as getStaticProps_ } from "../index";

const Page = ({ pagePath, ...props }) => {
  return pagePath === "index" ? <Home {...props} /> : null;
};

export default Page;

export const getStaticProps = getStaticProps_;

export const getStaticPaths = async () => {
  const { defaultLanguage, languages } = config;
  const paths = languages
    .filter((l) => l !== defaultLanguage)
    .map((language) => {
      const array = getAllUnslugPaths().map((pagePath) => ({
        params: { pagePath, language },
      }));
      array.push({
        params: { pagePath: ["index"], language },
      });
      return array;
    })
    .flatMap((a) => a);

  return {
    paths,
    fallback: false,
  };
};
