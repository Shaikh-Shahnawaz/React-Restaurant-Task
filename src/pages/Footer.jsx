import React from 'react'
import logo from '../Images/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
    return (
        <>
        {/* style={{ position: 'relative', left: '600px' }} */}
            <div className="container-fluid bg-light mt-3">
                <div  className="container pt-5 py-3 text-center">

                    

                    <img className="rounded-circle" style={{ marginTop: '-5px' }} height="100" width="100" src={logo} alt="" />
                   
                        <p style={{ cursor: 'pointer' }} className="mt-2">
                        <span> <FacebookIcon /></span> 
                        <span className="mx-3"><LinkedInIcon /></span> 
                        <span><InstagramIcon /></span> 
                       
                        
                        </p>
                      

                </div>
                <div style={{ listStyle: 'none', fontWeight: 'bold', cursor: 'pointer' }} className=" container pb-5 d-flex justify-content-around">
                    <li style={{ color: '#dc3545' }}>HOME</li>
                    <li>ABOUT US</li>
                    <li>HOW IT WORKS?</li>
                    <li>MENUS</li>
                    <li>PROFILE</li>
                </div>


            </div>

            <div style={{ backgroundColor: 'grey', color: 'white' }} className="container-fluid d-flex justify-content-around pt-3">
                <p>All Rights Are Reserved 2021  Lokal Grub | Designed by Cart Geek</p>
                <div className="d-flex ">

                    <p>
                        <strong>Visa</strong>
                    </p>
                    <p className="mx-3">
                        <strong>Mastercard</strong>
                    </p>
                    <p>
                        <strong>American Express</strong>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
