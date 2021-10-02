import React, {useState, useRef} from "react"

import styles from "./index.module.scss"

import Container from "../../containers/Container"
import MenuIcon from "../../fields/MenuIcon";
import HeaderMenu from "../HeaderMenu";
import SwitchLanguage from "../../fields/SwitchLanguage";
import useOnClickOutside from '../../hooks/useOnClickOutside/index';

const NavBar = () => {
    const navbarRef = useRef();
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    useOnClickOutside(navbarRef, () => setMobileMenuOpen && setMobileMenuOpen(false));

    return (
        <div ref={navbarRef}>
            <nav style={{marginBottom: '100px'}}>
                <Container wrapperClassName={styles.NavBar}>
                    <div>
                        <a className={styles.NavBarLogo} href="index.html">
                            <img src={require('../../../public/images/logos/logo.png')} alt="logo"/>
                        </a>
                    </div>
                    <div style={{flex: 1}} />
                    <HeaderMenu styles={styles} />
                    <div className={styles.SwitchLanguage}>
                        <SwitchLanguage />
                    </div>
                    <MenuIcon onToggle={setMobileMenuOpen} isOpen={isMobileMenuOpen} />
                </Container>
            </nav>
            <HeaderMenu styles={styles} visibility={isMobileMenuOpen} isMobile setMobileMenuOpen={setMobileMenuOpen} />
        </div>
    )
}

export default NavBar
