import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ArrowUpRight } from 'lucide-react'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Index = ({ data, location }) => {
  const work = data.allMdx.nodes

  return (
    <Layout location={location}>
      <header className="relative mx-auto flex flex-col items-center justify-center px-4 py-12 sm:px-6 md:px-8 md:py-16 xl:px-12 xl:py-20">
        <div className="relative z-10 flex max-w-[420px] flex-col items-center md:max-w-lg xl:max-w-2xl">
          <div className="relative w-28 overflow-hidden md:w-36 xl:w-40 before:absolute before:bottom-[-1px] before:block before:w-full before:h-1/4 full before:z-10 before:bg-gradient-to-t before:from-neutral-100 before:to-neutral-100/0 dark:before:from-neutral-800 dark:before:to-neutral-800/0">
            <StaticImage
              src="../assets/images/portrait.jpg"
              alt="Ole Kirchner - Portrait"
              className="m-1 rounded-full"
            />
          </div>

          <h1 className="relative z-20 font-handwriting text-2xl md:text-3xl xl:text-4xl -rotate-3 -translate-y-4">
            Hey, I'm Ole.
          </h1>

          <p className="text-center text-neutral-600 dark:text-neutral-400 md:text-lg xl:mt-2 xl:text-xl">
           I'm an aspiring <span className="text-black font-semibold dark:text-white">software developer</span> with a background in web development and media design, currently pursuing a bachelors degree in "International Media and Computing" at the <a href="https://www.htw-berlin.de/en/" title="Visit the website of the HTW Berlin" target="blank" className="text-black underline transition hover:text-neutral-500 dark:text-white dark:hover:text-neutral-400"><span className="font-semibold">HTW Berlin</span><ArrowUpRight className="relative top-[-1px] left-[1px] inline w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6"/></a> (in Berlin, Germany). 
          </p>

          <p className="mt-2 text-center text-neutral-600 dark:text-neutral-400 md:mt-4 md:text-lg xl:mt-6 xl:text-xl">
            Right now I am looking for a <span className="text-black dark:text-white font-semibold">challenging 4-6 months long internship abroad</span> to gain valuable experience, learn a lot and grow as a person.
          </p>

          <p className="mt-2 text-center text-neutral-600 dark:text-neutral-400 md:mt-4 md:text-lg xl:mt-6 xl:text-xl">
            Feel free to take a look at my <span className="text-black dark:text-white font-semibold">work below</span>.
          </p>

          <a href="pdfs/resume.pdf" title="View résumé" target="blank" className="px-4 py-1 bg-orange-700 text-white mt-4 rounded-full transition hover:bg-orange-600 dark:hover:bg-orange-800 md:mt-6 xl:mt-8">
            View résumé 
            <ArrowUpRight size={16} className="relative top-[-1px] inline ml-1"/>
          </a>
        </div>
      </header>

      <section className="border-t border-neutral-200 px-6 py-12 dark:border-neutral-700 md:py-16 md:px-8 xl:px-12 xl:py-20">
        <ol className="mx-auto grid max-w-[420px] gap-y-8   sm:max-w-none sm:grid-cols-2 sm:gap-x-6 md:max-w-[860px] md:gap-y-10 md:gap-x-8  lg:max-w-[1400px] lg:grid-cols-3 xl:max-w-none xl:gap-x-10 xl:gap-y-14 ">
          {work.map((workItem) => {
            return (
              <li key={workItem.frontmatter.slug}>
                <article>
                  <Link to={'/work/' + workItem.frontmatter.slug} title={workItem.frontmatter.description}>
                    <GatsbyImage
                      image={getImage(workItem.frontmatter.thumbnail)}
                      alt={workItem.frontmatter.title}
                      className="aspect-[5/4] transition hover:brightness-75"
                    />
                  </Link>

                  <div className="mt-2">
                    <Link
                      to={'/work/' + workItem.frontmatter.slug}
                      title={workItem.frontmatter.description}
                      className="font-semibold transition hover:text-neutral-500 hover:underline dark:hover:text-neutral-400"
                    >
                      {workItem.frontmatter.title}
                    </Link>

                    <div className="flex justify-between gap-x-4">
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {workItem.frontmatter.categories}
                      </div>

                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {workItem.frontmatter.date}
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </section>
    </Layout>
  )
}

export default Index

export const Head = () => <Seo />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          slug
          date(formatString: "MM/YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          categories
        }
      }
    }
  }
`
