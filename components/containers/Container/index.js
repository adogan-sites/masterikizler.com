import React from "react"

import styles from "./index.module.scss"

const Index = ({ children, wrapperClassName, className }) => {
  wrapperClassName = !Array.isArray(wrapperClassName) ? [wrapperClassName] : wrapperClassName
  className = !Array.isArray(className) ? [className] : className

  return (
    <div className={[styles.ContainerWrapper, ...wrapperClassName].join(" ")}>
      <div className={[styles.Container, ...className].join(" ")}>
        {children}
      </div>
    </div>
  )
}

export default Index
