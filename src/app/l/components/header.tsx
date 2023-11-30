export const Header = () => {
    return (
        <header id="top" className="navbar navbar-sticky">
            <div className="container">
                <div className="row align-items-center">
                    <div className="site-title col col-lg-auto order-first">
                        <h1>
                            <a href="index.html" className="custom-logo-link" rel="home">
                                <img src="./landing/tmp/logo.png" className="custom-logo" width="76" height="18" alt="Castilo" />
                            </a>
                        </h1>
                    </div>
                    <nav id="site-menu" className="col-12 col-lg order-3 order-sm-4 order-lg-2">
                        <ul>
                            <li className="menu-item"><a href="about.html">About</a></li>
                            <li className="menu-item menu-item-has-children">
                                <a href="episodes.html">Episodes</a>
                                <a href="#" className="menu-expand"></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="episodes.html">Browse Episodes</a></li>
                                    <li className="menu-item"><a href="single-episode.html">Single Episode</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                                <a href="blog.html">Blog</a>
                                <a href="#" className="menu-expand"></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="blog.html">Browse Posts</a></li>
                                    <li className="menu-item"><a href="single-post.html">Single Post</a></li>
                                </ul>
                            </li>
                            <li className="menu-item menu-item-has-children"><a href="styleguide.html">Features</a>
                                <a href="#" className="menu-expand"></a>
                                <ul className="sub-menu">
                                    <li className="menu-item"><a href="styleguide.html">Styleguide</a></li>
                                    <li className="menu-item menu-item-has-children">
                                        <a href="#">Sub Menu</a>
                                        <a href="#" className="menu-expand"></a>
                                        <ul className="sub-menu">
                                            <li className="menu-item"><a href="#">Sub Menu 1</a></li>
                                            <li className="menu-item"><a href="#">Sub Menu 2</a></li>
                                            <li className="menu-item"><a href="#">Sub Menu 3</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item"><a href="404.html">404 - Page not found</a></li>
                                </ul>
                            </li>
                            <li className="menu-item"><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                    <nav id="social-links-menu" className="col-12 col-md-auto order-4 order-md-1 order-lg-3">
                        <ul className="social-navigation">
                            <li className="menu-item menu-item-type-custom">
                                <a title="Facebook Profile" target="_blank" href="http://facebook.com"><span className="screen-reader-text">Facebook</span></a>
                            </li>
                            <li className="menu-item menu-item-type-custom">
                                <a title="Google Play" target="_blank" href="http://play.google.com"><span className="screen-reader-text">Google Play</span></a>
                            </li>
                            <li className="menu-item menu-item-type-custom">
                                <a title="Twitter Profile" target="_blank" href="http://twitter.com"><span className="screen-reader-text">Twitter</span></a>
                            </li>
                            <li className="menu-item menu-item-type-custom">
                                <a title="SoundCloud" target="_blank" href="http://soundcloud.com/podcast"><span className="screen-reader-text">SoundCloud</span></a>
                            </li>
                            <li className="menu-item menu-item-type-custom">
                                <a title="YouTube Channel" target="_blank" href="http://youtube.com"><span className="screen-reader-text">YouTube</span></a>
                            </li>
                        </ul>
                    </nav>
                    <div className="call-to-action col-12 col-sm-auto order-5 order-sm-2 order-lg-4">
                        <a href="#" className="button button-small" target="_blank"><span className="zmdi zmdi-filter-list"></span> Live now</a>
                    </div>
                    <div className="site-menu-toggle col-auto order-2 order-sm-3">
                        <a href="#site-menu">
                            <span className="screen-reader-text">Toggle navigation</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}