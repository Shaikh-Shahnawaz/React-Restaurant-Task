import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

function WeeklyFood({ weekFood }) {
    return (
        <>
            <div className="container-fluid mt-5 ">

                <div className="mx-5 d-flex justify-content-between">
                    <h3>Popular Weekly Food</h3>

                    <div>

                        <button className="btn btn-outline-success rounded-circle"><ArrowLeftIcon /></button>
                        <button className="ms-3 btn btn-outline-success rounded-circle"><ArrowRightIcon /></button>
                    </div>

                </div>


                <div className="d-flex  justify-content-around">

                    {
                        weekFood.map((ele) => (

                            <div class="mt-4 card "  style={{ width: '19rem' }}>
                                <img src="https://source.unsplash.com//1600x900/?egg spinach" class="card-img-top" alt="..." />
                                <img style={{ marginTop: '-30px' }} height="70" width="70" src="https://source.unsplash.com//1600x900/?user" class="ms-2 border border-3 border-light rounded-circle" alt="..." />

                                <div class="card-body ">
                                    <h5 class="card-title">{ele.dish_masters[0].dishname}</h5>
                                    <p class="card-text">{ele.chefname}</p>

                                    <button className="btn btn-sm btn-outline-dark"><small style={{ backgroundColor: '#dc3545', paddingRight: '5px', paddingLeft: '5px', borderRadius: '3px' }}>4.5 ⭐</small> (10 reviews)</button>
                                    <button className=" ms-2 btn btn-sm btn-outline-success">View Details <ArrowRightAltIcon/> </button>


                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default WeeklyFood
