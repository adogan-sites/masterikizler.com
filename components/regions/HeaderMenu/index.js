import React, {useRef} from 'react';
import {useTranslate} from "react-polyglot";
import useLockBodyScroll from '../../hooks/useLockBodyScroll/index';

const HeaderMenu = ({styles, visibility, isMobile}) => {
    const dropdownRef = useRef();
    const t = useTranslate();
    const classList = [styles.Menu];

    if(isMobile) {
        classList.push(styles.Mobile);
    }

    if(visibility === false) {
        classList.push(styles.Hide);
        dropdownRef?.current?.classList.remove(styles.open);
    }

    useLockBodyScroll(isMobile && visibility);

    return (
        <div className={classList.join(' ')}>
            <ul>
                <li><a href="index.html">{t("home")}</a></li>
                <li><a href="hakkimizda.html">{t("about_us")}</a></li>
                <li className={styles.Dropdown} ref={dropdownRef} onClick={() => dropdownRef.current.classList.toggle(styles.open)}>
                    <a>{t("products")}</a>
                    <ul>
                        <li>
                            <a href="alcipan-profili-uretim-hatti.html">{t("gypsum_line")}</a>
                        </li>
                        <li>
                            <a href="delikli-alci-kose-profili-uretim-hatti.html">{t("perforated_line")}</a>
                        </li>
                        <li>
                            <a href="genisletilmis-metal-kaba-siva-profili-uretim-hatti.html">{t("expanded_line")}</a>
                        </li>
                    </ul>
                </li>
                <li><a href="iletisim.html">{t("contact")}</a></li>
            </ul>
        </div>
    );
};

export default HeaderMenu;