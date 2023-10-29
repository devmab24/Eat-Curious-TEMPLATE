'use client'

import styles from './style.module.css'
import StickyLayerOne from "./StickyLayerOne"
import StickyLayerTwo from "./StickyLayerTwo"
import StickyLayerFour from "./StickyLayerFour"
import StickyLayerThree from "./StickyLayerThree"

function About() {
  return (
    <section>
      <div className={styles.stickyLayer} style={{ zIndex: 4 }}>
        <StickyLayerOne />
      </div>
      <div className={styles.stickyLayer} style={{ zIndex: 3 }}>
        <StickyLayerTwo />
      </div>
      <div className={styles.stickyLayer} style={{ zIndex: 2 }}>
        <StickyLayerThree />
      </div>
      <div className={styles.stickyLayer} style={{ zIndex: 1 }}>
        <StickyLayerFour />
      </div>
    </section>
  )
}

export default About