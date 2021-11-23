import React, { useEffect, useState } from 'react'

function Chef({ chef }) {


    return (
        <>
            <div style={{ height: '25vh' }} className="container-fluid bg-danger mt-4">
                <h3 className="text-center text-light pt-5 mb-3">Chef Of The Week</h3>

                <div style={{ width: '50vw' }} className="mb-5 container d-flex bg-light justify-content-between">
                    <img style={{ marginLeft: '-12px' }} height="250" width="300" src="https://source.unsplash.com//1600x900/?chef" class="" alt="..." />
                    <div className="ps-5 pe-3 mt-4">

                        <div className="d-flex justify-content-between">

                            <h4>{chef.map((ele) => (ele.chefname))}</h4>
                            <span className="mt-2">4.5 ⭐ (10 reviews)</span>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magnam iure quasi possimus numquam vel molestias reprehenderit doloribus, repellat aut quam quas harum dis ex quod maxime alias tenetur quas iste mollitia sit totam, odio obcaecati cum? </p>

                        <p style={{ color: 'green', cursor: 'pointer' }}>View Details</p>

                    </div>
                </div>

            </div>
            <br /><br /><br /><br />
        </>
    )
}

export default Chef
