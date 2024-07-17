import './Consulting.css';

//Consulting Images Imported
import src1 from '@/../../public/Consulting/1.svg'
import src2 from '@/../../public/Consulting/2.svg'
import src3 from '@/../../public/Consulting/3.svg'
import src4 from '@/../../public/Consulting/4.svg'
import src5 from '@/../../public/Consulting/5.svg'
import src6 from '@/../../public/Consulting/6.svg'
import side from '@/../../public/Consulting/side.svg'

import Image from 'next/image';





const Consulting = () => {
  return (
    <div className='container Cons'>
        <div className="row">
      <h1 className='title'>IT Consulting</h1>
        </div>
        <div className="row ConsMainRow">
            <div className="col-lg-6">
                <p className='ConsMainInfo'>We can improve the qualifications of your employees thereby increasing the efficiency of your company</p>
                <div className="row ConsRow">
                    <div className="col-lg-4 ConsCol">
                        <Image alt="" src={src1} className='ConsColImg'/>
                        <div className='ConsColInfo'>Frontend</div>
                    </div>
                    <div className="col-lg-4 ConsCol">
                        <Image alt="" src={src2} className='ConsColImg'/>
                        <div className='ConsColInfo'>Backend</div>
                    </div>
                    <div className="col-lg-4 ConsCol">
                        <Image alt="" src={src3} className='ConsColImg'/>
                        <div className='ConsColInfo'>Architecture</div>
                    </div>
                    <div className="col-lg-4 ConsCol">
                        <Image alt="" src={src4} className='ConsColImg'/>
                        <div className='ConsColInfo'>DevOps</div>
                    </div>
                    <div className="col-lg-4 ConsCol">
                        <Image alt="" src={src5} className='ConsColImg'/>
                        <div className='ConsColInfo'>UI/UX</div>
                    </div>
                    <div className="col-lg-4 ConsCol">
                        <Image alt="" src={src6} className='ConsColImg'/>
                        <div className='ConsColInfo'>QA</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ConsSlidedRow"  data-aos="zoom-in">
                <div className="ConsImgContainer">
                <Image alt="" src={side} className='ConsMainImg'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Consulting
