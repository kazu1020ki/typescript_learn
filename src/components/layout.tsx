import Head from 'next/head'
import Link from 'next/link'
import * as React from 'react'

type Props = {
  children?: React.ReactNode
  title?: string
  description?: string
  isHeader?: boolean
  isFooter?: boolean
}

function getHeader(title: string) {
  return (
    <header>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
          </div>
        </div>
      </section>
    </header>
  );
}
function getFooter() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Yomo Test Screen</p>
      </div>
    </footer>
  );
}

export default function Layout({ children, title, description, isHeader = true, isFooter = true }: Props) {
  const pageTitle = title || 'ホームページ'
  return (
    <div className="wrap">
      <head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
        <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      </head>
      {isHeader && (getHeader(title))}
      <section className="section">
        <div className="container">
          {children}
        </div>
      </section>
      <nav>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/hookdemo'>カウントアップ</Link></li>
          <li><Link href='/reducerdemo'>To do List</Link></li>
        </ul>
      </nav>
      {isFooter && (getFooter())}
    </div>

  )
}