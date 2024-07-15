import './Opt.css';
import Image from 'next/image';

//Optimization Images Imported
import main from '@/../../public/Opt/main.png'
import src1 from '@/../../public/Opt/1.svg'
import src2 from '@/../../public/Opt/2.svg'
import src3 from '@/../../public/Opt/3.svg'
import src4 from '@/../../public/Opt/4.svg'
import src5 from '@/../../public/Opt/5.svg'
import src6 from '@/../../public/Opt/6.svg'
import src7 from '@/../../public/Opt/7.svg'





const Opt = () => {
  return (
    <div className='container Opt'>
        <div className="row">
      <h1 className='title'>Optimization Infrastructure</h1>
        </div>
        <div className="row OptMainRow">
            <div className="col-lg-6"  data-aos="zoom-in">
              <div className="OptImgContainer">
              <Image alt="" src={main} className='OptMainImg'/>
              </div>
            </div>
            <div className="col-lg-6">
                <p className='OptMainInfo'>Our experienced professionals will help you optimize your infrastructure</p>
                <div className="row OptInnerRow">
                    <div className="col-lg-4 OptCol">
                        <Image alt="" src={src1} className='OptColImg'/>
                        <div className='OptColInfo'>Architecture</div>
                    </div>
                    <div className="col-lg-4 OptCol">
                        <Image alt="" src={src2} className='OptColImg'/>
                        <div className='OptColInfo'>Auto testing</div>
                    </div>
                    <div className="col-lg-4 OptCol">
                        <Image alt="" src={src3} className='OptColImg'/>
                        <div className='OptColInfo'>Stress testing</div>
                    </div>
                    <div className="col-lg-4 OptCol">
                        <Image alt="" src={src4} className='OptColImg'/>
                        <div className='OptColInfo'>Load testing</div>
                    </div>
                    <div className="col-lg-4 OptCol">
                        <Image alt="" src={src5} className='OptColImg'/>
                        <div className='OptColInfo'>DevOps</div>
                    </div>
                    <div className="col-lg-4 OptCol">
                        <Image alt="" src={src6} className='OptColImg'/>
                        <div className='OptColInfo'>Cloud</div>
                    </div>
                    <div className="col-lg-4 OptCol">
                        <Image alt="" src={src7} className='OptColImg'/>
                        <div className='OptColInfo'>CI / CD</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Opt
