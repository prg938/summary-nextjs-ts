import styles from '@/styles/ProjectItem.module.scss'
import Image from 'next/image'
import React from 'react'

export default () => {
  return <div className={styles.desc}>
    <b>Mario game using HTML5 Canvas</b>. Still under development. But first 2 levels available! Play <a href='https://prg938.github.io/mariogame' target='_blank'>HERE</a>
  </div>
}