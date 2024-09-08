import cx from './Testamonials.module.css';
import img1 from '../../assets/people/img1.jpg'
import img2 from '../../assets/people/img2.jpg'
import img3 from '../../assets/people/img3.jpg'
import { Carousel } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
export default function Testamonials({classes}) {
    
        const { ref, inView } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });
    return (
        <>

        <div ref={ref}  className={`${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} d-flex align-items-center justify-content-center gap-3 ${classes}`} style={{margin:'5rem 0'}}>
            <div className={cx.img}>
                <img src={img1} />
            </div>
            <div className={cx.img}>
                <img src={img2} />
            </div>
            <div className={cx.img}>
                <img src={img3} />
            </div>
        </div>

        <section className={`${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`} style={{maxWidth:'1000px',margin:'auto',height:'350px'}}>
            <Carousel style={{height:200}} controls={false} indicators={false} draggable={true}>
                <Carousel.Item>
                <div style={{ height: 200, background: "var(--light-color)", color: "var(--primary-color)" }}>
                    <p style={{position: 'absolute',top: '112%',right: '50%',transform: 'translateX(50%)',fontFamily: 'helvetica, sans-serif',fontWeight:'600'}}>I am Content</p>
                    <p style={{position: 'absolute',top: '128%',right: '50%',transform: 'translateX(50%)',fontFamily: 'helvetica, sans-serif',fontWeight:'600'}}>CEO</p>
                </div>
                <Carousel.Caption>
                    <p style={{color:'var(--primary-color)',fontFamily: 'helvetica, sans-serif',fontWeight:'500'}}>lorem Impsum dodlo lorem Impsum dodlo lorem Impsum dodlo lorem Impsum dodlo lorem Impsum dodlo</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <div style={{ height: 200, background: "var(--light-color)", color: "var(--primary-color)" }}>
                    <p style={{    position: 'absolute',top: '112%',right: '50%',transform: 'translateX(50%)',fontFamily: 'helvetica, sans-serif',fontWeight:'600'}}>I am Content</p>
                    <p style={{position: 'absolute',top: '128%',right: '50%',transform: 'translateX(50%)',fontFamily: 'helvetica, sans-serif',fontWeight:'600'}}>CEO</p>

                </div>
                <Carousel.Caption>
                    <p style={{color:'var(--primary-color)',fontFamily: 'helvetica, sans-serif',fontWeight:'500'}}>lorem Impsum dodlo lorem Impsum dodlo lorem Impsum dodlo lorem Impsum dodlo lorem Impsum dodlo</p>
                </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </section>
        </>
    )
}