import styles from '@/styles/ProjectItem.module.scss'
import React from 'react'
import {Paragraph} from '../Typography'

export default () => {
  return <div className={styles.desc}>
    <Paragraph>
      Summary site <a href='https://prg938.vercel.app/' target='_blank'>prg938.vercel.app</a> build with Next.js React Framework. Deployed to Vercel.
    </Paragraph>
    <h2>FEATURES:</h2>
    <ul style={{listStyle: 'none'}}>
      <li><b>next/image</b> for image optimization</li>
      <li><b>next/font/google</b> for fonts optimization</li>
      <li><b>next/link</b> for client-side routing</li>
      <li>Flexible layout system</li>
      <li>Routing using file structure</li>
      <li>Mui Swticher</li>
      <li><b>SSG</b> Fetches data. Caches. Generates static HTML-pages</li>
      <li><b>CSR</b> Client Side Rendering with <b>SWR</b> for client-side fetching and caching</li>
    </ul>
  </div>
}