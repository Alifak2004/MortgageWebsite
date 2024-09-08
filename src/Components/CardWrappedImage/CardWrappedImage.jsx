import { useInView } from 'react-intersection-observer';
import cx from './CardWrappedImage.module.css';

export default function CardWrappedImage({img,title,text}) {
      
        const { ref, inView } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });

    return (
        <section ref={ref} className={`${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} ${cx.container}`}>
            <div className={cx.card1}>
                <img src={img}/>
            </div>
            <div className={cx.card2}>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        </section>
    )
}
