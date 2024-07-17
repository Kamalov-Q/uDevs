/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import Navbar from "@/pages/Navbar/Navbar";
import HomePage from "@/pages/Home/HomePage";
import Services from "@/pages/Services/Services";
import Team from "@/pages/Team/Team";
import Mobile from "@/pages/MobileApp/Mobile";
import ERP from "@/pages/ERP/ERP";
import UI from "@/pages/UI/UI";
import Opt from "@/pages/Optimization/Opt";
import Consulting from "@/pages/Consulting/Consulting";
import Tools from "@/pages/Tools/Tools";
import Clients from "@/pages/Clients/Clients";
import Delever from "@/pages/Delever/Delever";
import Sms from "@/pages/SMS/Sms";
import Good from "@/pages/GoodZone/Good";
import Iman from "@/pages/Iman/Iman";
import HowTo from "@/pages/HowTo/HowTo";
import Contact from "@/pages/Contact/Contact";
import Footer from "@/pages/Footer/Footer";


/* @kamalovquvomidin Kamalov Quvomiddin 15.07.2024 */

export default function Home() {
  return (
    <>
    <Navbar/>
    <HomePage/>
    <Services/>
    <Team/>
    <Mobile/>
    <ERP/>
    <UI/>
    <Opt/>
    <Consulting/>
    <Tools/>
    <Clients/>
    <Delever/>
    <Sms/>
    <Good/>
    <Iman/>
    <HowTo/>
    <Contact/>
    <Footer/>
    </>
  );
}
