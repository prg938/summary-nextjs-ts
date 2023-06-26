import MarioGameDesc from './MarioGameDesc'
import ChromeWeatherDesc from './ChromeWeatherDesc'
import MasonryLayoutDesc from './MasonryLayoutDesc'
import WspDesc from './WspDesc'
import NextSummaryDesc from './NextSummaryDesc'
import RWavDesc from './RWavDesc'
import CreDesc from './CreDesc'

export default {
  MarioGameDesc,
  ChromeWeatherDesc,
  MasonryLayoutDesc,
  WspDesc,
  NextSummaryDesc,
  RWavDesc,
  CreDesc
}

import {github} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {FC} from 'react'

const Highlight: FC<{code: string, language?: string}> = ({code, language}) => {
  return <div style={{margin: '15px 0'}}>
    <SyntaxHighlighter showLineNumbers={true} language={language ? language : 'typescript'} style={github} customStyle={{fontSize: '12px'}}>
      {code}
    </SyntaxHighlighter>
  </div>
}

const Paragraph = ({children}: {children: React.ReactNode}) => <p style={{margin: '15px 0'}}>{children}</p>

export {Highlight, Paragraph}