import Header1Icon from '../../Components/Header1Icon/Header1Icon';
import cx from './PreFooter.module.css';
export default function PreFooter() {
    return (
        
        <section className={` ${cx.container}`} style={{}}>
        <div className='row' style={{maxWidth:'1100px',margin:'auto',padding:'3rem 0'}}>
        <div className={`col-md-6 ${cx.left}`} >
            <h4>Quick Contact</h4>
            <p>At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. </p>
            <br />
            <Header1Icon isBold={true} iconCs='fa-solid fa-location-dot' text='Sydney, Austrailia'/>
            <br />
            <Header1Icon isBold={true} iconCs='fa-solid fa-phone' text='0468328227'/>
            <br />
            <Header1Icon isBold={true} iconCs='fa-solid fa-envelope' text=''/>

        </div>

        <div className={`col-md-6 ${cx.right}`}>
            <div className=''>
                <h4>Opening Hours</h4>
                <div className={cx.time}>
                    <p>MON TO FRI</p>
                    <span className={`${cx.points}`}></span>
                    <span>9:00AM | 5:00PM</span>
                </div>
                <div className={cx.time}>
                    <p>SAT TO SUN</p>
                    <span className={`${cx.points}`}></span>
                    <span>APPOINTMENTS ONLY</span>
                </div>
                <button className={cx.btn}>SCHEDULE A VISIT</button>
            </div>
        </div>
        </div>
        </section>
    )
}