
/* eslint-disable @next/next/no-sync-scripts */
import Navbar from "@/components/Navbar/Navbar";
import HomePage from "@/components/Home/HomePage";
import Services from "@/components/Services/Services";
import Team from "@/pages/Team/Team";
import Mobile from "@/pages/MobileApp/Mobile";
import ERP from "@/pages/ERP/ERP";
import UI from "@/pages/UI/UI";
import Opt from "@/pages/Optimization/Opt";
import Consulting from "@/pages/Consulting/Consulting";
import Clients from "@/components/Clients/Clients";
import Delever from "@/pages/Delever/Delever";
import Sms from "@/pages/SMS/Sms";
import Good from "@/pages/GoodZone/Good";
import Iman from "@/pages/Iman/Iman";
import HowTo from "@/pages/HowTo/HowTo";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import ToolsFilt from "@/pages/ToolsFilt/ToolsFilt";


/* @kamalovquvomidin Kamalov Quvomiddin 15.07.2024 */
/* Updated 17.07.2024  14:54 by Kamalov Quvomiddin*/

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
    <ToolsFilt/>
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
