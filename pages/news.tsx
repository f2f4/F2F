import { BsFacebook, BsTwitter } from 'react-icons/bs';
import Logo from '../public/assets/agriculture.png';
import newsImage from '../public/assets/newsImage.jpg';
import Image from 'next/image';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';

const news = () => {
    return (
        <div className='news'>
            <div className="eventRemainder">
                <p>Latest Events Here!</p>
                <span className="eventBtn">

                    <Link href="/landing" style={{ color: 'white' }}>event</Link>
                </span>
            </div>
            <nav>
                <div className="container">
                    <Image src={Logo} alt="logo" className='navbarLogo' />
                    <div className="container-inner">
                        <ul>
                            <li><a href="#" className="news"></a></li>
                        </ul>
                        <ul>
                            <li><a className="register" href="#">Register</a></li>
                            <li><a className="main-btn" href="#">Log In</a></li>
                        </ul>
                    </div>
                </div>
            </nav>



            <section className="newsSection">
                <div className="bannerContainer">
                    <h1>#latest and Updated News</h1>
                    <h4>top 10 trending news is here!!</h4>
                </div>
                <div className="newsContainer">
                    <h1 className="Heading">NEWS</h1>
                    <div className="newsList">
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                        <div className="newsBlock">
                            <Image src={newsImage} alt="news image" />
                            <p>4 April 2023</p>
                            <h3>Lorem ipsum dolor sit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatibus....</p>
                        </div>
                    </div>
                </div>
            </section>


            <footer>
                <div className="footerContainer">
                    <div className="logoContainer">
                        <Image src={Logo} alt="logo" />
                        <h1>F2F</h1>
                    </div>
                    <div className="pageLinks">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Learn</li>
                            <li>Ecommerce</li>
                        </ul>
                    </div>
                    <div className="social-icon">
                        <ul>
                            <li>
                                <a href="#">
                                    <BsFacebook />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <BsTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <h4>Copyright Protected © 2023 F2F. All Rights Reserved.</h4>
                </div>
            </footer>

        </div>
    )
}

export default news;