import styles from '@/styles/ProjectItem.module.scss'
import React from 'react'
import {Highlight, Paragraph} from '../Typography'
import {ColorSchemes} from '../SwitchColorScheme'
import {useColorScheme} from '../Hooks'

const code = `<MasonryLayout
  forwardedRef={MasonryLayoutRef}
  animate=".4s ease"
  justifyContainer="center"
  gap={10}
  layoutThrottle={200}>{elements}</MasonryLayout>`

export default () => {
  const colorScheme = useColorScheme()
  const opts = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'typescript' : undefined, showLineNumbers: false}
  const tdp = {padding: '5px 15px'}
  return <div className={styles.desc}>
    <Paragraph>
      <b>exports MasonryLayout component</b> from index.tsx. It allows to create grid layout based on columns with auto-placement and optimized usage of Y-space by reducing unnecessary gaps
    </Paragraph>
    <Paragraph>
      Syntax:
    </Paragraph>
    <Highlight {...opts}>{code}</Highlight>
    <Paragraph>
      <a href='/masonry'>DEMO</a>
    </Paragraph>
  </div>
}