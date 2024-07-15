'use client'
import './HomePage.css';
import Image from 'next/image';
import homeImg from '@/../../public/Brand/brand.svg';
import homeImg2 from '@/../../public/Home/homeImg2.svg';

import {React, useEffect} from'react'
import AOS from "aos";
import 'aos/dist/aos.css'

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    })
  })
  return (
    <div className='container HomePage'>
        <div className="row HomePageRow">
            <div className="col-lg-6">
                <Image className='HomePageImg' src={homeImg} alt=''/>
                <h1 className='HomePageHeader'>IT-Outsourcing Company</h1>
                <h1 className='HomePageHeaderSlide'>Development of Mobile Application</h1>  
                <a href="#contact">
                <button className='HomePageBtn' href="#contact">Contact</button>
                </a>
            </div>
            <div className="col-lg-6" data-aos="zoom-in">
                <Image src={homeImg2} className='HomePageMainImg' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default HomePage
