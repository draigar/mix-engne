import { Header } from "./header"

export const Hero = () => {
    return (
        <header id="featured" className="featured-content fade-background-0 padding-top-bottom">
            {/* <Header /> */}
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-8 col-xl-7">
                        <div className="latest-episode">
                            <div className="podcast-episode">
                                <p className="big text-uppercase opacity-50">Featured Episode</p>
                                <h1 className="entry-title"><a href="single-episode.html">A short wave goodbye for my good friend Francisco</a></h1>
                                <div className="podcast-episode" style={{ backgroundColor: 'green' }}>
                                    <div className="podcast-episode-player" data-episode-download="http://html.liviucerchez.com/common/preview1.mp3" data-episode-download-button="Download Episode (831.6 KB)" data-episode-duration="00:41" data-episode-size="831.6 KB">
                                        <audio className="wp-audio-shortcode" preload="none" style={{width: '100%'}} controls={true}>
                                            <source src="http://html.liviucerchez.com/common/preview1.mp3" type="audio/mpeg" />
                                            <source src="http://html.liviucerchez.com/common/preview1.ogg" type="audio/ogg" />
                                        </audio>
                                    </div>
                                </div>
                                <p>
                                    <a href="#" className="button button-filled button-color"><span className="zmdi zmdi-apple"></span> iTunes</a>
                                    <a href="#" className="button button-white"><span className="zmdi zmdi-google-play"></span> Google Play</a>
                                    <a href="#" className="button button-white"><span className="zmdi zmdi-rss"></span> RSS Feed</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}