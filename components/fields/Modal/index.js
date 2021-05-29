import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {createPortal} from 'react-dom';

import styles from './index.module.scss';

import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Modal = ({children, effectSourceRef, className}, ref) => {
    const [modalRoot, setModalRoot] = useState();
    const [isOpen, setOpen] = useState(false);
    
    const wrapperRef = useRef();
    const overlayRef = useRef();
    
    const closeModal = () => {
        if(effectSourceRef) {
            const {top, left} = effectSourceRef.current.getBoundingClientRect();
            wrapperRef.current.style.top = top + 'px';
            wrapperRef.current.style.left = left + 'px';
        }
        
        wrapperRef.current.style.transform = 'scale(0.2)';
        wrapperRef.current.style.opacity = '0';
        overlayRef.current.classList.remove(styles.Open);
        setTimeout(() => setOpen(false), 400);
    };
    
    const ModalComponent = (
        <>
            <div className={styles.Overlay} ref={overlayRef}/>
            <div className={[styles.Wrapper, className].join(' ')} ref={wrapperRef}>
                <div className={styles.CloseIcon} onMouseUp={closeModal}>X</div>
                <div className={styles.Container}>
                    {children}
                </div>
            </div>
        </>
    );
    
    useImperativeHandle(ref, () => ({
        openModal: () => setOpen(true),
        closeModal
    }));
    
    useEffect(() => {
        const modalRoot_ = document.getElementById('modal-root');
        if (modalRoot_) {
            setModalRoot(modalRoot_);
        }
    }, []);
    
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                overlayRef.current.classList.add(styles.Open);
                wrapperRef.current.style = '';
                wrapperRef.current.classList.add(styles.Open);
            }, 10);
            
            if(effectSourceRef) {
                const {top, left} = effectSourceRef.current.getBoundingClientRect();
                wrapperRef.current.style.top = top + 'px';
                wrapperRef.current.style.left = left + 'px';
            }
        }
    }, [isOpen]);
    
    useLockBodyScroll(isOpen);
    useOnClickOutside(wrapperRef, closeModal);
    
    return modalRoot && isOpen ? createPortal(ModalComponent, modalRoot) : null;
};

export default forwardRef(Modal);
