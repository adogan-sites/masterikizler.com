import React, {useRef} from 'react';
import {useTranslate} from "react-polyglot";

import Container from '../../../containers/Container';
import Modal from "../../../fields/Modal";

import styles from './index.module.scss';

const mitDocSrc = '/images/content/yerlimalibelgesi.jpeg';

const MitBanner = () => {
    const t = useTranslate();
    const modalRef = useRef();
    const mitDocRef = useRef();
    
    const openDocumentModal = () => {
        modalRef.current.openModal();
    };
    
    return (
        <>
            <div className={styles.MadeInTurkeyBanner} style={{backgroundImage: "url('/images/slider/slide-2.jpg')"}}>
                <Container className={styles.Container}>
                    <div className={styles.Content}>
                        <h1>{t('mint.title')}</h1>
                        <p>{t('mint.description')}</p>
                    </div>
                    <div className={styles.Document} onClick={openDocumentModal}>
                        <img src={require('../../../../public' + mitDocSrc)} ref={mitDocRef}/>
                        <span>Yerli Malı Belgesi</span>
                    </div>
                </Container>
            </div>
            <Modal ref={modalRef} effectSourceRef={mitDocRef} className={styles.MintModal}>
                <a href={mitDocSrc} target="_blank">
                    <img src={require('../../../../public' + mitDocSrc)} />
                </a>
            </Modal>
        </>
    );
};

export default MitBanner;
