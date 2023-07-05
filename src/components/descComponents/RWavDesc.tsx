import styles from '@/styles/ProjectItem.module.scss'
import React from 'react'
import {Paragraph, Highlight} from '../Typography'
import {useColorScheme} from '../Hooks'
import {ColorSchemes} from '../SwitchColorScheme'

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
  const colorScheme = useColorScheme()
  const opts = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'typescript' : undefined, showLineNumbers: false}
  return <div className={styles.desc}>
    <Paragraph>
      RWAV is a small library written on node.js. Takes wav-file and by analysing binary data retrieves some useful information:
    </Paragraph>
    <Highlight {...opts}>{code}</Highlight>
    <Paragraph>
      As a bonus we can use it in CLI by specifying --source parameter 😎:
    </Paragraph>
    <Highlight {...opts} language='text'>{code2}</Highlight>
    <Paragraph>
      THE END.
    </Paragraph>
  </div>
}