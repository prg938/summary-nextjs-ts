import styles from '@/styles/ProjectItem.module.scss'
import React, {FC} from 'react'
import {Highlight, Paragraph} from '../Typography'
import {useColorScheme} from '../Hooks'
import {ColorSchemes} from '../SwitchColorScheme'

const code = `<script src='vendor.js'></script>
<script src='app.js'></script>`

const code2 = `const WSP = require('html-webpack-scripts-plugin')
const WSPInstance = new WSP({inline: /(vendor|app)\\.js/})
module.exports = {
  plugins: [WSPInstance]
}`

const code3 = `<script>/*content of vendor.js*/</script>
<script>/*content of app.js*/</script>`

const WspDesc: FC<{}> = props => {
  const colorScheme = useColorScheme()
  const opts1 = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'html' : undefined, showLineNumbers: false}
  const opts2 = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'typescript' : undefined, showLineNumbers: false}
  const opts3 = {...colorScheme, language: colorScheme?.theme !== ColorSchemes.Text ? 'html' : undefined, showLineNumbers: false}
  return <div className={styles.desc}>
    <Paragraph>
      WSP is a plugin for Webpack plugin system. Allows to transform external-scripts to inline-scripts. Suppose we have these scripts on the page:
    </Paragraph>
    <Highlight {...opts1}>{code}</Highlight>
    <Paragraph>
      Transform external-scripts to inline-scripts:
    </Paragraph>
    <Highlight {...opts2}>{code2}</Highlight>
    <Paragraph>
      Now we will get inline-scripts:
    </Paragraph>
    <Highlight {...opts3}>{code3}</Highlight>
    <Paragraph>THE END.</Paragraph>
  </div>
}

export default WspDesc