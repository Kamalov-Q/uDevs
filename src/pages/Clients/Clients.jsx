"use client";
import "./Clients.css";

import Image from "next/image";

//Clients Images Imported
import s1 from "@/../../public/Cients/s1.svg";
import s2 from "@/../../public/Cients/s2.svg";
import s3 from "@/../../public/Cients/s3.svg";
import s4 from "@/../../public/Cients/s4.svg";
import s5 from "@/../../public/Cients/s5.svg";
import s6 from "@/../../public/Cients/s6.svg";
import s7 from "@/../../public/Cients/s7.svg";
import s21 from "@/../../public/Cients/s21.svg";
import s22 from "@/../../public/Cients/s22.svg";
import s23 from "@/../../public/Cients/s23.svg";
import s24 from "@/../../public/Cients/s24.svg";
import s25 from "@/../../public/Cients/s25.svg";
import s26 from "@/../../public/Cients/s26.svg";
import s27 from "@/../../public/Cients/s27.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Clients = () => {
  return (
    <div className="container Client" id="clients">
      <div className="row ClientRow">
        <h1 className="title">Our Clients</h1>
      </div>
      <div className="row">
        <Swiper
          slidesPerView={7}
          speed={9000}
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1250: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="Swiper"
        >
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s1} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s2} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s3} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s4} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s5} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s6} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s7} className="SwiperImg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="row">
        <Swiper
          slidesPerView={7}
          speed={9000}
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1250: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          loop={true}
          dir="rtl"
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="Swiper"
        >
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s21} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s22} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s23} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s24} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s25} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s26} className="SwiperImg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide">
              <Image alt="" src={s27} className="SwiperImg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
