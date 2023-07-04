'use client'

import styles from './Home.module.css'
import AboutUs from '../AboutUs/AboutUs'
import Products from '../Products/ProductsMain'
import { Hide, Show } from '@chakra-ui/react'
import { Image, Link } from '@chakra-ui/next-js'
import ContactMain from '../Contacts/ContactMain'
import Features from '../Features/Features'
import Footer from '../Footer'

function HomeMainPage() {

  return (
    <div className={styles.container}>
      <div>
        {/*Nav Items section*/}
        <Hide below='md'>
          <nav className={styles.nav} role='navigation'>
            <div className={styles.navContent}>
              <ul>
                <li>
                  <Link className={styles.a} href="/about" _hover={{ textDecoration: "none" }}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link className={styles.a} href="/product" _hover={{ textDecoration: "none" }}>
                    PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link fontSize={{ base:'1.5em', md:"2.8em" }} lineHeight='0.8em' href="/" _hover={{ textDecoration: "none" }}>
                    Eat <br /> CURIOUS
                  </Link>
                </li>
                <li>
                  <Link className={styles.a} href="/recipes" _hover={{ textDecoration: "none" }}>
                    RECIPES
                  </Link>
                </li>
                <li>
                  <Link color={'black'} className={styles.navButton} href="/contact" _hover={{ textDecoration: "none" }}>
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Hide>
        <Show below='md'>
          <nav className={styles.nav} role='navigation'>
            <div className={styles.navContent}>
              <ul>
                <li>
                  <Link fontSize="2.8em" lineHeight='0.8em' href="/" _hover={{ textDecoration: "none" }}>
                    Eat <br /> CURIOUS
                  </Link>
                </li>
                <li>
                  <Link color={'black'} className={styles.navButton} href="/contact" _hover={{ textDecoration: "none" }}>
                    MENU
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Show>

        {/*Header section*/}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>MEAT-FREE</h1>
          </div>
          <div className={styles.headerImage}>
            <Image src="/burger.png" alt="burger" width="400" height="400" />
          </div>
          <div className={styles.headerMind}>
            <h1 className={styles.headerTitle}>YOUR MIND</h1>
          </div>

          <div className={styles.headerTwistLine}>
            <Image src="/twistline3.png" alt="burger" width="90" height="90" />
          </div>

          {/*Scrolling pictures section*/}
        </div>

        {/*Image scrolling section*/}
        <section id="marquee" className={styles.marquee}>
          <div className={styles.picContainer}>
            <div className={styles.pic}>
                <Image src="/images/1.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/2.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/3.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/4.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/5.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/6.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/7.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/8.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/9.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/10.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/11.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/12.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/13.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/14.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/15.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/16.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/17.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/18.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/19.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/20.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/21.jpeg" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/22.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/23.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/24.png" alt="img" width={300} height={100}/>
            </div>
            <div className={styles.pic}>
                <Image src="/images/25.png" alt="img" width={300} height={100}/>
            </div>
          </div>
        </section>
      </div>

      {/* About section */}
      <div>
        <AboutUs />
      </div>

      {/* features section */}
      <div>
        <Features />
      </div>

      {/* Services section */}
      <div>
        <Products />
      </div>

      {/* Contact section */}
      <div>
        <ContactMain />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}

export default HomeMainPage