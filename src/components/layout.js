import * as React from 'react'

import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div
      data-is-root-path={isRootPath}
      className="bg-white text-neutral-800 dark:bg-black dark:text-neutral-200"
    >
      <Navbar />
      <main className="mx-auto min-h-[calc(100vh-128px)] pt-14 md:min-h-[calc(100vh-64px)] md:pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
