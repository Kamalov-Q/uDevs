"use client";
import Image from "next/image";
import "./Navbar.css";
import brandImg from "@/../../public/Brand/brand.svg";
import { useState } from "react";

//Services Images Imported
import ser1 from '@/../../public/Service/service2.svg'
import ser2 from '@/../../public/Service/service3.svg'
import ser3 from '@/../../public/Service/service4.svg'
import ser4 from '@/../../public/Service/service5.svg'
import ser5 from '@/../../public/Service/service6.svg'


//Portfolio Images Imported
import por1 from '@/../../public/de1.svg';
import por2 from '@/../../public/sms1.svg';
import por3 from '@/../../public/good1.svg';
import por4 from '@/../../public/iman1.svg';

//Flag Images Imported
import rus from '@/../../public/rus.png'
import usa from '@/../../public/usa.webp'





const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    const burger = document.getElementById("burgerMenu");
    const ul = document.getElementById("navbarLinksUl");
    if (!open) {
      burger.style.display = "block";
      ul.classList.add("blockedMenu");
    } else {
      ul.classList.remove("blockedMenu");
    }
    setOpen(!open);
  };

  return (
    <div className="container Navbar">
      <label className="mobileBurger" htmlFor="burgerMenu" onClick={openMenu}>
        <svg
          className="MuiSvgIcon-root"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
        </svg>
      </label>
      <div className="mobileBurgerClose" id="bugerClose" onClick={openMenu}>
        <svg
          className="MuiSvgIcon-root"
          width={50}
          height={50}
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
        </svg>
      </div>
      <div className="nav">
        <div className="navbar-brand">
          <Image src={brandImg} alt="" className="navbar-brandImg" />
        </div>
        <div className="navbarLinks">
          <input type="checkbox" id="burgerMenu" />
          <ul className="navbarLinksUl" id="navbarLinksUl">
            <li>
              <a href="#direction">Direction</a>
            </li>
            <li>
              <a href="#command">Command</a>
            </li>
            <li className="navServices">
              <a href="#services" >
                Services
                <svg
                className="navbarSvg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.36731 4.14645C9.57884 3.95118 9.92181 3.95118 10.1333 4.14645C10.3449 4.34171 10.3449 4.65829 10.1333 4.85355L6.88334 7.85355C6.67828 8.04284 6.34809 8.04947 6.13431 7.86858L2.88431 5.11858C2.66378 4.93198 2.64889 4.6157 2.85103 4.41214C3.05318 4.20858 3.39582 4.19483 3.61634 4.38142L6.48403 6.80793L9.36731 4.14645Z"
                    fill="black"
                  />
                </svg>
                <div className="navbarServices">
                  <p style={{paddingBottom:"20px"}}>Services</p>
                  <div className="navbarServicesInner" href="#services">
                    <Image alt="" src={ser1} className="serv"/>
                    <div>Development of mobile applications</div>
                  </div>
                  <div className="navbarServicesInner" href="#erp">
                    <Image alt="" src={ser2} className="serv"/>
                    <div>Development and Implementing ERP systems</div>
                  </div>
                  <div className="navbarServicesInner" href="#Ui">
                    <Image alt="" src={ser3} className="serv"/>
                    <div>User Interface, User Experience design</div>
                  </div>
                  <div className="navbarServicesInner" href="#consulting">
                    <Image alt="" src={ser4} className="serv"/>
                    <div>IT Consulting</div>
                  </div>
                  <div className="navbarServicesInner" href="#opt">
                    <Image alt="" src={ser5} className="serv"/>
                    <div>Optimization IT Consulting infrastructure</div>
                  </div>
                  <div>
                    </div>
                </div>
              </a>
            </li>
            <li>
              <a href="#tools">Tools</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
            <li>
              <a href="#portfolio" className="navPortfolio">
                Portfolio
                <svg
                className="navbarSvg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.36731 4.14645C9.57884 3.95118 9.92181 3.95118 10.1333 4.14645C10.3449 4.34171 10.3449 4.65829 10.1333 4.85355L6.88334 7.85355C6.67828 8.04284 6.34809 8.04947 6.13431 7.86858L2.88431 5.11858C2.66378 4.93198 2.64889 4.6157 2.85103 4.41214C3.05318 4.20858 3.39582 4.19483 3.61634 4.38142L6.48403 6.80793L9.36731 4.14645Z"
                    fill="black"
                  />
                </svg>
                <div className="navbarPortfolio">
                  <p style={{paddingBottom:"10px"}}>Portfolio</p>
                  <div href="#delever">
                  <div className="navbarPortfolioInner">
                    <Image src={por1} alt="" />
                    <div>Delever</div>
                  </div>
                  </div>
                  <div href="#sms">
                  <div className="navbarPortfolioInner">
                    <Image src={por2} alt="" />
                    <div>SMS</div>
                  </div>
                  </div>
                  <div href="#goodZone">
                  <div className="navbarPortfolioInner">
                    <Image src={por3} alt="" />
                    <div>GoodZone</div>
                  </div>
                  </div>
                  <div href="#iman">
                  <div className="navbarPortfolioInner">
                    <Image src={por4} alt="" />
                    <div>Iman</div>
                  </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="navLang">
              <a href="">
                Languages{" "}
                <svg
                className="navbarSvg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.36731 4.14645C9.57884 3.95118 9.92181 3.95118 10.1333 4.14645C10.3449 4.34171 10.3449 4.65829 10.1333 4.85355L6.88334 7.85355C6.67828 8.04284 6.34809 8.04947 6.13431 7.86858L2.88431 5.11858C2.66378 4.93198 2.64889 4.6157 2.85103 4.41214C3.05318 4.20858 3.39582 4.19483 3.61634 4.38142L6.48403 6.80793L9.36731 4.14645Z"
                    fill="black"
                  />
                </svg>
              </a>
              <div className="navbarLanguages">
                <div className="rus"><Image src={rus} width={50} height={30} alt=""/> <span>Rus</span></div>
                <div className="eng"><Image src={usa} width={50} height={30} alt=""/> <span>Eng</span></div>
              </div>
            </li>
            <li>
              <a href="#contact">
                <button className="navbarBtn">Contact</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
