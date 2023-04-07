import Logo from '../public/assets/agriculture.png';
import investor from '../public/assets/investor.svg';
import learningImage from '../public/assets/learning-img.png';
import Image from 'next/image';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import Link from 'next/link';
const landing = () => {
  return (
    <div className="landing">
      <div className="eventRemainder">
        <p>Latest Events Here!</p>
        <span className="eventBtn">

          <Link href="/" style={{ color: 'white' }}>event</Link>
        </span>
      </div>
      <nav>
        <div className="container">
          <Image src={Logo} alt="logo" className="navbarLogo" />
          <div className="container-inner">
            <ul>
              <li><Link href="/news" className="news">News</Link></li>
            </ul>
            <ul>
              <li><Link className="register" href="/">Register</Link></li>
              <li><Link className="main-btn" href="/">Log In</Link></li>
            </ul>
          </div>
        </div>
      </nav>


      <section className="homepage">
        <div className="homeContainer">
          <div className="informationContainer">
            <h1>Welcome to <span style={{ fontWeight: 'bolder' }}>F2F</span></h1>
            <h3>The emarging agro-tech company</h3>
            <p>F2F is online platform which farmer can connect each other & the whole farmer community to the investors which are genuine interested in the agricultural  field.  This is the common platform where all the farmers discuss, grow themself and propose their unique ideas to the investors and raise funding.</p>
            <button className="main-btn">Know more</button>
          </div>
        </div>
      </section>



      <section className="trusties">
        <div className="trustContainer">
          <h4>Trusted By 100+ investing farms</h4>
          <div className="investFarms">
            <Image src={investor} alt="investor" />
            <Image src={investor} alt="investor" />
            <Image src={investor} alt="investor" />
            <Image src={investor} alt="investor" />
          </div>
        </div>
      </section>



      <section className="learning">
        <div className="learningContainer">
          <div className="learningInfo">
            <h3>Why you should learn form us?</h3>
            <p>Welcome to our agro-tech platform, a unique space that connects the entire farmer community with investors. We are committed to providing a comprehensive platform for farmers to showcase their innovative ideas, raise funds, sell their agricultural products, and share their knowledge and experience with others. Our platform is designed to empower farmers by providing them access to an extensive library of resources and information on agriculture, helping them to implement new techniques and practices in their fields.</p>
            <button className="main-btn">Learn Some New</button>
          </div>
          <div>
            <Image src={learningImage} alt="learningImage" />
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

export default landing;