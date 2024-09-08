import { useInView } from 'react-intersection-observer';
import cx from './Card.module.css'
import PropTypes from 'prop-types';

export default function Card({ver,title,text,hasLink,iconCs,smallText,styles,img}) {
      const { ref, inView } = useInView({
    triggerOnce: true, // The animation will trigger only once
    threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
  });
    return (
        <>
        {ver == 1 &&
            (<div ref={ref} className={`${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} ${cx.container}`}>
            <h5 className={cx.title}>{title}</h5>
            <p className={cx.text}>{text}</p>
            {hasLink && <a className={cx.link}>KNOW MORE</a>}
        </div>)
        }


        {ver == 2 &&
            <div ref={ref} className={`${cx.v2container} ${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`}>
                <div className={cx.v2header}>
                    <span><i className={`${iconCs} ${cx.icon}`}></i></span>
                    <div className={cx.v2rSide}>
                        <span className='text-center text-sm'>{smallText}</span>
                        <h5 className={cx.title}>{title}</h5>
                    </div>
                </div>
                <p className={cx.v2text}>{text}</p>
                {hasLink && <a className={cx.link}>KNOW MORE</a>}
            </div>
        }

        {ver == 3 &&
            <div ref={ref} className={`${cx.v3container} ${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`} style={{...styles}}>
                <div className={cx.v3header}>
                    <div className={cx.v3rSide}>
                        <h5 className={cx.v3title}>{title}</h5>
                        <span className={cx.v3smallText}>{smallText}</span>
                    </div>
                </div>
            </div>
        }

        
        {ver == 4 &&
            <div ref={ref} className={`${cx.v4container} ${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`} style={{...styles}}>
            <div>
                <img src={img} className={cx.v4Img}/>
            </div>
                <div className={cx.v4header}>
                    <div className={cx.v4rSide}>
                        <h5 className={cx.v4title}>{title}</h5>
                        <span className={cx.v4smallText}>{smallText}</span>
                    </div>
                </div>
            </div>
        }


        </>
    )
}


Card.propTypes = {
  title: PropTypes.string.isRequired, // Only allow specific values
  text: PropTypes.string, // Only allow specific values
  img: PropTypes.string, // Only allow specific values
  ver: PropTypes.number.isRequired, // Only allow specific values
  iconCs: PropTypes.string, // Only allow specific values
  styles: PropTypes.object, // Only allow specific values
  smallText: PropTypes.string, // Only allow specific values
  hasLink: PropTypes.bool,            // Required string
};