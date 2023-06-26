'use client'

import { Flex } from "@chakra-ui/react"
import styles from './styles.module.css'
import HeaderContents from "./HeaderContents"

function HeaderLayout() {
  return (
    <>
      <Flex className={styles.background}>
        <HeaderContents />
      </Flex>
    </>
  )
}

export default HeaderLayout