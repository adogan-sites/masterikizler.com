import fs from "fs";
import React from "react";

import withAppHocs from "../components/hocs/withAppHocs";

import Home from "../components/pages/Home/index";

import config from "../configs/settings.json";

const Page = () => <Home />;

export default withAppHocs(Page);

export const getStaticProps = async ({ params = {} }) => {
  const images = await fs.promises.readdir("public/images/references");

  const { language: language_, ...props } = params;
  const language = language_ || config.defaultLanguage;
  const { common } = await import(
    "../public/locales/" + language + "/common.js"
  );
  const { home } = await import("../public/locales/" + language + "/home.js");
  const translation = { ...common, ...home };

  return {
    props: {
      ...props,
      context: {
        referenceImages: images,
      },
      translation,
    },
  };
};
