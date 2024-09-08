import cx from './ServicesHero.module.css';
import image from '../../assets/ServicesHero.jpg'
import { useInView } from 'react-intersection-observer';

export default function ServicesHero({title}) {
    
    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will trigger only once
        threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
    });

    return (
        <div ref={ref}>
        <div className={cx.h1}>
            <h1>{title}</h1>
        </div>
        <div className={cx.h2}>
            <div className={cx.overlay}></div>
            <img src={image}/>
            <div className={cx.titleHeader}>
                <h4 className={`${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`}>{title}</h4>
                <div>
                    <i className={`fa-solid fa-angles-down bounce-down-up ${cx.icon}`}></i>
                    <i className={`fa-solid fa-angles-down bounce-down-up icon-delay ${cx.icon}`}></i>
                </div>
            </div>
        </div>
        </div>
    )
}
