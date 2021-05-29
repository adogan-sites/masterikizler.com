import React from 'react';
import Home, {getStaticProps as getStaticProps_} from "../index";
import fs from "fs";

const LangMainPage = props => {
    return (
        <Home {...props} />
    );
};

export default LangMainPage;

export const getStaticProps = getStaticProps_;

export const getStaticPaths = async () => {
    const languages = await fs.promises.readdir('public/locales');
    const paths = languages.filter(l => l !== 'tr').map(language => ({params: {lang: language}}));
    
    return {
        paths,
        fallback: false
    }
}
