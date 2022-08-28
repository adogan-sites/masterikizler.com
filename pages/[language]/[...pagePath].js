import React from "react";

import Home from "../../components/pages/Home/index";

import config from "../../configs/settings.json";

import { getAllUnslugPaths } from "../../utils/pageUtils";

import { getStaticProps as getStaticProps_ } from "../index";

import withAppHocs from '../../components/hocs/withAppHocs/index';

const Page = ({ pagePath, ...props }) => {
  console.log(JSON.stringify(pagePath, null, 2));
  return pagePath[0] === "index" ? <Home {...props} /> : pagePath;
};

export default withAppHocs(Page);

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
