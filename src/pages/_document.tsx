import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const colorSchemeResolver = () => {
  const colorSchemeFromLocalStorage = localStorage.getItem('colorScheme')
  const colorSchemeUnset = colorSchemeFromLocalStorage === null
  const root = document.querySelector(':root')
  const [DARK, LIGHT] = ['dark', 'light']
  if (colorSchemeFromLocalStorage === DARK) {
    /** @ts-ignore **/
    root.dataset.colorScheme = DARK
  }
  else if (colorSchemeFromLocalStorage === LIGHT || colorSchemeUnset) {
    /** @ts-ignore **/
    root.dataset.colorScheme = LIGHT
    if (colorSchemeUnset) {
      localStorage.setItem('colorScheme', LIGHT)
    }
  }
}

const colorSchemeResolverStringified = colorSchemeResolver.toString()

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script strategy='beforeInteractive' id="color-scheme-resolver">
          {`(${colorSchemeResolverStringified})()`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
