import { useState } from 'react';
import './Admin.scss'
import Header from '../Header/Header';
import teacher1 from '../../images/teacher-1.png'


function Admin() {

    const [value, setValue] = useState({
        buasang: '',
        buatrua: '',
        buatoi: '',
    });


    const onChangeBuaSang = (event) => {
        // console.log(event.target.value)
        setValue({
            ...value,
            buasang: event.target.value
        })
    }
    const onChangeBuaTrua = (event) => {
        // console.log(event.target.value)
        setValue({
            ...value,
            buatrua: event.target.value
        })
    }

    const onChangeBuaToi = (event) => {
        // console.log(event.target.value)
        setValue({
            ...value,
            buatoi: event.target.value
        })
    }

    const handleSave = () => {
        // console.log(value)
        localStorage.setItem('menuSeed', JSON.stringify(value))
        console.log(JSON.parse(localStorage.getItem('menuSeed')))
        setValue({
            buasang: '',
            buatrua: '',
            buatoi: '',
        })
        // window.location.reload()
    }


    return (
        <>
            <Header />
            <section className="container" id="menu">
                <div className="title">
                    Menu
                </div>
                <div className="admin-body">
                    <div className="container">
                        <div className="row">
                            <div className="form-group col-8">
                                <label>
                                    Bữa sáng
                                </label>
                                <input type="email" className="form-control" placeholder="Bữa sáng"
                                    value={value.buasang} onChange={(event) => onChangeBuaSang(event)}
                                />
                            </div>
                            <div className="form-group col-8">
                                <label>
                                    Bữa trưa
                                </label>
                                <input type="email" className="form-control" placeholder="Bữa trưa"
                                    value={value.buatrua} onChange={(event) => onChangeBuaTrua(event)}
                                />
                            </div>
                            <div className="form-group col-8">
                                <label>
                                    Bữa tối
                                </label>
                                <input type="email" className="form-control" placeholder="Bữa tối"
                                    value={value.buatoi} onChange={(event) => onChangeBuaToi(event)}
                                />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primaty"
                                    onClick={() => handleSave()}
                                >Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" id="activity">
                <div className="title">
                    Activity
                </div>
                <div className="admin-body">
                    <div className="container">
                        <div className="row">
                            <div className="form-group col-8">
                                <label>
                                    Name
                                </label>
                                <input type="email" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group col-8">
                                <label>
                                    Description
                                </label>
                                <input type="description" className="form-control" placeholder="Description" />
                            </div>
                            <div className="form-group col-6">
                                <label>
                                    Image
                                </label>
                                <div className="preview-img-container">
                                    <input id="previewImg" type="file" />
                                    <label className="label-upload" htmlFor="previewImg">Tải ảnh <i
                                        className="fa fa-upload"></i></label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primaty">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container" id="fee">
                <div className="title">
                    Fee
                </div>
                <div className="admin-body">
                    <div className="container">
                        <div className="row">
                            <div className="form-group col-6">
                                <label>
                                    Name
                                </label>
                                <input type="email" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group col-6">
                                <label>
                                    Price
                                </label>
                                <input type="email" className="form-control" placeholder="Price" />
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primaty">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="footer">
                created by <span> SeedSchool </span> | all rights reserved!
            </div>
        </>
    )
}
export default Admin