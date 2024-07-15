import "./Sms.css";

import Image from "next/image";

//SMS Images Imported

import src1 from '@/../../public/Sms/1.svg'
import src2 from '@/../../public/Sms/2.svg'
import src3 from '@/../../public/Sms/3.svg'
import src4 from '@/../../public/Sms/4.svg'
import src5 from '@/../../public/Sms/5.svg'
import src6 from '@/../../public/Sms/6.png'




const Sms = () => {
  return (
    <div className="container Sms">
      <div className="row SmsMainRow">
        <div className="col-lg-6">
            <Image alt="" src={src1} className="SmsMainImg"/>
            <div className="btnLikedSms">
                <Image alt="" src={src2} className="smsImg"/>
                <span>Notification</span>
            </div>
            <p className="SmsColInfo">Smsuz.uz - It is a platform for bulk SMS messaging.</p>
            <h3 className="whatWe">What we did?</h3>
            <div className="row SmsInnerRow">
                <div className="col-lg-4 SmsInnerCol">
                    <Image alt="" src={src3} className="SmsColImg"/>
                    <div className="SmsColInfo">Website</div>
                </div>
                <div className="col-lg-4 SmsInnerCol">
                    <Image alt="" src={src4} className="SmsColImg"/>
                    <div className="SmsColInfo">Admin Panel</div>
                </div>
                <div className="col-lg-4 SmsInnerCol">
                    <Image alt="" src={src5} className="SmsColImg"/>
                    <div className="SmsColInfo">Cross Platform</div>
                </div>
            </div>
        </div>
        <div className="col-lg-6"  data-aos="zoom-in">
            <Image alt="" src={src6} className="SmsMainColImg"/>
        </div>
      </div>
    </div>
  );
};

export default Sms;
