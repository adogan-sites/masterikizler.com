import React, {useEffect, useState} from 'react';

import styles from './index.module.scss';
import {useRouter} from "next/router";

const SwitchLanguage = () => {
    const router = useRouter();
    const [isFirstSelected, selectFirst] = useState(!router.asPath.startsWith('/en'));
    const [isPristine, setPristine] = useState(true);

    const handleSwitch = () => {
        selectFirst(state => !state);
        setPristine(false);
    };
    
    useEffect(() => {
        if(!isPristine) {
            const timer = setTimeout(() => {
                if(isFirstSelected) {
                    if(window.location.pathname === '/en') {
                        window.location.href = window.location.origin;
                    } else {
                        const pathname = window.location.pathname.substr(3);
                        window.location.href = window.location.origin + pathname;
                    }
                } else {
                    window.location.href = window.location.origin + '/en' + window.location.pathname;
                }
            }, 500);
    
            return () => clearTimeout(timer);
        }
    }, [isFirstSelected]);
    
    return (
        <div className={`${styles.SwitchLanguageContainer} ${(!isFirstSelected ? styles.Right : '')}`} onClick={handleSwitch}>
            <div className={isFirstSelected ? styles.Active : ''}>TR</div>
            <div className={!isFirstSelected ? styles.Active : ''}>ENG</div>
        </div>
    );
};

export default SwitchLanguage;
