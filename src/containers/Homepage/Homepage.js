import { useState } from 'react';
import './Homepage.scss'
import Header from '../Header/Header';
import Anh from './images/home-img.png'
import icon1 from './images/left-icon1.png'
import icon2 from './images/left-icon2.png'
import icon3 from './images/left-icon3.png'
import stick from './images/stick.png'
import right1 from './images/right-icon1.png'
import right2 from './images/right-icon2.png'
import right3 from './images/right-icon3.png'
import about from './images/about-img.png'
import s1 from './images/s1.jpg'
import s2 from './images/s2.jpg'
import s3 from './images/s3.jpg'
import s4 from './images/s3.jpg'
import s5 from './images/s5.jpg'
import s6 from './images/s6.jpg'
import teacher1 from './images/teacher-1.png'
import teacher2 from './images/teacher-2.png'
import teacher3 from './images/teacher-3.png'
import teacher4 from './images/teacher-4.png'
import contact from './images/contact-img.png'

function Homepage() {
    const handleInput = () => {
    }
    const [value, setValue] = useState('');
    const [arrValue, setarrValue] = useState([]);
    return (
        <div classNameName='homepage-container'>
            <Header />
            <section className="home background" id="home">

                <div className="content">
                    <h1>welcome to SeedSchool</h1>
                    <h3>making education more fun.</h3>
                    <p>Educating changemakers since 2008, our wall-less, bamboo school nurtures holistic, innovative and
                        purpose-driven inquiry for a community of learners from around the globe..</p>
                    <a href="#" className="btn">learn more</a>
                </div>

                <div className="image">
                    <img src={Anh} alt="" />
                </div>

            </section>


            <section className="features up-and-down" id="features">
                <div className="box-container">

                    <h3 className="title">why childrens love us</h3>

                    <div className="box">
                        <img src={icon1} alt="" />
                        <div className="info">
                            <h3>funny conversations</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
                        </div>
                    </div>

                    <div className="box">
                        <img src={icon2} alt="" />
                        <div className="info">
                            <h3>Many activities</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
                        </div>
                    </div>

                    <div className="box">
                        <img src={icon3} alt="" />
                        <div className="info">
                            <h3>fun non-stop</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
                        </div>
                    </div>

                </div>

                <img className="stick" src={stick} alt="" />

                <div className="box-container">

                    <h3 className="title">why parents choose us</h3>

                    <div className="box">
                        <img src={right1} alt="" />
                        <div className="info">
                            <h3>Continuous monitoring</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
                        </div>
                    </div>

                    <div className="box">
                        <img src={right2} alt="" />
                        <div className="info">
                            <h3>Professionalism teachers</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
                        </div>
                    </div>

                    <div className="box">
                        <img src={right3} alt="" />
                        <div className="info">
                            <h3>Developed programs</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, dolor!</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="about background" id="about">

                <div className="image">
                    <img src={about} alt="" />
                </div>

                <div className="content">
                    <h3>a word about us</h3>
                    <p>Situated beside the ancient ruins of Tulum, Mexico, our wall-less campus immerses learning in the natural
                        environment and cultural heritage of this legendary Mayan city..</p>
                    <p>Designed to world-className sustainability standards, our campus spills out to breathtaking mountains and
                        indigenous plant life, taking our learning back to nature and into the future.</p>
                    <a href="#" className="btn">learn more</a>
                </div>

            </section>

            <section className="services up-and-down" id="services">

                <h1 className="heading"> what we teach your childrens </h1>

                <div className="box-container">

                    <a className="box" href='/activity'>
                        <img src={s1} alt="" />
                        <div className="info">
                            <h3>words and letters teaching</h3>
                        </div>
                    </a>

                    <a className="box" href='/activity'>
                        <img src={s2} alt="" />
                        <div className="info">
                            <h3>clay and crafting</h3>
                        </div>
                    </a>

                    <a className="box" href='/activity'>
                        <img src={s3} alt="" />
                        <div className="info">
                            <h3>drawing classNamees</h3>
                        </div>
                    </a>

                    <a className="box" href='/activity'>
                        <img src={s4} alt="" />
                        <div className="info">
                            <h3>english classNamees</h3>
                        </div>
                    </a>

                    <a className="box" href='/activity'>
                        <img src={s5} alt="" />
                        <div className="info">
                            <h3>playground for childrens</h3>
                        </div>
                    </a>

                    <a className="box" href='/activity'>
                        <img src={s6} alt="" />
                        <div className="info">
                            <h3>sports events</h3>
                        </div>
                    </a>

                </div>

            </section >

            <section className="teacher background" id="teacher">

                <h1 className="heading">our amazing teachers</h1>

                <div className="box-container">

                    <div className="box">
                        <img src={teacher1} alt="" />
                        <h3>Pham Hai Dang</h3>
                        <span>teacher</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                        <p>I have visited many different places and many schools but Seed School is the most unique and
                            impressive school I have ever visited.</p>
                    </div>

                    <div className="box">
                        <img src={teacher2} alt="" />
                        <h3>Pham Anh Minh</h3>
                        <span>teacher</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                        <p>I think all the students here at Seed School are incredibly lucky, because there is this great
                            atmosphere of learning about the things you care about.</p>
                    </div>

                    <div className="box">
                        <img src={teacher3} alt="" />
                        <h3>Nguyen Duc Hai</h3>
                        <span>teacher</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                        <p>At least here in Seed School we are trying to architect a new way of living. Seed School is a hope
                            spot for the planet, and all the students in it.</p>
                    </div>

                    <div className="box">
                        <img src={teacher4} alt="" />
                        <h3>Trieu Van Long</h3>
                        <span>teacher</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                        <p>Seed School is a hope spot for the planet, and all the students in it. At least here in Seed School
                            we are trying to architect a new way of living</p>
                    </div>

                </div>

            </section>

            <section className="contact background" id="contact">

                <div className="row">

                    <div className="contact-info">

                        <div className="box">
                            <h3 className="title">contact details</h3>
                            <p> <i className="fas fa-map-marker-alt"></i> Bach Khoa, Ha Noi </p>
                            <p> <i className="fas fa-envelope"></i> SeedSchool@gmail.com </p>
                            <p> <i className="fas fa-phone"></i> +123-456-7890 </p>
                        </div>

                        <div className="box">
                            <h3 className="title">follow us</h3>
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>

                        <div className="box">
                            <h3 className="title">newsletter</h3>
                            <div action="">
                                <input type="email" placeholder="enter your email" />
                                <input type="submit" className="btn" value="send" />
                            </div>
                        </div>

                    </div>

                    <div action="" className="contact-form">

                        <h3>contact us</h3>

                        <input type="text" placeholder="name" className="box" />
                        <input type="email" placeholder="email" className="box" />
                        <input type="number" placeholder="number" className="box" />
                        <textarea placeholder="message" className="box message" name="" id="" cols="30" rows="10"></textarea>

                        <input type="submit" className="btn" value="send message" />

                    </div>

                </div>

                <div className="image">
                    <img src={contact} alt="" />
                </div>

            </section>

        </div >
    )
}
export default Homepage