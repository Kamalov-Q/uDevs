import "./ERP.css";

//ERP images Imported
import src1 from '@/../../public/ERP/1.png'
import src2 from '@/../../public/ERP/2.svg'
import src3 from '@/../../public/ERP/3.svg'
import src4 from '@/../../public/ERP/4.svg'
import src5 from '@/../../public/ERP/5.svg'
import src6 from '@/../../public/ERP/6.svg'
import src7 from '@/../../public/ERP/7.svg'

import Image from "next/image";



const ERP = () => {
  return (
    <div className="container Erp" id="erp">
      <div className="row">
        <h1 className="title">ERP systems</h1>
      </div>
      <div className="row ErpRow">
        <div className="col-lg-6"  data-aos="zoom-in">
            <div className="ImgContainer">
            <Image alt="" src={src1} className="ErpLeftImg"/>
            </div>
        </div>
        <div className="col-lg-6">
            <p className="ErpColInfo">IT Systems of any level of complexity at a convenient time for you</p>
            <div className="row ErpInnerRow">
                <div className="col-lg-4 ErpInnerCol">
                    <Image alt="" src={src2} className="ErpColImg"/>
                    <div className="ErpInnerColInfo">CRM</div>
                </div>
                <div className="col-lg-4 ErpInnerCol">
                    <Image alt="" src={src3} className="ErpColImg"/>
                    <div className="ErpInnerColInfo">eLearning</div>
                </div>
                <div className="col-lg-4 ErpInnerCol">
                    <Image alt="" src={src4} className="ErpColImg"/>
                    <div className="ErpInnerColInfo">E-Commerce</div>
                </div>
                <div className="col-lg-4 ErpInnerCol">
                    <Image alt="" src={src5} className="ErpColImg"/>
                    <div className="ErpInnerColInfo">POS</div>
                </div>
                <div className="col-lg-4 ErpInnerCol">
                    <Image alt="" src={src6} className="ErpColImg"/>
                    <div className="ErpInnerColInfo">SmS / Email</div>
                </div>
                <div className="col-lg-4 ErpInnerCol">
                    <Image alt="" src={src7} className="ErpColImg"/>
                    <div className="ErpInnerColInfo">Warehouse</div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ERP;
