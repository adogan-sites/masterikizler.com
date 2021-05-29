import React, {useRef} from "react"
import {useTranslate} from "react-polyglot";

import styles from "./index.module.scss"

import Container from "../../containers/Container"
import SwitchLanguage from "../../fields/SwitchLanguage";
import MenuIcon from "../../fields/MenuIcon";


const NavBar = () => {
    const t = useTranslate();
    
    const handleMobileMenuToggle = isOpen => {
        if(isOpen) {
        }
    }
    
    return (
        <nav style={{marginBottom: '100px'}}>
            <Container wrapperClassName={styles.NavBar}>
                <div>
                    <a className={styles.NavBarLogo} href="index.html">
                        <img src={require('../../../public/images/logos/logo.png')} alt="logo"/>
                    </a>
                </div>
                <div style={{flex: 1}} />
                <div className={styles.Menu}>
                    <ul>
                        <li><a href="index.html">{t("home")}</a></li>
                        <li><a href="hakkimizda.html">{t("about_us")}</a></li>
                        <li className={styles.Dropdown}>
                            <a href="urunlerimiz.html">{t("products")}</a>
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
                        <li><SwitchLanguage /></li>
                    </ul>
                </div>
                <MenuIcon onToggle={handleMobileMenuToggle} />
            </Container>
        </nav>
    )
}

export default NavBar
