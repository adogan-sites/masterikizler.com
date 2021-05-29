import React from "react"
import styles from "./index.module.scss"
import Container from "../Container"
import SectionTitle from "../../fields/SectionTitle"

const Section = ({title, description, children, whiteBackground, className = ''}) => {
    let sectionClasses = [styles.Section]
    whiteBackground && sectionClasses.push(styles.WhiteBackground)
    sectionClasses.push(className);
    
    return (
        <div className={sectionClasses.join(' ')}>
            <Container className={styles.Container}>
                {title && <SectionTitle title={title}/>}
                <div className={styles.Explanation}>
                    {description && (<p dangerouslySetInnerHTML={{__html: description}}/>)}
                </div>
                {children}
            </Container>
        </div>
    )
}

export default Section
