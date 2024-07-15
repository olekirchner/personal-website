import * as React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { StaticImage } from 'gatsby-plugin-image'

import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="sticky top-0 left-0 z-[999] flex h-14 w-full iems-center justify-between border-b border-neutral-200 bg-neutral-100 px-4 dark:border-neutral-700 dark:bg-neutral-900 dark:bg-neutral-800 sm:px-6 md:h-16 md:px-8 xl:px-12">
      <Link
        to="/"
        title="Ole Kirchner"
        className="flex items-center gap-2 text-lg font-semibold transition hover:text-neutral-500 dark:hover:text-neutral-400"
      >
        <StaticImage
          src="../assets/images/logo.png"
          alt="Ole Kirchner - Logo"
          className="w-5"
          placeholder="none"
        />
        Ole Kirchner
      </Link>

      <div className="flex items-center gap-2 sm:gap-4">
        <a href="https://github.com/olekirchner" target="blank" title="Visit my GitHub profile" className="h-4">
          <StaticImage 
            src="../assets/images/github-icon.svg"
            alt="GitHub Icon" 
            className="w-4 invert transition hover:opacity-70 dark:invert-0"
            placeholder="none"
          />
        </a>

        {/* <a href="https://www.linkedin.com/in/ole-kirchner-23b279189/" target="blank" title="Visit my LinkedIn profile" className="h-4">
          <StaticImage
            src="../assets/images/linkedin-icon.png"
            alt="LinkedIn Icon"
            className="w-4 invert transition hover:opacity-70 dark:invert-0"
            placeholder="none"
          />
        </a> */}

        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label className="cursor-pointer rounded-full text-2xl transition hover:opacity-70">
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
          className="rounded-full bg-emerald-700 px-4 py-1
        text-white transition hover:bg-emerald-600 dark:hover:bg-emerald-800"
        >
          Contact me
        </a>
      </div>
    </div>
  )
}
