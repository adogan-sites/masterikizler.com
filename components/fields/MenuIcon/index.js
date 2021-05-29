import React, {useRef} from 'react';
import {TiThMenu} from "@react-icons/all-files/ti/TiThMenu";
import {FaTimes} from "@react-icons/all-files/fa/FaTimes";

import styles from "./index.module.scss";

const MenuIcon = ({onToggle}) => {
    const timesIconRef = useRef();
    const menuIconRef = useRef();
    let isOpen = false;
    
    const handleClick = () => {
        if (isOpen) {
            timesIconRef.current.classList.remove(styles.Open);
            menuIconRef.current.classList.add(styles.Open);
            isOpen = false;
        } else {
            timesIconRef.current.classList.add(styles.Open);
            menuIconRef.current.classList.remove(styles.Open);
            isOpen = true;
        }
        onToggle(isOpen);
    };
    
    
    return (
        <div onClick={handleClick} className={styles.IconContainer}>
            <div className={styles.Icon} ref={timesIconRef}>
                <FaTimes size={32} />
            </div>
            <div className={[styles.Icon, styles.Open].join(' ')} ref={menuIconRef}>
                <TiThMenu size={32} />
            </div>
        </div>
    );
};

export default MenuIcon;
