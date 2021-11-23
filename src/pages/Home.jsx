import React, { useEffect, useState } from 'react'
import Chef from '../components/Chef'
import WeeklyFood from '../components/WeeklyFood'
import Header from './Header'
import axios from 'axios'
import MexicanFood from '../components/MexicanFood'
import IndianFood from '../components/IndianFood'
import ItalianFood from '../components/ItalianFood'
import Footer from './Footer'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
function Home() {

    const [loaded, setLoaded] = useState(false)




    const [cusinList, setCusinList] = useState([])
    const [weekFood, setWeekFood] = useState([])
    const [chef, setChef] = useState([])

    const [mexican, setMexican] = useState([])
    const [indian, setIndian] = useState([])
    const [italian, setItalian] = useState([])

    const getData = () => {

        axios.post('http://63.142.251.101:3000/homepage').then((res) => {
            const data = res.data.data
            console.log(data)
            setCusinList(data.cusinie_lists)
            setWeekFood(data.popularweek)
            setChef(data.chefweek)

            setMexican(data.cusinie_data_result[13].cusinie_details_result)
            setIndian(data.cusinie_data_result[0].cusinie_details_result)
            setItalian(data.cusinie_data_result[2].cusinie_details_result)

        })
    }

    useEffect(() => {

        getData()

    }, [])

    // for Mexican 
    const mexicanData = mexican.map((ele, index) => (
        <MexicanFood
            chefName={ele.chefname}
            dishName={ele.dishMaster} // array
            key={index}
        />
    ))

    // for Indian 
    const indianData = indian.map((ele, index) => (

        <IndianFood
            chefName={ele.chefname}
            dishName={ele.dishMaster} // array
            key={index}
        />
    ))

    // for Italian 
    const italianData = italian.map((ele, index) => (

        <ItalianFood
            chefName={ele.chefname}
            dishName={ele.dishMaster} // array
            key={index}
        />
    ))


    return (
        <>
            {/* --------------------Headers here-------------------- */}
            <Header cusinList={cusinList} />

            {/* --------------------Weekly Food here-------------------- */}
            <WeeklyFood weekFood={weekFood} />

            {/* --------------------Chef of the week here-------------------- */}

            <Chef chef={chef} />

            {/* =========================County wise Dishes========================= */}
            <div className="container-fluid">

                {/* ------Mexican here------ */}
                <div className="container">

                    <div className="mt-5 d-flex justify-content-between">

                        <h3>Explore Mexican Dishes </h3>
                        <div>
                            <span style={{ borderRadius: '20px', cursor: 'pointer' }} className="bg-danger px-5 py-2 text-light me-4">View All</span>

                            <button className="btn btn-outline-success rounded-circle"><ArrowLeftIcon /></button>
                            <button className="ms-3 btn btn-outline-success rounded-circle"><ArrowRightIcon /></button>
                        </div>

                    </div>

                    <div> {mexicanData} </div>
                </div>

                {/* ---------Indian here------- */}
                <div className="container">

                    <div className="mt-5 d-flex justify-content-between">
                        <h3>Explore Indian Dishes </h3>
                        <div>
                            <span style={{ borderRadius: '20px', cursor: 'pointer' }} className="bg-danger px-5 py-2 text-light me-4">View All</span>

                            <button className="btn btn-outline-success rounded-circle"><ArrowLeftIcon /></button>
                            <button className="ms-3 btn btn-outline-success rounded-circle"><ArrowRightIcon /></button>
                        </div>

                    </div>

                    <div className=" d-flex"> {indianData}</div>
                </div>

                {/* ----------Italian here-------- */}

                <div className="container">

                    <div className="mt-5 d-flex justify-content-between">
                        <h3>Explore Italian Dishes </h3>
                        <div>
                            <span style={{ borderRadius: '20px', cursor: 'pointer' }} className="bg-danger px-5 py-2 text-light me-4">View All</span>

                            <button className="btn btn-outline-success rounded-circle"><ArrowLeftIcon /></button>
                            <button className="ms-3 btn btn-outline-success rounded-circle"><ArrowRightIcon /></button>
                        </div>

                    </div>

                    <div className=" d-flex"> {italianData}</div>
                </div>

            </div>










            {/* --------------------Footer here-------------------- */}
            <Footer />


        </>
    )
}

export default Home
