import React from 'react';
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

import styles from './index.module.scss';

const StickyWhatsApp = () => {
    return (
        <a className={styles.StickyWhatApp} href='https://wa.me/905334903150' target='_blank' >
            <FaWhatsapp size='48' color='white' />
        </a>
    );
};

export default StickyWhatsApp;
