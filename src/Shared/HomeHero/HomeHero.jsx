import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/Header2_1.jpg';
import img2 from '../../assets/Header2_2.jpg';
import img3 from '../../assets/Header2_3.jpg';
import cx from './HomeHero.module.css';
import { useInView } from 'react-intersection-observer';

const HomeHero = function() {

    const { ref, inView } = useInView({
            triggerOnce: true, // Trigger only once when it enters the viewport
            threshold: 0.1, // Percentage of the element that should be visible
        });

    return (
      <div  ref={ref}>
      <Carousel className={`box ${inView ? 'fade-in' : 'fade-out'}`}  fade draggable indicators={false} >
       <Carousel.Item className={cx.wrapper}>
        <img  src={img1}/>
        <Carousel.Caption>
          <h2 className={cx.MainText}>Empowering Financial Security for Everyone </h2>
          <p className={cx.SubText}>
We are committed to providing accessible and reliable financial services to help individuals and families.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
       <Carousel.Item className={cx.wrapper}>
        <img  src={img2}/>
        <Carousel.Caption>
          <h2 className={cx.MainText}>Empowering Financial Security for Everyone</h2>
          <p className={cx.SubText}>
            We are committed to providing accessible and reliable financial services to help individuals and families.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={cx.wrapper}>
        <img  src={img3}/>
        <Carousel.Caption>
          <h2 className={cx.MainText}>Empowering Financial Security for Everyone</h2>
          <p className={cx.SubText}>
            We are committed to providing accessible and reliable financial services to help individuals and families. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>

    )
}


export default HomeHero;