import styles from '@/styles/ProjectItem.module.scss'
import Image from 'next/image'
import React from 'react'
import {Highlight, Paragraph} from './DescComponents'

const code = `<MasonryLayout
  forwardedRef={MasonryLayoutRef}
  animate=".4s ease"
  justifyContainer="center"
  gap={10}
  layoutThrottle={200}>{elements}</MasonryLayout>`

export default () => {
  const tdp = {padding: '5px 15px'}
  return <div className={styles.desc}>
    <Paragraph>
      <b>exports MasonryLayout component</b> from index.tsx. It allows to create grid layout based on columns with auto-placement and optimized usage of Y-space by reducing unnecessary gaps
    </Paragraph>
    <Paragraph>Syntax:</Paragraph>
    <Highlight code={code} />
    <Paragraph><a href='/masonry'>DEMO</a></Paragraph>
  </div>
}