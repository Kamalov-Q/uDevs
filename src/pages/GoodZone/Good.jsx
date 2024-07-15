import './Good.css'
import Image from 'next/image'

//GoodZone Images Imported
import src1 from '@/../../public/Good/1.png'
import src2 from '@/../../public/Good/2.svg'
import src3 from '@/../../public/Good/3.svg'
import src4 from '@/../../public/Good/4.svg'
import src5 from '@/../../public/Good/5.svg'
import src6 from '@/../../public/Good/6.svg'
import src7 from '@/../../public/Good/7.svg'
import src8 from '@/../../public/Good/8.png'



const Good = () => {
  return (
    <div className="container Good">
      <div className="row GoodMainRow">
        <div className="col-lg-6"  data-aos="fade-right">
          <Image alt='' src={src8} className="GoodMainImg" />
        </div>
        <div className="col-lg-6">
        <div>
        <Image alt='' src={src1} className="GoodHeaderImg" />
        </div>
        <div className="btnLikedImgGood">
        <Image alt='' src={src2} />
        <span>E-Commerce</span>
        </div>
        <p className="GoodRightInfo">Goodzone - Internet shop of household appliances in Uzbekistan.</p>
        <h3 className="whatWe">What we did?</h3>
        <div className="row GoodRightRow">
            <div className="col-lg-4 GoodRightCol">
                <Image alt='' src={src3} className="GoodRightColImg"/>
                <div className="GoodRightColInfo">Website</div>
            </div>
            <div className="col-lg-4 GoodRightCol">
                <Image alt='' src={src4} className="GoodRightColImg"/>
                <div className="GoodRightColInfo">Admin Panel</div>
            </div>
            <div className="col-lg-4 GoodRightCol">
                <Image alt='' src={src5} className="GoodRightColImg"/>
                <div className="GoodRightColInfo">Cross Platform</div>
            </div>
            <div className="col-lg-4 GoodRightCol">
                <Image alt='' src={src6} className="GoodRightColImg"/>
                <div className="GoodRightColInfo">Web Design</div>
            </div>
            <div className="col-lg-4 GoodRightCol">
                <Image alt='' src={src7} className="GoodRightColImg"/>
                <div className="GoodRightColInfo">Mobile Design</div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Good
