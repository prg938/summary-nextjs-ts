import styles from '@/styles/ProjectItem.module.scss'
import Image from 'next/image'
import React, {FC} from 'react'
import {Highlight, Paragraph} from './DescComponents'

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
  return <div className={styles.desc}>
    <Paragraph>
      CRE allows to generate new Chrome extension and use TypeScript and React. This example demonstates this. But first we neet to init CRE: <a target="_blank" href="https://github.com/prg938/cre#usage">github.com/prg938/cre#usage</a>
    </Paragraph>
    <Paragraph>
      After that we can go to <b>index.tsx entry point</b> and define for example this component: 
    </Paragraph>
    <Highlight code={code} />
    <Paragraph>Now we can open Chrome popup-window and we will see "Hi"</Paragraph>
    <Paragraph>Let's change index.tsx:</Paragraph>
    <Highlight code={code2} />
    <Paragraph>We will see "Welcome Dear Visitor" text. This is because CRE updates extension on any change</Paragraph>
    <Paragraph>
      Now let's communicate with <b>background.js</b> using <b>chrome.runtime.sendMessage</b> and <b>chrome.runtime.onMessage</b> methods.
      And also update Badge using <b>chrome.action.setBadgeText</b> method.
    </Paragraph>
    <Paragraph>In <b>ext/background.js</b> we will add background logic:</Paragraph>
    <Highlight code={code3} />
    <Paragraph>And also update index.tsx:</Paragraph>
    <Highlight code={code4} />
    <Paragraph>In Chrome popup-window we will see "hello from background.js" text and badge set to 123</Paragraph>
    <h2>Conclusion</h2>
    <Paragraph>CRE is a simple yet powerful tool that gives ability to:</Paragraph>
    <ul style={{listStyle: 'none'}}>
      <li>Create default extension in ext folder</li>
      <li>Use React/TypeScript</li>
      <li>Automatically update extension in ext folder on any chandes in code</li>
      <li>Simply load the extension in Google Chrome from ext folder</li>
    </ul>
  </div>
}

export default CreDsc