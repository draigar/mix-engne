'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import '../globals.css'

import React, { CSSProperties, FormEvent, useEffect, useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Button, Col, ConfigProvider, Layout, Row } from 'antd';
import '@/static/css/style.css';
import config from '@/config/config';
import * as con from '@/store'
import ProtectedRoute from '@/components/utilities/protectedRoute';
import 'antd/dist/antd';
import { observer } from "mobx-react";
import FeatherIcon from 'feather-icons-react';

const { theme } = config;

const inter = Inter({ subsets: ['latin'] })

import StyledComponentsRegistry from '@/lib/AntdRegistry';

import { usePathname, useRouter } from 'next/navigation';
import { appState, layoutMode } from '@/types';
import { Div, SmallScreenAuthInfo, SmallScreenSearch, TopMenuSearch } from '@/layout/style';
import Link from 'next/link';
import TopMenu from '@/layout/TopMenu';
import HeaderSearch from '@/components/header-search/header-search';
import AuthInfo from '@/components/utilities/auth-info/info';
import { darkTheme } from '@/config/theme/themeVariables';
import Scrollbars from 'react-custom-scrollbars';
import MenueItems from '@/layout/MenueItems';
import Cookies from 'js-cookie';

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {

  const [appLayoutMode, setAppLayoutMode] = useState<Partial<layoutMode>>({})
  const { darkMode, rtl, topMenu } = appLayoutMode;

  const [appState, setAppState] = useState<Partial<appState>>({})
  const { activeSearch, collapsed, hide, searchHide } = appState;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let authData: any = Cookies.get('Auth')
    authData = authData && JSON.parse(authData ?? '');
    if (authData?.auth?.access_token) {
      setIsLoggedIn(true)
    } else {
      router.push('/auth/login')
    }
  }, [router])

  useEffect(() => {
    const _config = con.config;
    const appLayoutMode: any = _config.layoutMode
    setAppLayoutMode(appLayoutMode);
    setAppState(_config.appState);
  }, [])

  const left = !rtl ? 'left' : 'right';

  const toggleCollapsed = () => {
    setAppState({ ...appState, collapsed: !collapsed })
  }

  const toggleCollapsedMobile = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 990) {
        setAppState({ ...appState, collapsed: !collapsed })
      }
    }
  }

  const onShowHide = () => {
    setAppState({ ...appState, hide: !hide, searchHide: !searchHide })
  }

  const toggleSearch = () => {
    setAppState({ ...appState, activeSearch: !activeSearch })
  }

  const handleSearchHide = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAppState({ ...appState, hide: !hide, searchHide: !searchHide })
  }

  const footerStyle = {
    padding: '20px 30px 18px',
    color: 'rgba(0, 0, 0, 0.65)',
    fontSize: '14px',
    background: 'rgba(255, 255, 255, .90)',
    width: '100%',
    boxShadow: '0 -5px 10px rgba(146,153,184, 0.05)',
  };

  const SideBarStyle: CSSProperties = {
    margin: '63px 0 0 0',
    padding: '15px 15px 55px 15px',
    overflowY: 'auto',
    height: '100vh',
    position: 'fixed',
    [left]: 0,
    zIndex: 998,
  };

  const renderView = ({ style, ...props }: any) => {
    const customStyle = {
      marginRight: 'auto',
      [rtl ? 'marginLeft' : 'marginRight']: '-17px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  };

  const renderThumbVertical = ({ style, ...props }: any) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: darkMode ? '#ffffff16' : '#F1F2F6',
      [left]: '2px',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const renderTrackVertical = () => {
    const thumbStyle: CSSProperties = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      [rtl ? 'left' : 'right']: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div style={thumbStyle} />;
  };

  const renderThumbHorizontal = ({ style, ...props }: any) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: darkMode ? '#ffffff16' : '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const { Header, Footer, Sider, Content } = Layout;

  const Render = ({ children }: { children: React.ReactNode }) => {
    return (
      <Div>
        <Layout className="layout">
          <Header
            style={{
              position: 'fixed',
              width: '100%',
              top: 0,
              [!rtl ? 'left' : 'right']: 0,
            }}
          >
            <Row>
              <Col lg={!topMenu ? 4 : 3} sm={6} xs={12} className="align-center-v navbar-brand">
                {!topMenu || typeof window !== "undefined" && window.innerWidth <= 991 ? (
                  <Button type="link" onClick={toggleCollapsed}>
                    <img src={`/static/img/icon/${collapsed ? 'right.svg' : 'left.svg'}`} alt="menu" />
                  </Button>
                ) : null}
                <Link
                  className={topMenu && typeof window !== "undefined" && window.innerWidth > 991 ? 'striking-logo top-menu' : 'striking-logo'}
                  href="/admin"
                >
                  <img
                    src={
                      !darkMode
                        ? '/static/img/Logo_Dark.svg'
                        : '/static/img/Logo_white.png'
                    }
                    alt=""
                  />
                </Link>
              </Col>

              <Col lg={!topMenu ? 14 : 15} md={8} sm={0} xs={0}>
                {topMenu && typeof window !== "undefined" && window.innerWidth > 991 ? <TopMenu /> : <HeaderSearch />}
              </Col>

              <Col lg={6} md={10} sm={0} xs={0}>
                {topMenu && window.innerWidth > 991 ? (
                  <TopMenuSearch>
                    <div className="top-right-wrap d-flex">
                      <Link
                        className={`${activeSearch ? 'search-toggle active' : 'search-toggle'}`}
                        onClick={() => {
                          toggleSearch();
                        }}
                        href="#"
                      >
                        <FeatherIcon icon="search" />
                        <FeatherIcon icon="x" />
                      </Link>
                      <div className={`${activeSearch ? 'topMenu-search-form show' : 'topMenu-search-form'}`}>
                        <form action="">
                          <span className="search-icon">
                            <FeatherIcon icon="search" />
                          </span>
                          <input title="search" type="text" name="search" />
                        </form>
                      </div>
                      <AuthInfo />
                    </div>
                  </TopMenuSearch>
                ) : <AuthInfo />}
              </Col>

              <Col md={0} sm={18} xs={12}>
                <div className="mobile-action">
                  <Link className="btn-search" onClick={() => handleSearchHide} href="#">
                    {searchHide ? <FeatherIcon icon="search" /> : <FeatherIcon icon="x" />}
                  </Link>
                  <Link className="btn-auth" onClick={onShowHide} href="#">
                    <FeatherIcon icon="more-vertical" />
                  </Link>
                </div>
              </Col>

            </Row>
          </Header>

          <div className="header-more">
            <Row>
              <Col md={0} sm={24} xs={24}>
                <div className="small-screen-headerRight">
                  <SmallScreenSearch hide={searchHide} darkMode={darkMode}>
                    <HeaderSearch />
                  </SmallScreenSearch>
                  <SmallScreenAuthInfo hide={hide} darkMode={darkMode}>
                    <AuthInfo />
                  </SmallScreenAuthInfo>
                </div>
              </Col>
            </Row>
          </div>

          <Layout>
            {!topMenu || typeof window !== "undefined" && window.innerWidth <= 991 ? (
              <ThemeProvider theme={darkTheme}>
                <Sider width={280} style={SideBarStyle} collapsed={collapsed} theme={!darkMode ? 'light' : 'dark'}>
                  <Scrollbars
                    className="custom-scrollbar"
                    autoHide
                    autoHideTimeout={500}
                    autoHideDuration={200}
                    renderThumbHorizontal={renderThumbHorizontal}
                    renderThumbVertical={renderThumbVertical}
                    renderView={renderView}
                    renderTrackVertical={renderTrackVertical}
                  >
                    <p className="sidebar-nav-title">MAIN MENU</p>
                    <MenueItems
                      topMenu={topMenu}
                      toggleCollapsed={toggleCollapsedMobile}
                      darkMode={darkMode}
                    />
                  </Scrollbars>
                </Sider>
              </ThemeProvider>
            ) : null}
            <Layout className="atbd-main-layout">
              <Content>
                {children}
                <Footer className="admin-footer" style={footerStyle}>
                  <Row>
                    <Col md={12} xs={24}>
                      <span className="admin-footer__copyright">2023 © Complaints Fix</span>
                    </Col>
                  </Row>
                </Footer>
              </Content>
            </Layout>
          </Layout>

        </Layout>
      </Div>
    )
  }


  return (
    <html lang="en">
      <body className={inter.className}>
        <ConfigProvider direction={rtl ? 'rtl' : 'ltr'}>
          <ThemeProvider theme={{ ...theme, rtl, topMenu, darkMode }}>
            <StyledComponentsRegistry>
              {isLoggedIn && (
                <Render>
                  {children}
                </Render>
              )}
            </StyledComponentsRegistry>
          </ThemeProvider>
        </ConfigProvider>
      </body>
    </html>
  )
}

export default observer(RootLayout);