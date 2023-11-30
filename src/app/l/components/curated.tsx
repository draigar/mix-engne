import Image from "next/image"
import Link from "next/link"

export const Curated = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="latest-images">
                        <h3 className="add-separator"><span>Our Top <em>Music</em> Production Pros</span></h3>
                        <div className="row">
                            <div className="image-item col">
                                <div className="multiply-effect">
                                    <Link href="#" target="_blank">
                                        <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Mixing_Engineers2.jpg' width={300} height={300} className="first" />
                                        <span className="second">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Mixing_Engineers2.jpg' width={300} height={300} />
                                        </span>
                                        <span className="third">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Mixing_Engineers2.jpg' width={300} height={300} className="first" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-item col">
                                <div className="multiply-effect">
                                    <Link href="#" target="_blank">
                                        <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Producers.jpg' width={300} height={400} className="first" />
                                        <span className="second">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Producers.jpg' width={300} height={400} />
                                        </span>
                                        <span className="third">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Producers.jpg' width={300} height={400} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-item col d-none d-sm-block">
                                <div className="multiply-effect">
                                    <Link href="#" target="_blank">
                                        <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Mastering_Engineers3.png' width={300} height={300} className="first" />
                                        <span className="second">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Mastering_Engineers3.png' width={300} height={300} />
                                        </span>
                                        <span className="third">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Mastering_Engineers3.png' width={300} height={300} className="first" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-item col d-none d-sm-block">
                                <div className="multiply-effect">
                                    <Link href="#" target="_blank">
                                        <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Singers.jpg' width={300} height={300} className="first" />
                                        <span className="second">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Singers.jpg' width={300} height={300} />
                                        </span>
                                        <span className="third">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Singers.jpg' width={300} height={300} className="first" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="image-item col d-none d-sm-block">
                                <div className="multiply-effect">
                                    <Link href="#" target="_blank">
                                        <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Songwriters.jpg' width={300} height={300} className="first" />
                                        <span className="second">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Songwriters.jpg' width={300} height={300} />
                                        </span>
                                        <span className="third">
                                            <Image alt="" src='https://res.cloudinary.com/soundbetter/image/upload/f_auto,q_auto:best/v1658090344/homepage_assets/homepage_assets/Categories_-_Songwriters.jpg' width={300} height={300} className="first" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}