'use client'

import SideBar from '@/component/common/SideBar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <SideBar >
      <Component {...pageProps} />
    </SideBar>
  </>
}
