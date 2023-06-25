'use client'

import Navbar from '../Navbar'
import styles from './styles.module.css'
import HeaderContents from '../Header/HeaderContents'

function HomeMainPage() {
  return (
    <main className={styles.background}>
      {/* <section className={styles.section}> */}
        <Navbar />
        <HeaderContents />
      {/* </section> */}
    </main>
  )
}

export default HomeMainPage