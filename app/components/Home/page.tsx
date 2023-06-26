'use client'

import styles from './Home.module.css'
import AboutUs from '../AboutUs/AboutUs'
import Features from '../Feautures/Feautres'
import HeaderLayout from '../Header/HeaderLayout'

function HomeMainPage() {
  return (
    <main className={styles.home}>
      <HeaderLayout />
      <AboutUs />
      <Features />
    </main>
  )
}

export default HomeMainPage