import { useEffect, useState } from 'react';
import './Parent.scss'
import Header from '../Header/Header';
import s1 from '../../images/s1.jpg'
import s2 from '../../images/s2.jpg'
import s3 from '../../images/s3.jpg'
import s4 from '../../images/s3.jpg'
import s5 from '../../images/s5.jpg'
import s6 from '../../images/s6.jpg'
import teacher1 from '../../images/teacher-1.png'
import teacher2 from '../../images/teacher-2.png'
import teacher3 from '../../images/teacher-3.png'
import teacher4 from '../../images/teacher-4.png'
import contact from '../../images/contact-img.png'

function Parent() {
    const handleInput = () => {
    }
    const [value, setValue] = useState({
        buasang: '',
        buatrua: '',
        buatoi: '',
    });


    const [arrValue, setarrValue] = useState([]);

    useEffect(async () => {
        // let data = JSON.parse(localStorage.getItem('menuSeed'));
        var item = localStorage.getItem('menuSeed');
        let data = {}
        if (item === null) {
            localStorage.setItem('menuSeed', JSON.stringify({}))
        }
        try {
            data = JSON.parse(item);
        } catch (error) {
            data.log('err item', item);
        }
        console.log(data)
        if (data) {
            await setValue({
                buasang: data.buasang,
                buatrua: data.buatrua,
                buatoi: data.buatoi
            })
            console.log(value)
        }
    }, [])

    return (
        <>
            <Header />
            <section className="teacher background" id="teacher">

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

                </div>

            </section>


            <section className="services up-and-down" id="services">

                <h1 className="heading"> Activities </h1>

                <div className="box-container">

                    <div className="box">
                        <img src={s1} alt="" />
                        <div className="info">
                            <h3>Enroll</h3>
                        </div>
                    </div>

                    <div className="box">
                        <img src={s2} alt="" />
                        <div className="info">
                            <h3>Enroll</h3>
                        </div>
                    </div>

                    <div className="box">
                        <img src={s3} alt="" />
                        <div className="info">
                            <h3>Enroll</h3>
                        </div>
                    </div>

                    <div className="box">
                        <img src={s4} alt="" />
                        <div className="info">
                            <h3>Enroll</h3>
                        </div>
                    </div>

                    <div className="box">
                        <img src={s5} alt="" />
                        <div className="info">
                            <h3>Enroll</h3>
                        </div>
                    </div>

                    <div className="box">
                        <img src={s6} alt="" />
                        <div className="info">
                            <h3>Enroll</h3>
                        </div>
                    </div>

                </div>

            </section>

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

            <section className="timetable" id="timetable">
                <h1 className="heading"> Timetable </h1>
                <table id="customers">
                    <tr>
                        <th>Thứ hai</th>
                        <th>Thứ ba</th>
                        <th>Thứ tư</th>
                        <th>Thứ năm</th>
                        <th>Thứ sáu</th>
                        <th>Thứ bảy</th>
                    </tr>
                    <tr>
                        <td>GDCD</td>
                        <td>Anh</td>
                        <td>TD</td>
                        <td>Anh</td>
                        <td>Văn</td>
                        <td>Toán</td>
                    </tr>
                    <tr>
                        <td>Sử</td>
                        <td>Hoa</td>
                        <td>Địa</td>
                        <td>GDCD</td>
                        <td>Hóa</td>
                        <td>Múa</td>
                    </tr>
                    <tr>
                        <td>Địa</td>
                        <td>Sinh</td>
                        <td>Sử</td>
                        <td>TD</td>
                        <td>Toán</td>
                        <td>Triết</td>
                    </tr>
                    <tr>
                        <td>Toán</td>
                        <td>Địa</td>
                        <td>Sinh</td>
                        <td>Lý</td>
                        <td>Lý</td>
                        <td>Học</td>
                    </tr>
                    <tr>
                        <td>Hóa</td>
                        <td>Toán</td>
                        <td>Toán</td>
                        <td>Công nghệ</td>
                        <td>Sử</td>
                        <td>Sinh hoạt</td>
                    </tr>
                </table>
            </section>

            <section className="attendance" id="attendance">
                <h1 className="heading">Attendance Today</h1>
                <div className="attendance-time">
                    <p className="attendance-name subject">GDCD</p>
                    <p className="attendance-name subject active">Sử</p>
                    <p className="attendance-name subject">Địa</p>
                    <p className="attendance-name subject">Toán</p>
                    <p className="attendance-name subject">Hóa</p>
                </div>
                <div className="attendance-content">
                    <div className="attendance-item">
                        <p className="attendance-name">Status</p>
                        <p className="attendance-detail">Appear</p>
                    </div>
                    <div className="attendance-item">
                        <p className="attendance-name">Picture</p>
                        <div className="attendance-image">
                            <img src={teacher1} alt="#home" />
                        </div>
                    </div>
                    <div className="attendance-item">
                        <p className="attendance-name">Comment</p>
                        <p className="attendance-detail">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt.</p>
                    </div>
                </div>
            </section>

            <section className="menu" id="menu">
                <h1 className="heading"> Menu Today </h1>
                <div className="menu-detail">
                    <div className="menu-label">
                        <p className="menu-name">Bữa Sáng</p>
                        <p className="menu-item">{value.buasang}</p>
                    </div>
                    <div className="menu-label">
                        <p className="menu-name">Bữa Trưa</p>
                        <p className="menu-item">{value.buatrua}</p>
                    </div>
                    <div className="menu-label">
                        <p className="menu-name">Bữa Tối</p>
                        <p className="menu-item">{value.buatoi}</p>
                    </div>
                </div>
            </section>

            <section className="fee" id="fee">
                <h1 className="heading"> Fee </h1>
                <table id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Camping</td>
                        <td>600$</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>Booking</td>
                        <td>700$</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>Football</td>
                        <td>800$</td>
                        <td>Done</td>
                    </tr>
                </table>
            </section>

            <section className="contact background" id="contact">

                <div className="row">

                    <div className="contact-info">

                        <form action="" className="contact-form">

                            <h3>Feedback about teacher</h3>
                            <textarea placeholder="message" className="box message" name="" id="" cols="30" rows="10"></textarea>

                            <input type="submit" className="btn" value="send message" />

                        </form>

                    </div>

                    <div className="image">
                        <img src={contact} alt="" />
                    </div>
                </div>
            </section>



            <div className="footer">
                created by <span> SeedSchool </span> | all rights reserved!
            </div>
        </>
    )
}
export default Parent