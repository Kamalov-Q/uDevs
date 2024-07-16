import './HowTo.css'

//HowTo Images Imported
import src1 from '@/../../public/How/1.svg'
import src2 from '@/../../public/How/2.svg'
import src3 from '@/../../public/How/3.svg'
import src4 from '@/../../public/How/4.svg'
import src5 from '@/../../public/How/5.svg'

import Image from 'next/image'




const HowTo = () => {
  return (
    <div className='container How'>
      <div className="row">
      <h1 className='title'>How we work!</h1>
      </div>
      <div className="row HowMainRow">
        <div className="col HowMainCol">
          <Image alt="" src={src1} className='HowColImg'/>
          <div className='HowColHeader'>Contact</div>
          <p className='HowColInfo'>Send us your project request or project idea.</p>
        </div>
        <div className="col HowMainCol">
          <Image alt="" src={src2} className='HowColImg'/>
          <div className='HowColHeader'>Analysis</div>
          <p className='HowColInfo'>We will contact you to clarify your project requirements.</p>
        </div>
        <div className="col HowMainCol">
          <Image alt="" src={src3} className='HowColImg'/>
          <div className='HowColHeader'>Offer</div>
          <p className='HowColInfo'>We will provide you with our free, non-binding application.</p>
        </div>
        <div className="col HowMainCol">
          <Image alt="" src={src4} className='HowColImg'/>
          <div className='HowColHeader'>Team</div>
          <p className='HowColInfo'>We provide a team for your requirements.</p>
        </div>
        <div className="col HowMainCol">
          <Image alt="" src={src5} className='HowColImg'/>
          <div className='HowColHeader'>Start</div>
          <p className='HowColInfo'>You will get to know the team and we`ll get started.</p>
        </div>
      </div>
    </div>
  )
}

export default HowTo
