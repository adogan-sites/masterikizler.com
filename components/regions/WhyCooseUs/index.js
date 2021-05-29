import React from 'react';
import {useTranslate} from "react-polyglot";

import { FaBriefcase } from "@react-icons/all-files/fa/FaBriefcase";
import { FaFileContract } from "@react-icons/all-files/fa/FaFileContract";
import { FaUserShield } from "@react-icons/all-files/fa/FaUserShield";
import { FaBolt } from "@react-icons/all-files/fa/FaBolt";

import styles from "./index.module.scss"

const WhyChooseUs = () => {
  const t = useTranslate();

  return (
    <div className={styles.WhyChooseUs}>
      <div>
        <div className={styles.Feature}>
          <div className={styles.Icon}>
            <FaBriefcase />
          </div>
          <div className={styles.Content}>
            <h4>{t('our_experience')}</h4>
            <p>{t('our_experience.description')}</p>
          </div>
        </div>

        <div className={styles.Feature}>
          <div className={styles.Icon}>
            <FaFileContract />
          </div>
          <div className={styles.Content}>
            <h4>{t('warranty_and_quality')}</h4>
            <p>{t('warranty_and_quality.description')}</p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.Feature}>
          <div className={styles.Icon}>
            <FaUserShield />
          </div>
          <div className={styles.Content}>
            <h4>{t('references_and_reliability')}</h4>
            <p>{t('references_and_reliability.description')}</p>
          </div>
        </div>

        <div className={styles.Feature}>
          <div className={styles.Icon}>
            <FaBolt />
          </div>
          <div className={styles.Content}>
            <h4>{t('fast_delivery')}</h4>
            <p>{t('fast_delivery.description')}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUs;