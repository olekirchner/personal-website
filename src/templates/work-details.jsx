import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import Layout from '../components/layout'
import Seo from '../components/seo'

import LightGallery from 'lightgallery/react'
import lgZoom from 'lightgallery/plugins/zoom'

import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'

const shortcodes = { Link, LightGallery }

const WorkDetailsTemplate = ({
  children,
  data: { mdx, previous, next, site },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  let previousImage = ''
  if (previous) {
    previousImage = getImage(previous.frontmatter.thumbnail)
  }

  let nextImage = ''
  if (next) {
    nextImage = getImage(next.frontmatter.thumbnail)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div className="mx-auto px-6 py-12 md:py-16 md:px-8 xl:px-12 xl:py-20">
        <div className="prose max-w-none text-center text-neutral-700 prose-h1:text-xl prose-p:mx-auto prose-p:max-w-2xl  prose-img:w-full prose-img:cursor-zoom-in  dark:prose-invert dark:text-neutral-300 md:prose-h1:text-2xl xl:prose-h1:text-3xl ">
          <div>
            <h1 className="mb-0">{mdx.frontmatter.title}</h1>
            <p className="mt-2 text-lg">{mdx.frontmatter.date}</p>
          </div>

          <LightGallery plugins={[lgZoom]} mode="lg-fade" selector={'.item'} licenseKey="37B26842-9E0243FE-A1853B0D-FEF219E2">
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </LightGallery>
        </div>
      </div>

      <div className="py-12 md:py-16 xl:py-20 border-t border-neutral-200 dark:border-neutral-700">
        <nav className="mx-auto max-w-7xl px-6 md:px-8 xl:px-12">
          <ul className="flex flex-col items-center justify-between gap-y-8 sm:flex-row sm:gap-x-4">
            <li className="max-w-[300px]">
              {next && (
                <div className="flex flex-col items-center sm:items-end">
                  <Link
                    to={'/work/' + next.frontmatter.slug}
                    rel="prev"
                    className="transition hover:text-neutral-500 hover:underline dark:hover:text-neutral-400"
                    title={next.frontmatter.title}
                  >
                    <span className="text-lg">Next Project</span>
                    <ArrowRight
                      size={20}
                      className="relative top-[-2px] left-[2px] inline"
                    />
                  </Link>

                  <Link
                    to={'/work/' + next.frontmatter.slug}
                    rel="prev"
                    className="mt-2 block"
                    title={next.frontmatter.title}
                  >
                    <GatsbyImage
                      image={nextImage}
                      alt={next.frontmatter.title}
                      className="aspect-[5/4] transition hover:brightness-75"
                    />
                  </Link>
                </div>
              )}
            </li>
            <li className="max-w-[300px] sm:-order-1">
              {previous && (
                <div className="flex flex-col items-center sm:items-start">
                  <Link
                    to={'/work/' + previous.frontmatter.slug}
                    rel="prev"
                    className="transition hover:text-neutral-500 hover:underline dark:hover:text-neutral-400"
                    title={previous.frontmatter.title}
                  >
                    <ArrowLeft
                      size={20}
                      className="relative top-[-2px] left-[-2px] inline"
                    />
                    <span className="text-lg">Previous Project</span>
                  </Link>

                  <Link
                    to={'/work/' + previous.frontmatter.slug}
                    rel="prev"
                    className="mt-2 block"
                    title={previous.frontmatter.title}
                  >
                    <GatsbyImage
                      image={previousImage}
                      alt={previous.frontmatter.title}
                      className="aspect-[5/4] transition hover:brightness-75"
                    />
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export const Head = ({ data: { mdx: work } }) => {
  return (
    <Seo
      title={work.frontmatter.title}
      description={work.frontmatter.description || work.excerpt}
    />
  )
}

export default WorkDetailsTemplate

export const pageQuery = graphql`
  query WorkDetailsBySlug(
    $id: String!
    $previousWorkId: String
    $nextWorkId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MM/YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousWorkId }) {
      frontmatter {
        slug
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    next: mdx(id: { eq: $nextWorkId }) {
      frontmatter {
        slug
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
