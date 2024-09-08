import { useInView } from 'react-intersection-observer';
import cx from './ImageTextGrid.module.css'

export default function x({smallText,MainImage,content,withSmallText,text,title2,title,outerStyle}) {
  const isMobile = window.innerWidth <= 768; // Example breakpoint for mobile

    
        const { ref, inView } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });
    return (
        <section ref={ref} className={cx.container2}>
                <div className={`container-70-90 row gy-4 ${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`} style={{margin:'auto',...outerStyle}}>
                    <div className='col-md-5'>
                        <div className={cx.left}>
                            <img src={MainImage}  />
                        </div>
                    </div>
                
                    <div className='col-md-7' style={{margin:'auto'}}>
                     {
                    withSmallText &&
                        <div className={cx.rightTop}>
                            <div className={cx.block}></div>
                            <span className={cx.blockSpan}>{smallText ? smallText : "Best Home Loans"}</span>
                        </div>
                     }
                        <h4 className={cx.rightTitle}>{title}</h4>
                        <span className={cx.rightSubTitle}>{text}</span>
                        {title2 && <h4 style={{fontSize:'31px',textAlign:'center',fontWeight:'bold',margin:'1.4rem 0'}}>{title2}</h4>}
                        <div className={`row g-3 gx-5 ${cx.rightGrid}`}>
                        {content.map((item,i) => {
                            return (
                                <div key={i} className='col-md-6'>
                                    <h3 className={cx.rightSmTitle}>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </section>
    )
}