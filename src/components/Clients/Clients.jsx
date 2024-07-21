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
              slidesPerView: 2,
              spaceBetween: 10,
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            850: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1250: {
              slidesPerView: 5,
              spaceBetween: 10,
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
          {[
            {
              className: "SwiperSlide",
              src: s1,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 1,
            },
            {
              className: "SwiperSlide",
              src: s2,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 2,
            },
            {
              className: "SwiperSlide",
              src: s3,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 3,
            },
            {
              className: "SwiperSlide",
              src: s4,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 4,
            },
            {
              className: "SwiperSlide",
              src: s5,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 5,
            },
            {
              className: "SwiperSlide",
              src: s6,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 6,
            },
            {
              className: "SwiperSlide",
              src: s7,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 7,
            },
          ]?.map((swiper) => (
            <SwiperSlide key={swiper?.id}>
              <div className={swiper?.className}>
                <Image src={swiper?.src} alt={swiper?.alt} />
              </div>
            </SwiperSlide>
          ))}
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
              slidesPerView: 2,
              spaceBetween: 10,
            },
            650: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            850: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1050: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1250: {
              slidesPerView: 5,
              spaceBetween: 10,
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
          {[
            {
              className: "SwiperSlide",
              src: s21,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 1,
            },
            {
              className: "SwiperSlide",
              src: s22,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 2,
            },
            {
              className: "SwiperSlide",
              src: s23,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 3,
            },
            {
              className: "SwiperSlide",
              src: s24,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 4,
            },
            {
              className: "SwiperSlide",
              src: s25,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 5,
            },
            {
              className: "SwiperSlide",
              src: s26,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 6,
            },
            {
              className: "SwiperSlide",
              src: s27,
              alt: "Eror",
              innerClass: "SwiperImg",
              id: 7,
            },
          ]?.map((swiper) => (
            <SwiperSlide key={swiper?.id}>
              <div className={swiper?.className}>
                <Image src={swiper?.src} alt={swiper?.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
