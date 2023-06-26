import styles from '@/styles/ProjectItem.module.scss'
import Image from 'next/image'
import React from 'react'
import {Paragraph} from './DescComponents'

export default () => {
  return <div className={styles.desc}>
    <Paragraph>
      <b>Weather extension for Chrome</b>. Written on TypeScript and React.
    </Paragraph>
    <h2>FEATURES:</h2>
    <ul style={{listStyle: 'none'}}>
      <li>Languages support: russian/english</li>
      <li>Animated chart</li>
      <li>Chart scroll</li>
      <li>Geolocation</li>
      <li>Detailed weather information for 50 hours ahead: temperature, humidity, precipitation, wind</li>
    </ul>
  </div>
}