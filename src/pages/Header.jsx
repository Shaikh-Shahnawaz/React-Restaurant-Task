import React from 'react'
import logo from '../Images/logo.png'
function Header({ cusinList }) {

    return (
        <>
            <p style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>Free Delivery on all <span style={{ 'color': 'red' }}>orders over $25</span> </p>

            <div className="container d-flex justify-content-between">
                <img style={{ marginTop: '-5px' }} height="100" width="100" src={logo} alt="" />

                <div className="mt-4">
                    <button className="btn btn-outline-danger">Become a Chef</button>
                    <button className="ms-4 btn btn-danger">Login</button>
                </div>

            </div>

            <div className="container-fluid bg-light  pt-5">
                <div className="container d-flex justify-content-around">

                    {
                        cusinList.map((ele) => (
                            <div>
                                <img className="ms-2 rounded-circle" src="https://source.unsplash.com//80x80/?burger" alt="..." />
                                <p className="ms-3 mt-2"> <strong>{ele.name}</strong></p>
                            </div>
                        ))

                    }

                </div>
            </div>

        </>
    )
}

export default Header
