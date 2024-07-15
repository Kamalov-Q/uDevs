import './Services.css'
import Image from 'next/image'

//Service Images Imported
import ser1 from '@/../../public/Service/service1.svg'
import ser2 from '@/../../public/Service/service2.svg'
import ser3 from '@/../../public/Service/service3.svg'
import ser4 from '@/../../public/Service/service4.svg'
import ser5 from '@/../../public/Service/service5.svg'
import ser6 from '@/../../public/Service/service6.svg'



const Services = () => {
  return (
    <div className='container Services' id='direction'>
        <div className="row">
      <h1 className='title'>Our Services</h1>
        </div>
        <div className="row ServicesRow">
            <div className="col-lg-4 ServicesCol">
                <Image src={ser1} alt='' className='ServicesImg'/>
                <div className='ServicesInfo'>Team</div>
            </div>
            <div className="col-lg-4 ServicesCol">
                <Image alt='' src={ser2} className='ServicesImg'/>
                <div className='ServicesInfo'>Development of mobile applications</div>
            </div>
            <div className="col-lg-4 ServicesCol">
                <Image alt='' src={ser3} className='ServicesImg'/>
                <div className='ServicesInfo'>Development and implementation ERP systems</div>
            </div>
            <div className="col-lg-4 ServicesCol">
                <Image alt='' src={ser4} className='ServicesImg'/>
                <div className='ServicesInfo'>User interface, User experience design</div>
            </div>
            <div className="col-lg-4 ServicesCol">
                <Image alt='' src={ser5} className='ServicesImg'/>
                <div className='ServicesInfo'>Optimization IT consulting infrastructure</div>
            </div>
            <div className="col-lg-4 ServicesCol">
                <Image alt='' src={ser6} className='ServicesImg'/>
                <div className='ServicesInfo'>IT consulting</div>
            </div>
        </div>
    </div>
  )
}

export default Services
