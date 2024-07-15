import './Mobile.css';

//Mobile Images Imported
import side1 from '@/../../public/Mobile/1.svg'
import side2 from '@/../../public/Mobile/2.svg'
import side3 from '@/../../public/Mobile/3.svg'
import side4 from '@/../../public/Mobile/4.svg'
import side5 from '@/../../public/Mobile/5.svg'
import side6 from '@/../../public/Mobile/6.svg'
import sideright from '@/../../public/Mobile/right.png'
import bg from '@/../../public/Mobile/bg.png'

import Image from 'next/image';




const Mobile = () => {
  return (
    <div className='container Mobile' id='services'>
      <div className="row">
      <h1 className='title'>Development of mobile application</h1>
      </div>
      <div className="row MobileRow">
        <div className="col-lg-6">
          <p className='MobileInfo'>
          In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.
          </p>
          <div className="row MobileInnerRow">
            <div className="col-lg-4 MobileInnerCol">
              <Image src={side1} alt='' className='MobileInnerColImg'/>
              <div className='MobileInnerColInfo'>iOS</div>
            </div>
            <div className="col-lg-4 MobileInnerCol">
              <Image alt="" src={side2} className='MobileInnerColImg'/>
              <div className='MobileInnerColInfo'>Android</div>
            </div>
            <div className="col-lg-4 MobileInnerCol">
              <Image alt="" src={side3} className='MobileInnerColImg'/>
              <div className='MobileInnerColInfo'>Crossplatform</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <h2>Technologies</h2>
              <div className="row MobileInnerNRow">
              <div className="col-lg-4 MobileInnerColN">
              <Image alt="" src={side4} className='MobileInnerColImg'/>
              <div className='MobileInnerColInfo'>Swift</div>
            </div>
            <div className="col-lg-4 MobileInnerColN">
              <Image alt="" src={side5} className='MobileInnerColImg'/>
              <div className='MobileInnerColInfo'>Kotlin</div>
            </div>
            <div className="col-lg-4 MobileInnerColN">
              <Image alt="" src={side6} className='MobileInnerColImg'/>
              <div className='MobileInnerColInfo'>Flutter</div>
            </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 MobileInnerRight" data-aos="zoom-in">
          <Image alt="" src={sideright} className='MobileInnerRightImg'/>
        </div>
      </div>
    </div>
  )
}

export default Mobile
