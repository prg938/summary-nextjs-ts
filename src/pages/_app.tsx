import '@/styles/general.css'
import type {ReactElement, ReactNode} from 'react'
import type {NextPage} from 'next'
import type {AppProps} from 'next/app'
import {Inter} from 'next/font/google'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({Component, pageProps}: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? (page => page)
  const layout = getLayout(<Component {...pageProps} />)
  
  return (
    <div className={inter.className}>
      {layout}
    </div>
  )
}