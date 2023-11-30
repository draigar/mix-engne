/* eslint-disable react/no-unescaped-entities */
import { config } from "@/store"
import Link from "next/link"

export const Footer = () => {
    return (
        <>
            <footer className="sales-box padding-top-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <a href="#" className="cover-image">
                                <img src="tmp/sample-sales-cover.jpg" width="590" height="590" alt="" />
                            </a>
                        </div>
                        <div className="col-12 col-md-6">
                            <h3>New Stuff Each Week!</h3>
                            <p>Listen below and order your copy from Amazon, iTunes or your favorite record store. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia conseqa untur magni dolores eos qui ratione sequi.</p>
                            <p><a href="#" className="button button-small button-white">Amazon</a> <a href="#" className="button button-small button-white">iTunes</a> <a href="#" className="button button-small button-white">Spotify</a></p>
                        </div>
                    </div>
                </div>
            </footer>

            <footer id="footer" className="padding-top-bottom">
                <div className="container">
                    <div className="row">
                        <div className="widget-area col-12">
                            <section className="widget widget_text">
                                <h3 className="widget-title">Don't miss our weekly episodes. Subscribe now!</h3>
                                <div className="textwidget">
                                    <form className="mc4wp-form" method="post">
                                        <div className="mc4wp-form-fields">
                                            <p>A theme with a simple and organized approach to presenting your content with understated charm and undeniable appeal.</p>
                                            <p className="one-line">
                                                <label className="screen-reader-text" htmlFor="subscribe_email">Subscription Email</label>
                                                <input id="subscribe_email" name="email" required placeholder="Your email address&hellip;" type="email" />
                                                <input value="Subscribe" type="submit" className="button-color button-filled" />
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </section>
                            <section className="widget widget_nav">
                                <h3 className="screen-reader-text">Social Navigation</h3>
                                <nav>
                                    <ul className="social-navigation">
                                        <li className="menu-item menu-item-type-custom">
                                            <Link title="Facebook Profile" target="_blank" href="http://facebook.com"><span className="screen-reader-text">Facebook</span></Link>
                                        </li>
                                        <li className="menu-item menu-item-type-custom">
                                            <Link title="Google Play" target="_blank" href="http://play.google.com"><span className="screen-reader-text">Google Play</span></Link>
                                        </li>
                                        <li className="menu-item menu-item-type-custom">
                                            <Link title="Twitter Profile" target="_blank" href="http://twitter.com"><span className="screen-reader-text">Twitter</span></Link>
                                        </li>
                                        <li className="menu-item menu-item-type-custom">
                                            <Link title="SoundCloud" target="_blank" href="http://soundcloud.com/podcast"><span className="screen-reader-text">SoundCloud</span></Link>
                                        </li>
                                        <li className="menu-item menu-item-type-custom">
                                            <Link title="YouTube Channel" target="_blank" href="http://youtube.com"><span className="screen-reader-text">YouTube</span></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </section>
                        </div>
                        <div className="copyright col-12">
                            <p>&copy; {config.AppName} &hearts; in Europe. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}