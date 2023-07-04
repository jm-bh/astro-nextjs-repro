import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '@astrouxds/astro-web-components/dist/astro-web-components/astro-web-components.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
