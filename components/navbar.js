import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <Head>
        <title>CBRE</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Landing page info" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CBRE" />
        <meta property="og:description" content="Landing page info" />
        <meta property="og:image" content="/public/share.jpg" />
        <meta property="og:url" content="PERMALINK" />
        <meta property="og:site_name" content="SITE NAME" />
      </Head>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-100">
        <div className="container md:px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              href="#"
            >
              <Image src="/img/svg/cbre-logo.svg" alt="Cbre Logo" width={80} height={40} />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-none bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars w-5 h-px bg-black block my-2"></i>
              <i className="fas fa-bars w-5 h-px bg-black block"></i>
              <i className="fas fa-bars w-5 h-px bg-black block my-2"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:m-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase text-black"
                  href="#section1"
                >
                  EDIFÍCIO
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase text-black"
                  href="#section3"
                >
                  QUADRO DE ÁREAS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase text-black"
                  href="#section4"
                >
                  CARACTERÍSTICAS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase text-black"
                  href="#section5"
                >
                  LOCALIZAÇÃO E ENVOLVENTE
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase text-black"
                  href="#footer"
                >
                  CONTACTOS
                </a>
              </li>
            </ul>
            <div className="lg:hidden flex">
              <ul className="flex">
                <li className="px-3">
                  <Link href="/"><a><Image src="/img/pt.png" alt="pt - lang" width={16} height={11} /></a></Link>
                </li>
                <li>
                  <Link href="/en"><a><Image src="/img/en.png" alt="en - Lang" width={16} height={11} /></a></Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:flex hidden">
            <ul className="flex">
              <li className="px-2">
                <Link href="/"><a><Image src="/img/pt.png" alt="pt - lang" width={16} height={11} /></a></Link>
              </li>
              <li className="px-2">
                <Link href="/en"><a><Image src="/img/en.png" alt="en - Lang" width={16} height={11} /></a></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}