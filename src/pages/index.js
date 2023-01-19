import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const work = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <header className="border-b border-neutral-300 dark:border-neutral-700">
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center py-12 px-4 md:max-w-lg md:py-16 md:px-6 xl:max-w-2xl xl:px-8 xl:py-20">
          <StaticImage
            src="../assets/images/portrait.jpeg"
            alt="Ole Kirchner - Portrait"
            className="w-24 rounded-full md:w-32 xl:w-40"
          />

          <h1 className="mt-4 text-center text-xl text-neutral-500 dark:text-neutral-400 md:mt-6 md:text-2xl xl:mt-8 xl:text-3xl">
            <b className="font-semibold text-black dark:text-white">
              Hey, I&#8217;m Ole.
            </b>{' '}
            A{' '}
            <b className="font-semibold text-black dark:text-white">
              webdesigner
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

      <ol className="mx-auto grid max-w-[420px] gap-y-8 px-4 py-12 sm:max-w-none sm:grid-cols-2 sm:gap-y-8 sm:gap-x-8 md:max-w-[860px] md:gap-y-10 md:py-16 md:px-6 lg:max-w-[1400px] lg:grid-cols-3 xl:max-w-none xl:grid-cols-[repeat(auto-fit,_minmax(320px,_1fr));] xl:gap-x-12 xl:gap-y-14 xl:px-8 xl:py-20">
        {work.map((workItem) => {
          return (
            <li key={workItem.frontmatter.slug}>
              <article>
                <Link to={'/work/' + workItem.frontmatter.slug}>
                  <GatsbyImage
                    image={getImage(workItem.frontmatter.thumbnail)}
                    alt={workItem.frontmatter.title}
                    className="aspect-[5/4] rounded-md transition hover:brightness-75"
                  />
                </Link>

                <div className="mt-2 md:mt-3 xl:mt-4">
                  <Link
                    to={'/work/' + workItem.frontmatter.slug}
                    className="text-lg font-semibold transition hover:text-neutral-500 hover:underline dark:hover:text-neutral-400"
                  >
                    {workItem.frontmatter.title}
                  </Link>

                  <div className="flex justify-between gap-x-4">
                    <div className="text-neutral-500 dark:text-neutral-400">
                      {workItem.frontmatter.categories}
                    </div>

                    <div className="text-neutral-500 dark:text-neutral-400">
                      {workItem.frontmatter.date}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Index

export const Head = () => <Seo title="Ole Kirchner | Personal website" />

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
