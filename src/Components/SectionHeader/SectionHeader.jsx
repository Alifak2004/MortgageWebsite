import { useInView } from 'react-intersection-observer';
import cx from './SectionHeader.module.css';

export default function SectionHeader({text,isSmall,text2,mb,subText}) {
    const { ref, inView } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });
    return (
        <div ref={ref} className={cx.servicesTitle} style={{marginBottom:mb ? mb : '5rem'}}>
            {/* <i className="fa-solid fa-people-roof"></i> */}
            <div className={cx.mask}></div>
            <h2  className={`${cx.servicesTitle} ${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} ${isSmall ? cx.smaller : ''}`}>{text}</h2>
            {text2 && (<div className={cx.header}>
                <h1 >{text2}</h1>
            </div>)}
            {subText && <p style={{fontSize:'20px',margin:'1rem 0',textAlign:'center'}}>{subText}</p>}
        </div>
    )
}
