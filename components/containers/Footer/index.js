import React from "react"

import Container from "../Container"

import styles from "./index.module.scss"

import { FaPhone } from "@react-icons/all-files/fa/FaPhone";
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaClock } from "@react-icons/all-files/fa/FaClock";
import {FaFacebookSquare} from "@react-icons/all-files/fa/FaFacebookSquare";
import {FaInstagramSquare} from "@react-icons/all-files/fa/FaInstagramSquare";
import Partners from "../../regions/Partners"
import {useTranslate} from "react-polyglot";
import {FaYoutubeSquare} from "@react-icons/all-files/fa/FaYoutubeSquare";

const Footer = () => {
  const t = useTranslate();

  return (
    <>
      <Partners/>
      <footer>
        <div className={styles.FooterBlock}>
          <Container className={styles.FooterContainer}>
            <div className={styles.FooterContent} style={{flexGrow: 2}}>
              <h3>{t('masterikizler_machine')}</h3>
              <p>{t('footer.about')}</p>
            </div>

            <div className={styles.FooterContent} style={{flexGrow: 1}}>
              <h3>{t('pages')}</h3>
              <ul>
                <li><a href="index.html">{t('home')}</a></li>
                <li><a href="hakkimizda.html">{t('about_us')}</a></li>
                <li><a href="iletisim.html">{t('contact')}</a></li>
                <li><a href="urunlerimiz.html">{t('products')}</a></li>
              </ul>
            </div>
  
            <div className={styles.FooterContent} style={{flexGrow: 2}}>
              <h3>{t('products')}</h3>
              <ul>
                <li><a href="index.html">{t('gypsum_line')}</a></li>
                <li><a href="hakkimizda.html">{t('perforated_line')}</a></li>
                <li><a href="iletisim.html">{t('expanded_line')}</a></li>
              </ul>
            </div>

            <div className={styles.FooterContent} style={{flexGrow: 3}}>
              <h3>{t('contact')}</h3>
              <ul>
                <li><FaMapMarkerAlt className={styles.Icon} />{t('footer.address')}</li>
                <li><FaClock className={styles.Icon} />{t('working_hours')}</li>
                <li><FaPhone className={styles.Icon} />+90 (312) 354 95 66</li>
                <li><FaEnvelope className={styles.Icon} />masterikizler@gmail.com</li>
              </ul>
            </div>
          </Container>
        </div>
  
        <div className={styles.FooterBottom}>
          <Container>
            <div className={styles.FooterBottomContainer}>
              <h6>© Copyright {(new Date()).getFullYear()} MasterIkizler - Tüm Hakları Saklıdır</h6>
              <div>
                <a href="https://www.facebook.com/masterikizler/" target="_blank" ><FaFacebookSquare className={styles.Icon} /></a>
                <a href="https://www.instagram.com/masterikizlermakina/" target="_blank" ><FaInstagramSquare className={styles.Icon} /></a>
                <a href="https://www.youtube.com/channel/UC3epKzRgAGKTO1tvWti1HQA/videos" target="_blank" ><FaYoutubeSquare className={styles.Icon} /></a>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  )
}

export default Footer
