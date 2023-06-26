import styles from '@/styles/ProjectItem.module.scss'
import Image from 'next/image'
import React from 'react'
import {Paragraph, Highlight} from './DescComponents'

const code = `import rwav from 'wavread'
rwav('./file.wav', details => {
  const {
    duration,
    size,
    format,
    byteRate,
    specification,
    audioFormat,
    sampleRate,
    blockAlign,
    bitsPerSample,
    channels
  }
  console.log(duration, byteRage)
})`

const code2 = `node wavread --source=C:/Users/Sergey/Desktop/file.wav`

export default () => {
  return <div className={styles.desc}>
    <Paragraph>
      RWAV is a small library written on node.js. Takes wav-file and by analysing binary data retrieves some useful information:
    </Paragraph>
    <Highlight code={code} />
    <Paragraph>
      As a bonus we can use it in CLI by specifying --source parameter 😎:
    </Paragraph>
    <Highlight code={code2} language='text' />
    <Paragraph>
      THE END.
    </Paragraph>
  </div>
}