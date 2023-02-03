import * as React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <div className="flex h-32 flex-col items-center justify-center border-t border-neutral-200 px-6 dark:border-neutral-700 md:h-16 md:flex-row md:justify-between md:px-8 xl:px-12">
      <div className="text-center">
        Built using
        <a
          href="https://www.gatsbyjs.com/"
          target="blank"
          className="ml-1 text-black underline transition hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400"
        >
          <span className="whitespace-nowrap">
            Gatsby.js
            <ArrowUpRight
              size={16}
              className="relative top-[-1px] left-[1px] inline"
            />
          </span>
        </a>
        , deployed on
        <a
          href="https://www.gatsbyjs.com/products/cloud/"
          target="blank"
          className="ml-1 text-black underline transition hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400"
        >
          <span className="whitespace-nowrap">
            Gatsby Cloud
            <ArrowUpRight
              size={16}
              className="relative top-[-1px] left-[1px] inline"
            />
          </span>
        </a>
      </div>

      <div className="mt-2 md:mt-0">©2023 Ole Kirchner</div>
    </div>
  )
}
