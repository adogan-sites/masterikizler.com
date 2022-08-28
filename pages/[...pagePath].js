import React from "react";

import { getAllSlugPaths, getAllUnslugPaths } from "../utils/pageUtils";

import withAppHocs from '../components/hocs/withAppHocs/index';

const Page = ({ pagePath }) => {
  return <>{pagePath}</>;
};

export default withAppHocs(Page);

export const getStaticProps = async ({ params }) => {
  const pagePath = params.pagePath;

  return {
    props: params,
  };
};

export const getStaticPaths = async () => {
  const paths = [...getAllSlugPaths(), ...getAllUnslugPaths()].map(
    (pagePath) => ({ params: { pagePath } })
  );

  return {
    paths,
    fallback: false,
  };
};
