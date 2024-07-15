import './Iman.css'

import Image from 'next/image'

import src1 from '@/../../public/Iman/1.svg'
import src2 from '@/../../public/Iman/2.svg'
import src3 from '@/../../public/Iman/3.svg'
import src4 from '@/../../public/Iman/4.svg'
import src5 from '@/../../public/Iman/5.svg'
import src6 from '@/../../public/Iman/6.png'




const Iman = () => {
  return (
    <div className="container Iman">
      <div className="row ImanMainRow">
        <div className="col-lg-6">
            <Image alt="" src={src1} className="ImanMainImg"/>
            <div className="btnLikedIman">
                <Image alt="" src={src2} className="ImanImg"/>
                <span>Finance</span>
            </div>
            <p className="ImanColInfo">Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and investors meet here.</p>
            <h3 className="whatWe">What we did?</h3>
            <div className="row ImanInnerRow">
                <div className="col-lg-4 ImanInnerCol">
                    <Image alt="" src={src3} className="ImanColImg"/>
                    <div className="ImanColInfo">Website</div>
                </div>
                <div className="col-lg-4 ImanInnerCol">
                    <Image alt="" src={src4} className="ImanColImg"/>
                    <div className="ImanColInfo">Admin Panel</div>
                </div>
                <div className="col-lg-4 ImanInnerCol">
                    <Image alt="" src={src5} className="ImanColImg"/>
                    <div className="ImanColInfo">Crossplatform</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6"  data-aos="zoom-in">
            <Image alt="" src={src6} className="ImanMainColImg"/>
        </div>
      </div>
    </div>
  )
}

export default Iman
