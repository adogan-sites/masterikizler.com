import {useEffect} from "react";

const useLockBodyScroll = (isLocked) => {
    useEffect(() => {
        if (isLocked) {
            // const htmlEl = document.querySelector('html');
            const bodyEl = document.body;

            const originalBodyOverflow = window.getComputedStyle(bodyEl).overflow;
            const originalBodyPosition = window.getComputedStyle(bodyEl).position;
            // const originalHtmlOverflow = window.getComputedStyle(htmlEl).overflow;

            bodyEl.style.overflow = "hidden";
            bodyEl.style.position = "relative";
            // htmlEl.style.overflow = "hidden";

            return () => {
                bodyEl.style.overflow = originalBodyOverflow;
                bodyEl.style.position = originalBodyPosition;
                // htmlEl.style.overflow = originalHtmlOverflow;
            };
        }
    }, [isLocked]);
};

export default useLockBodyScroll;
