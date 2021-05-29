import React from "react"
import styles from "./index.module.scss"

const SectionTitle = ({ title }) => {
  return (
    <div className={styles.SectionHeader}>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionTitle
