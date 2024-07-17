import './Contact.css'

//Contact Images Imported
import src1 from '@/../../public/Contact/1.svg'
import src2 from '@/../../public/Contact/2.svg'
import src3 from '@/../../public/Contact/3.svg'
import fac from '@/../../public/Contact/fac.svg'
import ins from '@/../../public/Contact/ins.svg'
import tel from '@/../../public/Contact/tel.svg'
import twit from '@/../../public/Contact/twit.svg'
import yout from '@/../../public/Contact/yout.svg'

import Image from 'next/image'

const Contact = () => {
  return (
    <div className='container Cont' id='contact'>
      <div className="row">
      <h1 className='title'>Contact Us</h1>
      </div>
      <div className="row ContMainRow">
        <div className="col-lg-6">
          <div className='ContMainRowInfo'>Leave us a message</div>
          <div>
            <form>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Your Email' />
              <textarea placeholder='Briefly describe your project'></textarea>
              <button className='ContactMainBtn'>Send</button>
            </form>
          </div>
        </div>
        <div className="col-lg-6 ContRightCol">
          <div className='row'>
          <div className='ContRightColInfo'>
            <Image alt='' src={src1}/>
            <span>Ташкент,  Мирзо-Улугбекский район, 5-й пр. Курган, 32  адрес</span>
          </div>
          <div className='ContRightColInfo'>
            <Image alt='' src={src2}/>
            <span>+998 33 66 00 999</span>
          </div>
          <div className='ContRightColInfo'>
            <Image alt='' src={src3}/>
            <span>azizbek.b@udevs.io</span>
          </div>
          <div className='ContRightColInfo'>
          <svg className="MuiSvgIcon-root" width={30} height={30} focusable="false" viewBox="0 0 24 24" aria-hidden="true" fill='#1B5BF7' style={{color:"1B5BF7", marginRight:"6px"}}><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path></svg>
            <strong style={{color:"#1B5BF7"}}> t.me/azizbekbakhodirov</strong>
          </div>
          </div>
          <div className="row">
            <div className="ContCol col">
            <svg className="MuiSvgIcon-root" width={40} height={40} fill='#1B5BF7' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"></path></svg>
            <svg className="MuiSvgIcon-root" width={40} height={40} focusable="false" fill='#1B5BF7' viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
            <svg className="MuiSvgIcon-root" width={40} height={40} focusable="false" fill='#1B5BF7' viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path></svg>
            <svg className="MuiSvgIcon-root" width={40} height={40} fill='#1B5BF7' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
            <div className='Map' style={{position:"relative", overflow:"hidden"}}><a href="https://yandex.uz/maps/org/204499754990/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px",position:"absolute", top:"0px"}}>Udevs</a><a href="https://yandex.uz/maps/10335/tashkent/category/software_companies/184105776/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"14px"}}>Dasturiy ta’minot  Toshkentda</a><a href="https://yandex.uz/maps/10335/tashkent/category/it_company/184106174/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"28px"}}>IT-kompaniya  Toshkentda</a><iframe src="https://yandex.uz/map-widget/v1/?ll=69.191786%2C41.322602&mode=search&oid=204499754990&ol=biz&z=18.63"  frameBorder="1" allowFullScreen={true} style={{position:"relative"}}></iframe></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
