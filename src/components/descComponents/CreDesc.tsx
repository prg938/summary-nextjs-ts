import styles from '@/styles/ProjectItem.module.scss'
import React, {FC} from 'react'
import {Highlight, Paragraph} from '../Typography'
import {useColorScheme} from '../Hooks'
import {ColorSchemes} from '../SwitchColorScheme'

const code = `import {FC} from 'react'

const HiComponent = FC<{}> = () => {
  const style = {padding: '20px'}
  return (
    <div style={style}>Hi</div>
  )
}

export default HiComponent`

const code2 = `const HiComponent = FC<{}> = () => {
  const style = {padding: '5px'}
  return (
    <div style={style}>Welcome <b>Dear Visitor</b></div>
  )
}`
const code3 = `chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'data') {
    // return simple object for simplicity
    sendResponse({
      content: 'hello from background.js',
      badge: '123'
    })
    return true
  }
})`

const code4 = `import {useEffect, useState, FC} from 'react'

interface HiComponentStateType = {
  content: string
  badge: string
}

const HiComponent = FC<{}> = () => {
  const [state, setState] = useState<HiComponentStateType>({
    content: 'hello',
    badge: 0
  })
  useEffect(() => {
    chrome.runtime.sendMessage({type: 'data'}, (response) => {
      if (response) {
        const {content, badge} = response
        setState({content, badge})
        chrome.action.setBadgeText({text: badge})
      }
      else document.write('Cannot fetch data from background.js')
    })
  }, [])
  return (
    <div>{state.content}</div>
  )
}`

const CreDsc: FC<{}> = props => {

  const colorScheme = useColorScheme()
  const opts = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'typescript' : undefined, showLineNumbers: false}

  return <div className={styles.desc}>
    <Paragraph>
      CRE allows to generate new Chrome extension and use TypeScript and React. This example demonstates this. But first we neet to init CRE: <a target="_blank" href="https://github.com/prg938/cre#usage">github.com/prg938/cre#usage</a>.
      After that we can go to <b>index.tsx entry point</b> and define for example this component: 
    </Paragraph>
    <Highlight {...opts}>{code}</Highlight>
    <Paragraph>
      Now we can open Chrome popup-window and we will see <b>Hi</b>. Let's change index.tsx:
    </Paragraph>
    <Highlight {...opts}>{code2}</Highlight>
    <Paragraph>
      We will see <b>Welcome Dear Visitor</b> text. This is because CRE updates extension on any change.
      Now let's communicate with <b>background.js</b> using <b>chrome.runtime.sendMessage/onMessage</b> methods.
      And also update Badge using <b>chrome.action.setBadgeText</b> method. In <b>ext/background.js</b> we will add background logic:
    </Paragraph>
    <Highlight {...opts}>{code3}</Highlight>
    <Paragraph>
      And also update index.tsx:
    </Paragraph>
    <Highlight {...opts}>{code4}</Highlight>
    <Paragraph>
      In Chrome popup-window we will see <b>hello from background.js</b> text and badge set to 123
    </Paragraph>
    <h2>Conclusion</h2>
    <div>
      CRE is a simple tool that gives ability to:
    </div>
    <ul style={{listStyle: 'none'}}>
      <li>Create default extension in ext folder</li>
      <li>Use React/TypeScript</li>
      <li>Automatically update extension in ext folder on any chandes in code</li>
      <li>Simply load the extension in Google Chrome from ext folder</li>
    </ul>
  </div>
}

export default CreDsc