import * as React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { StaticImage } from 'gatsby-plugin-image'

import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 z-[999] flex h-14 w-full items-center justify-between border-b border-neutral-300 bg-white px-4 dark:border-neutral-700 dark:bg-black md:h-16 md:px-6 xl:px-8">
      <Link
        to="/"
        title="Ole Kirchner"
        className="flex items-center gap-2 text-lg font-semibold transition hover:text-neutral-500 dark:hover:text-neutral-400"
      >
        <StaticImage
          src="../assets/images/logo.png"
          alt="Ole Kirchner - Logo"
          className="w-4"
          placeholder="none"
        />
        Ole Kirchner
      </Link>

      <div className="flex items-center gap-4">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className="cursor-pointer rounded-full p-[6px] text-2xl transition hover:bg-neutral-300 dark:hover:bg-neutral-700">
              <input
                type="checkbox"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? 'dark' : 'light')
                }
                checked={theme === 'dark'}
                className="absolute appearance-none"
              />
              {theme === 'dark' ? (
                <Sun size={20} className="" />
              ) : (
                <Moon size={20} className="" />
              )}
            </label>
          )}
        </ThemeToggler>

        <a
          href="mailto:ole_kirchner@gmx.de"
          title="Let's have a chat"
          className="rounded-full bg-neutral-200 px-4 py-1 text-neutral-800 
        transition hover:bg-neutral-300 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
        >
          Email me
        </a>
      </div>
    </div>
  )
}
