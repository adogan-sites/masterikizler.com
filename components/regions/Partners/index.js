import React, {useRef, useEffect, useState} from "react"
import {useTranslate} from "react-polyglot";

import styles from "./index.module.scss"

import Section from "../../containers/Section"
import {ReferencesImagesContext} from "../../../pages";

const Partners = () => {
    const t = useTranslate();
    const carouselRef = useRef()
    let carouselInterval = null
    const [isCarouselStop, setCarouselStop] = useState(false)
    
    useEffect(() => {
        if (isCarouselStop) {
            return
        }
        let carouselTimeout
        carouselInterval = setInterval(() => {
            const firstPartner = carouselRef.current.children[0];
            firstPartner.style.marginLeft = -(firstPartner.getBoundingClientRect().width + 40) + 'px';
            carouselTimeout = setTimeout(() => {
                let firstItem = carouselRef.current.children[0]
                carouselRef.current.removeChild(firstItem)
                firstItem.style.marginLeft = 0;
                carouselRef.current.appendChild(firstItem)
            }, 350);
        }, 2000);
        
        return () => {
            clearInterval(carouselInterval)
            clearTimeout(carouselTimeout)
        }
    }, [isCarouselStop])
    
    return (
        <ReferencesImagesContext.Consumer>
            {images => (
                <Section title={t('references')} description={t('references.description')}>
                    <div className={styles.Partners} ref={carouselRef} onMouseEnter={() => setCarouselStop(true)}
                         onMouseLeave={() => setCarouselStop(false)}>
                        {images.map((image, index) => (
                          <div key={index}>
                            <img src={require(`../../../public/images/references/${image}`)} />
                          </div>
                        ))}
                    </div>
                </Section>
            )}
        </ReferencesImagesContext.Consumer>
    )
}

export default Partners
