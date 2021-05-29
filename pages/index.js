import React from 'react';
import fs from 'fs';
import {useTranslate} from "react-polyglot";

import Layout from "../components/containers/Layout/layout";
import Section from "../components/containers/Section";
import VideoList from "../components/regions/VideoList";
import WhyChooseUs from "../components/regions/WhyCooseUs";
import MitBanner from "../components/regions/Banners/MitBanner";
import ComBanner from "../components/regions/Banners/ComBanner";
import withTranslation from "../components/hocs/withTranslation";

export const ReferencesImagesContext = React.createContext([]);

const Home = ({referencesImages}) => {
    const t = useTranslate();

    return (
        <ReferencesImagesContext.Provider value={referencesImages}>
            <Layout>
                <MitBanner/>
                
                <Section
                    title={t("our_services")}
                    description={t("our_services.description")}
                    whiteBackground={true}
                >
                    <VideoList/>
                </Section>
                
                <ComBanner/>
                
                <Section title={t("why_choose_us")}>
                    <WhyChooseUs/>
                </Section>
            </Layout>
        </ReferencesImagesContext.Provider>
    )
};

export default withTranslation(Home);

export const getStaticProps = async ({params}) => {
    const images = await fs.promises.readdir('public/images/references');
    const lang = (params && params.lang) || 'tr';
    const {common} = await import('../public/locales/' + lang + '/common.js');
    const {home} = await import('../public/locales/' + lang + '/home.js');
    const translation = {...common, ...home};
    
    return {
        props: {
            referencesImages: images,
            translation
        }
    };
}
