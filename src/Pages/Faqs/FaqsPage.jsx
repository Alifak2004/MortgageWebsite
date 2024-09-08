import cx from './Faqs.module.css'
import ServicesHero from "../../Shared/ServicesHero/ServicesHero";
import s1Image from '../../assets/faqsImg.jpg'
import { Accordion } from 'react-bootstrap';
import { useState } from 'react';
import Testamonials from '../../Shared/Testamonials/Testamonials'

import faqImage2 from '../../assets/faqImage2.jpg'
import { useInView } from 'react-intersection-observer';
export default function FaqsPage() {
    const [resizeImage,setResizeImage] = useState(false);

    function onClickAccordionItem(e) {
        setResizeImage(e.target.classList.contains("collapsed"));
    }

  const isMobile = window.innerWidth <= 768; // Example breakpoint for mobil  

    const { ref, inView } = useInView({
        triggerOnce: true, // The animation will trigger only once
        threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
    });

    const { ref:ref2, inView:inView2 } = useInView({
        triggerOnce: true, // The animation will trigger only once
        threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
    });

     const { ref:ref3, inView:inView3 } = useInView({
        triggerOnce: true, // The animation will trigger only once
        threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
    });


    return (
        <>
            <ServicesHero title={"FAQ's"}/>
            <section ref={ref} className={` row gx-5`} style={{margin:'2rem auto',maxWidth:isMobile ? '90vw' : '70vw'}}>
                <div className={`${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} col-md-6`}>
                    <div className={cx.s1leftContainer}>
                        <img data-resizei={resizeImage} src={s1Image} className={cx.s1Img}/>
                        <button className={cx.s1LeftBtn}><i className="fa-solid fa-play d-block"></i><span>Watch Video</span></button>
                    </div>
                </div>
                <div className={`${inView ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} col-md-6`}>
                    <div className={cx.s1rightTop}>
                        <h3>Learn about Rates & Mortgages</h3>
                        <p>As someone who is interested in the world of finance and real estate, you may find it beneficial to dive deeper into the topic of rates and mortgages.</p>
                    </div>
                    <div className={cx.carousel}>
                          <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item onClick={onClickAccordionItem} eventKey="33">
                                <Accordion.Header>What is a mortgage rate?</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </Accordion.Body>
                            </Accordion.Item>
                             <Accordion.Item onClick={onClickAccordionItem}  eventKey="1">
                                <Accordion.Header>Is a variable rate better than a fixed rate?</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </Accordion.Body>
                            </Accordion.Item>
                             <Accordion.Item onClick={onClickAccordionItem}  eventKey="2">
                                <Accordion.Header>How do I lock my mortgage rate?</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </Accordion.Body>
                            </Accordion.Item>
                             <Accordion.Item onClick={onClickAccordionItem}  eventKey="3">
                                <Accordion.Header>What is a mortgage rate hold?</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </Accordion.Body>
                            </Accordion.Item>
                             <Accordion.Item onClick={onClickAccordionItem}  eventKey="4">
                                <Accordion.Header>How often do mortgage rates change?</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                    </div>
                </div>
            </section>

            <section style={{backgroundColor:'var(--primary-color)'}}>
                <div className={cx.s2container}>
                    <div className={cx.s2Top}>
                        <i className={`d-block fa-solid fa-location-arrow ${cx.topIcon} ${inView2 ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`}></i>
                        <span>Your Mortgage Down Payment</span>
                        <h2>How To Navigate Our Mortgage Rates</h2>
                    </div>
                    <div ref={ref2} className='row g-4'>
                        <div className={`col-md-4`} >
                            <div className={`${cx.s2Card} ${inView2 ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`}>
                                <i className={`fa-regular fa-newspaper ${cx.otherIcon}`}></i>
                                <h5>You Use Your Property</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className={`col-md-4 ${inView2 ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`} >
                            <div className={`${cx.s2Card}`}>
                                <i className={`fa-solid fa-scroll ${cx.otherIcon}`}></i>
                                <h5>The type of mortgage</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className={`col-md-4 ${inView2 ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`} >
                            <div className={`${cx.s2Card}`}>
                                <i className={`fa-solid fa-map-location-dot ${cx.otherIcon}`}></i>
                                <h5>With fixed mortgages</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div ref={ref3} className={`row ${inView3 ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'}`}>
                        <div className='col-md-12'>
                            <div className={cx.BottomSection}>
                                <div className='row ' style={{height:'100%'}}>
                                    <div className='col-md-4' style={{height:'100%'}}>
                                        <img className={cx.s2Image} src={faqImage2}/>
                                    </div>
                                    <div className={`col-md-8 ${cx.bRightSection}`}>
                                        <div className={cx.s3Top}>
                                            <div className={cx.block}></div>
                                        <span className={cx.blockSpan}>Online Booking</span>
                                        <h4>Contact us to start saving time and money</h4>
                                        </div>
                                    <div className='row g-4'>
                                        <div className='col-md-6'>
                                            <input className={cx.Input} placeholder='NAME' name='Name'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <input className={cx.Input} placeholder='EMAIL' name='Email'/>
                                        </div>
                                        <div className='col-md-6'>
                                            <input className={cx.Input} placeholder='SUBJECT' name='Subject'/>
                                        </div>
                                        <div className='col-md-6'>
                                        <button className={cx.submitBtn} type='submit'>MAKE AN APPOINTMENT</button>
                                        </div>
                                        <div className='col-md-6'>
                                            <i className="fa-solid fa-check pe-2"></i>
                                            <span>Your Submission was successful</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </section>

            <Testamonials classes={"weirdMargin"}/>
        </>
    )
}