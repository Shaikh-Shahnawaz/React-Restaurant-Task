import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function MexicanFood({chefName,dishName}) {

    return (
        <>
                <div class="mt-5 card ms-2" style={{ width: '19rem' }}>
                    <img src="https://source.unsplash.com//1600x900/?mexicanfood" class="card-img-top" alt="..." />
                    <img style={{ marginTop: '-30px' }} height="70" width="70" src="https://source.unsplash.com//1600x900/?user" class="ms-2 border border-3 border-light rounded-circle" alt="..." />

                    <div class="card-body ">
                        <h5 class="card-title">

                           {dishName.map((ele)=>(ele.dishname))}
                            
                        </h5>
                        <p class="card-text">{chefName}</p>

                        <button className="btn btn-sm btn-outline-dark"><small style={{ backgroundColor: '#dc3545', paddingRight: '5px', paddingLeft: '5px', borderRadius: '3px' }}>4.5 ⭐</small> (10 reviews)</button>
                        <button className=" ms-2 btn btn-sm btn-outline-success">View Details <ArrowRightAltIcon/> </button>


                    </div>
                </div>
        </>
    )
}

export default MexicanFood
