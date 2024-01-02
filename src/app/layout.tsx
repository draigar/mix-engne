'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import React, { useEffect, useState } from 'react';
import './globals.css'
import { QueryClientProvider } from 'react-query';
import { rootClientQuery } from '@/config';
import { usePathname, useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { authStore } from '@/store';
import { toJS } from 'mobx';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    // let authData: any = Cookies.get('Auth')
    // authData = authData && JSON.parse(authData ?? '');
    const authData = authStore
    if (!authData?.auth?.access_token && pathName.endsWith('/')) {
      router.push('/l')
    } else if (authData?.auth?.access_token && pathName.endsWith('/')) {
      const userRole = toJS(authData?.user)
      if (userRole.role === 1) {
        router.push('/d/admin')
      } else if (userRole.role === 2) {
        router.push('/d/engineer')
      } else if (userRole.role === 3) {
        router.push('/d/user')
      }
    }
  }, [pathName, router])

  return (
    <html lang="en">
      <title>Welcome to Mix Engne Portal</title>

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <meta name="description" content="" />
      <meta name="keywords" content="" />

      {/* <link href="https://fonts.googleapis.com/css?family=Oswald:300,400%7CKarla:400,700" rel="stylesheet" /> */}

      <link rel="shortcut icon" href="favicon.png" />

      <body>
        <QueryClientProvider client={rootClientQuery}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  )
}
