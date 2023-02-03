import * as React from 'react'

import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ location, children }) => {
  return (
    <div className="bg-neutral-200 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
      <div className="mx-auto max-w-6xl bg-neutral-100 dark:bg-neutral-800">
        <Navbar />
        <main className="min-h-[calc(100vh-128px)] md:min-h-[calc(100vh-64px)]">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
