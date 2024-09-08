import { useInView } from 'react-intersection-observer';
import cx from './DarkFullWidthCard.module.css'

export default function DarkFullWidthCard({title,text,containerStyle}) {
      
        const { ref, inView } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: .1,    // The percentage of the element that must be visible to trigger the animation
        });
    return (
        <div ref={ref} className={`${cx.container} ${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`} style={{...containerStyle}}>
            <h4 className={cx.title}>{title}</h4>
            {text && <p className={cx.text}>{text}</p>}
            <button className={cx.btn}>INTEREST RATE</button>
        </div>
    )
}