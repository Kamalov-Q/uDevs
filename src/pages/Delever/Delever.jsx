import "./Delever.css";

//Delever Images Imported
import src1 from "@/../../public/Delever/1.png";
import src2 from "@/../../public/Delever/2.svg";
import src3 from "@/../../public/Delever/3.svg";
import src4 from "@/../../public/Delever/4.svg";
import src5 from "@/../../public/Delever/5.svg";
import src6 from "@/../../public/Delever/6.svg";
import src7 from "@/../../public/Delever/7.svg";
import header from "@/../../public/Delever/header.svg";

import Image from "next/image";

const Delever = () => {
  return (
    <div className="container Del" id="portfolio">
      <div className="row DelMainRow">
        <div className="col-lg-6"  data-aos="fade-right">
          <Image alt="" src={src1} className="DelMainImg" />
        </div>
        <div className="col-lg-6">
        <div>
        <Image alt="" src={header} className="DelHeaderImg" />
        </div>
        <div className="btnLikedImg">
        <Image alt="" src={src2} />
        <span>Delivery</span>
        </div>
        <p className="DelRightInfo">Delever - Delivery service automation targeted at both consumers and restaurants.</p>
        <h3 className="whatWe">What we did?</h3>
        <div className="row DelRightRow">
            <div className="col-lg-4 DelRightCol">
                <Image alt="" src={src3} className="DelRightColImg"/>
                <div className="DelRightColInfo">Website</div>
            </div>
            <div className="col-lg-4 DelRightCol">
                <Image alt="" src={src4} className="DelRightColImg"/>
                <div className="DelRightColInfo">Admin Panel</div>
            </div>
            <div className="col-lg-4 DelRightCol">
                <Image alt="" src={src5} className="DelRightColImg"/>
                <div className="DelRightColInfo">Cross Platform</div>
            </div>
            <div className="col-lg-4 DelRightCol">
                <Image alt="" src={src6} className="DelRightColImg"/>
                <div className="DelRightColInfo">Web Design</div>
            </div>
            <div className="col-lg-4 DelRightCol">
                <Image alt="" src={src7} className="DelRightColImg"/>
                <div className="DelRightColInfo">Mobile Design</div>
            </div>
        </div>
      </div>
      </div>
    
    </div>
  );
};

export default Delever;
