import {FC} from "react"
import {atomOneDark, github} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'
import type {SyntaxHighlighterProps} from 'react-syntax-highlighter'

interface HighlightPropsType extends SyntaxHighlighterProps {
  theme?: 'light' | 'dark' | 'text'
}

const Highlight: FC<HighlightPropsType> = props => {
  const {language = 'text', theme = 'text', showLineNumbers = true, children, ...otherProps} = props
  let definedCustomStyle = {}
  let definedStyle = github
  if (theme === 'dark') {
    definedCustomStyle = {
      background: 'rgb(22, 22, 22)'
    }
    definedStyle = atomOneDark
  }
  else if (theme === 'text') {
    definedCustomStyle = {
      background: 'transparent'
    }
  }
  return <div style={{margin: '15px 0'}}>
    <SyntaxHighlighter language={language} showLineNumbers={showLineNumbers} style={definedStyle} customStyle={{...{fontSize: '12px'}, ...definedCustomStyle}} {...otherProps}>
      {children}
    </SyntaxHighlighter>
  </div>
}

const Paragraph = ({children}: {children: React.ReactNode}) => <p style={{margin: '15px 0'}}>{children}</p>

export {Highlight, Paragraph}