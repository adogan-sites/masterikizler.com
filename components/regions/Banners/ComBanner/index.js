import React from 'react';
import {useTranslate} from "react-polyglot";

import Container from '../../../containers/Container';

import styles from './index.module.scss';

const ComBanner = () => {
    const t = useTranslate();
    
    return (
        <div className={styles.CommunicationBanner} style={{backgroundImage: "url('/images/slider/slide-1.jpg')"}}>
            <Container className={styles.Container}>
                <div className={styles.Content}>
                    <h1>{t('communication.title')}</h1>
                    <p>{t('communication.description')}</p>
                </div>
            </Container>
        </div>
    );
};

export default ComBanner;
