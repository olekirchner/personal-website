import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Index = ({ data, location }) => {
  const work = data.allMdx.nodes

  return (
    <Layout location={location}>
      <header className="relative mx-auto flex flex-col items-center justify-center  px-6 py-12 md:px-8 md:py-16  xl:px-12 xl:py-20">
        <div className="relative z-10 flex max-w-[420px] flex-col items-center md:max-w-lg xl:max-w-2xl">
          <StaticImage
            src="../assets/images/portrait.jpeg"
            alt="Ole Kirchner - Portrait"
            className="w-24 rounded-full md:w-32 xl:w-40"
          />

          <h1 className="mt-4 text-center text-xl text-neutral-600 dark:text-neutral-400 md:mt-6 md:text-2xl xl:mt-8 xl:text-3xl">
            <b className="font-semibold text-black dark:text-white">
              Hey, I&#8217;m Ole.
            </b>{' '}
            A{' '}
            <b className="font-semibold text-black dark:text-white">
              freelance webdesigner
            </b>{' '}
            and versatile{' '}
            <b className="font-semibold text-black dark:text-white">
              hobby artist
            </b>{' '}
            based in{' '}
            <b className="font-semibold text-black dark:text-white">
              Berlin, Germany
            </b>
            . Have a look at my work down below.
          </h1>
        </div>
      </header>

      <section className="border-t border-neutral-200 px-6 py-12 dark:border-neutral-700 md:py-16 md:px-8 xl:px-12 xl:py-20">
        <ol className="mx-auto grid max-w-[420px] gap-y-8   sm:max-w-none sm:grid-cols-2 sm:gap-x-6 md:max-w-[860px] md:gap-y-10 md:gap-x-8  lg:max-w-[1400px] lg:grid-cols-3 xl:max-w-none xl:gap-x-10 xl:gap-y-14 ">
          {work.map((workItem) => {
            return (
              <li key={workItem.frontmatter.slug}>
                <article>
                  <Link to={'/work/' + workItem.frontmatter.slug}>
                    <GatsbyImage
                      image={getImage(workItem.frontmatter.thumbnail)}
                      alt={workItem.frontmatter.title}
                      className="aspect-[5/4] transition hover:brightness-75"
                    />
                  </Link>

                  <div className="mt-2">
                    <Link
                      to={'/work/' + workItem.frontmatter.slug}
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
