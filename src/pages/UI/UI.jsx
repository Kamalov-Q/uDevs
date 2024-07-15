import "./Ui.css";

//UI Images Imported
import src1 from '@/../../public/UI/1.svg'
import src2 from '@/../../public/UI/2.svg'
import src3 from '@/../../public/UI/3.svg'
import src4 from '@/../../public/UI/4.svg'
import src5 from '@/../../public/UI/5.svg'
import src6 from '@/../../public/UI/6.svg'
import src7 from '@/../../public/UI/7.svg'
import src8 from '@/../../public/UI/8.svg'
import src9 from '@/../../public/UI/9.svg'
import src10 from '@/../../public/UI/10.svg'
import side from '@/../../public/UI/side.png'

import Image from "next/image";



const UI = () => {
  return (
    <div className="container Ui">
      <div className="row">
        <h1 className="title">UI / UX design</h1>
      </div>
      <div className="row UiMainRow">
        <div className="col-lg-6">
            <p className="UiInfo">Our company takes a human-centered approach to design</p>
            <div className="row UiRow">
                <div className="col-lg-4 UiCol">
                    <Image alt="" src={src1} className="UiColImg" />
                    <div className="UiColInfo">Ux</div>
                </div>
                <div className="col-lg-4 UiCol">
                    <Image alt="" src={src2} className="UiColImg"/>
                    <div className="UiColInfo">UI</div>
                </div>
                <div className="col-lg-4 UiCol">
                    <Image alt="" src={src3} className="UiColImg"/>
                    <div className="UiColInfo">Prototyping</div>
                </div>
                <div className="col-lg-4 UiCol">
                    <Image alt="" src={src4} className="UiColImg"/>
                    <div className="UiColInfo">Mobile Design</div>
                </div>
                <div className="col-lg-4 UiCol">
                    <Image alt="" src={src5} className="UiColImg"/>
                    <div className="UiColInfo">Web Design</div>
                </div>
                <div className="col-lg-4 UiCol">
                    <Image alt="" src={src6} className="UiColImg"/>
                    <div className="UiColInfo">Atomic Design</div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <h1 className="UiColHeader">Technologies</h1>
                </div>
                <div className="row UiInnerRow">
                    <div className="col-lg-3 UiInnerRowCol">
                        <Image alt="" src={src7} className="UiColInnerImg"/>
                        <div className="UiInnerRowColInfo">Figma</div>
                    </div>
                    <div className="col-lg-3 UiInnerRowCol">
                        <Image alt="" src={src8} className="UiColInnerImg"/>
                        <div className="UiInnerRowColInfo">Sketch</div>
                    </div>
                    <div className="col-lg-3 UiInnerRowCol">
                        <Image alt="" src={src9} style={{width:"40px", height:"55px"}} className="UiColInnerImg"/>
                        <div className="UiInnerRowColInfo">Lottie</div>
                    </div>
                    <div className="col-lg-3 UiInnerRowCol">
                        <Image alt="" src={src10} className="UiColInnerImg"/>
                        <div className="UiInnerRowColInfo">Illustrator</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6 UiSlidedRow"  data-aos="zoom-in">
            <div className="imgContainer">
                <Image alt="" src={side} className="sideImg"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UI;
