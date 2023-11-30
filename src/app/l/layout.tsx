'use client'
import type { Metadata } from 'next'
import { Oswald, Karla } from 'next/font/google'
import './style.css'

import React, { useEffect, useState } from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Welcome to Mix Engne</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <meta name="description" content="Castilo is fully responsive creative audio podcast HTML5 site template that looks great on any device." />
      <meta name="keywords" content="Castilo, HTML5, Template, Design, Development" />

      {/* <link href="https://fonts.googleapis.com/css?family=Oswald:300,400%7CKarla:400,700" rel="stylesheet" /> */}

      <link rel="shortcut icon" href="favicon.png" />

      <body className='home'>
        {children}
      </body>
    </html>
  )
}
