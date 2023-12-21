import React from 'react'
import Image from 'next/image'
import globals from '../app/globals.css'
import logo from '../../public/images/logo.png'

function LandingPage() {
    return (
        <div className='bg-red-700 text-white font-semibold pt-16'>
            <div className="main text-center m-auto">
                <Image className='m-auto' src={logo} alt="Logo" width={200} height={150} />

                {/* <p className='text-xl md:text-2xl pt-3 '>Discove | Rate | Enjoy</p> */}

                <p className='text-xl md:text-2xl pt-3'>
                    <span className="mr-4">Discove</span>|
                    <span className="mx-4">Rate</span>|
                    <span className="ml-4">Enjoy</span>
                </p>
                <div className="container mx-auto">
                    <h1 className="text-5xl md:text-9xl  py-20">COMING SOON</h1>
                    <p className="text-base md:text-lg">Discover amazing products and services.</p>
                </div>
            </div>
        </div>
    )
}

export default LandingPage