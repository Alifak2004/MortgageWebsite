import cx from './CTASection.module.css';
import ctaBg from '../../assets/ctaBg.jpg';
import { useInView } from 'react-intersection-observer';

export default function CTASection() {
        const { ref, inView } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });


    return (
        <section ref={ref} className={`${cx.sectionContainer}  `}>
            <div>
                <img src={ctaBg} className={cx.mainImg}/>
            </div>
            <div className={cx.bottomSec}>
                <div className={`${cx.icon} ${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`}></div>
                <h3 className={`${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`}>Talk To PAWAN Now!</h3>
                <button className={`${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} ${cx.btn}`}>CONTACT US</button>
                <span>Feel Free to Get in Touch for a No Obligations <a href='#'>Call <span>PAWAN</span> !!!</a></span>
            </div>
        </section>
    )
}