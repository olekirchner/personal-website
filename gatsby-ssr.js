import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="source-sans-pro"
      rel="preload"
      href="/fonts/source-sans-pro-v21-latin-regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="source-sans-pro"
      rel="preload"
      href="/fonts/source-sans-pro-v21-latin-600.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      key="kalam"
      rel="preload"
      href="/fonts/kalam-700.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ])
}