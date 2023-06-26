import styles from '@/styles/ProjectItem.module.scss'
import Image from 'next/image'
import React, {FC} from 'react'
import {Highlight, Paragraph} from './DescComponents'

const code = `<script src='vendor.js'></script>
<script src='app.js'></script>`

const code2 = `const WSP = require('html-webpack-scripts-plugin')
const WSPInstance = new WSP({inline: /(vendor|app)\.js/})
module.exports = {
  plugins: [WSPInstance]
}`

const code3 = `<script>/*content of vendor.js*/</script>
<script>/*content of app.js*/</script>`

const WspDesc: FC<{}> = props => {
  return <div className={styles.desc}>
    <Paragraph>
      WSP is a plugin for Webpack plugin system. Allows to transform external-scripts to inline-scripts. Suppose we have these scripts on the page:
    </Paragraph>
    <Highlight code={code} language={'html'} />
    <Paragraph>
      Transform external-scripts to inline-scripts:
    </Paragraph>
    <Highlight code={code2} />
    <Paragraph>
      Now we will get inline-scripts:
    </Paragraph>
    <Highlight code={code3} language={'html'} />
    <Paragraph>THE END.</Paragraph>
  </div>
}

export default WspDesc