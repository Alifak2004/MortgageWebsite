import HomeHero from "../../Shared/HomeHero/HomeHero";
import Card from "../../Components/Card/Card";
import cx from './HomePage.module.css'
import serviceImg1 from '../../assets/Services/img1.jpg'
import serviceImg2 from '../../assets/Services/img2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import serviceGrandpa from '../../assets/Services/afterServiceImg.jpg'
import believeImg from '../../assets/Services/believe.jpg'
import section5Img from '../../assets/Services/section5Img.jpg'
import contactImg from '../../assets/Services/contact.jpg'
import HomeImg from '../../assets/Services/Home.png'
import Header1Icon from "../../Components/Header1Icon/Header1Icon";
import SocialLink from "../../Components/SocialLink/SocialLink";
import CTASection from "../../Shared/CTASection/CTASection";
import { useInView } from "react-intersection-observer";
export default function HomePage() {
  const isMobile = window.innerWidth <= 768; // Example breakpoint for mobile

    let card1Top = "-89px";
    let card1Left= '50px';
    let card2Bottom = '50px';
    let Card2Right = '17%';
    let section5Style = {}
    if(isMobile) {
        card1Top = '-1000px'
        section5Style = {position: 'relative',top: '200px',marginBottom: '12rem'}
    }

      const { ref, inView } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });

         const { ref:ref2, inView:inViewS4 } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });

        
         const { ref:contactRef, inView:inViewContact } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });
        

    
        
    return (
        <>
        <HomeHero />
        {/* SECTION 1 */}
        <section  style={{maxWidth:"100%",backgroundColor:'var(--primary-color)',borderTop:'8px solid var(--secondary-color)',marginTop:'.6rem',padding:'2rem 2rem 4rem 2rem'}}>
            <div className="row gy-3 container-70-100" style={{margin:'auto'}}>
                <div className="col-md-6">
                    <Card ver={1} title="Our Story" hasLink={true} text="Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way."/>
                </div>
                <div className="col-md-6">
                    <Card ver={1} title="Our Mission" hasLink={false} text="At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success."/>
                </div>
            </div>
        </section>
        {/* SECTION 2 */}
        <section style={{marginBottom:'2rem'}}>
            <div className={cx.servicesTitle} style={{marginBottom:'5rem'}}>
                {/* <i className="fa-solid fa-people-roof"></i> */}
                <div className={cx.mask}></div> 
                <h2 className={cx.servicesTitle}>Our Services</h2>
            </div>
            <div className={`row gy-3`} style={{maxWidth:isMobile ? '100vw' : '70vw',margin:'auto'}}>
                <div className="col-md-8" >
                    <div className="row  g-4 gy-5" style={{maxWidth:'100%'}}>
                        <div className="col-md-6">
                            <Card ver={2} title="Home Loans" iconCs='fa-solid fa-landmark' smallText='Home Loan' text="A first-time homebuyer is an individual or household purchasing a home for the first time. 
First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible." />
                        </div>
                        <div className="col-md-6">
                            <Card ver={2} title="Home Loans" iconCs='fa-solid fa-landmark' smallText='Home Loan' text="A first-time homebuyer is an individual or household purchasing a home for the first time. 
First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible." />
                        </div>
                        <div className="col-md-6">
                            <Card ver={2} title="Home Loans" iconCs='fa-solid fa-landmark' smallText='Home Loan' text="A first-time homebuyer is an individual or household purchasing a home for the first time. 
First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible." />

                        </div>
                        <div className="col-md-6">
                            <Card ver={2} title="Home Loans" iconCs='fa-solid fa-landmark' smallText='Home Loan' text="A first-time homebuyer is an individual or household purchasing a home for the first time. 
First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible." />

                        </div>
                        <div className="col-md-6">
                            <Card ver={2} title="Home Loans" iconCs='fa-solid fa-landmark' smallText='Home Loan' text="A first-time homebuyer is an individual or household purchasing a home for the first time. 
First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible." />

                        </div>
                        <div className="col-md-6">
                            <Card ver={2} title="Home Loans" iconCs='fa-solid fa-landmark' smallText='Home Loan' text="A first-time homebuyer is an individual or household purchasing a home for the first time. 
First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible." />

                        </div>
                        <div className="col-md-6">
                            <Card ver={2} title="Home Loans" iconCs='fa-solid fa-landmark' smallText='Home Loan' text="A first-time homebuyer is an individual or household purchasing a home for the first time. 
First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible." />

                        </div>
                        <div className="col-md-6">
                            <Card ver={2} title="Home Loans" iconCs='fa-solid fa-landmark' smallText='Home Loan' text="A first-time homebuyer is an individual or household purchasing a home for the first time. 
First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible." />

                        </div>
                        <div className="col-md-6">
                            <Card ver={2} title="Home Loans" iconCs='fa-solid fa-landmark' smallText='Home Loan' text="A first-time homebuyer is an individual or household purchasing a home for the first time. 
First-time homebuyers may be eligible for various incentives, such as lower down payment requirements, grants, or tax credits, which aim to make homeownership more accessible." />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div style={{height:'100%'}}>
                        <Carousel className={cx.servicesCarousel} fade indicators={false} controls={false} style={{height:'100%'}}>
                            <Carousel.Item>
                                <img src={serviceImg1}/>
                                <Carousel.Caption>
                                    <h3 style={{fontSize:'25px',textAlign:'left'}}>At Alphaa Financial Solutions, we offer a comprehensive range of financial services</h3>
                                    <p style={{fontSize:'20px',textAlign:'left'}}>We have the expertise to guide you through the process.</p>
                                    <div className={cx.serviceNum}>
                                        <span>100+</span>
                                        <span>Simplify the loan</span>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={serviceImg2}/>
                                <Carousel.Caption>
                                    <h3 style={{fontSize:'25px',textAlign:'left'}}>At Alphaa Financial Solutions, we offer a comprehensive range of financial services</h3>
                                    <p style={{fontSize:'20px',textAlign:'left'}}>We have the expertise to guide you through the process.</p>
                                    <div className={cx.serviceNum}>
                                        <span>100+</span>
                                        <span>Simplify the loan</span>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                    </div>
                </div>
            </div>
        </section>
        {/* SECTION 3 */}
        <section className={cx.section3} ref={ref}>
            <div className="row" style={{maxWidth:'1100px',margin:'auto'}}>
                <div className="col-md-6">
                    <div className={cx.s3Left} style={{position:'relative'}}>
                        <img className={cx.s3MainImg} src={serviceGrandpa} alt="services..."/>
                        <img src={HomeImg} className={`${cx.s3SecondImg} ${inView ? 'swipe-left-to-right' :''}`} alt="Home Imagee..."/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={{height:'100%'}} className={`${inViewS4 ? 'swipe-right-to-left' :''} ${cx.s3Right}`}></div>
                </div>
            </div>
        </section>
        {/* SECTION 4 */}
        <div ref={ref2}  className={cx.overlayPrimary}></div>
        <section className={cx.section4} style={{maxWidth:'1780px',marginLeft:'auto'}}>
            <div className="row" style={{maxWidth:'100%'}}>
                <div className="col-md-6" style={{position:'relative',backgroundColor:'var(--primary-color-d)'}}>
                  <div className={cx.believeLeft}>
                        <div className={cx.mask}></div>
                        <span>We believe you&apos;re bright</span>
                  </div>
                </div>
                <div  style={{padding:'0',backgroundColor:'var(--primary-color-d)',position:'relative'}} className="col-md-6">
                    <img  className={`${cx.believeImg} ${inViewS4 ? 'swipe-right-to-left' :''}`} src={believeImg} alt='We Believe You Are Right...'/>
                    <Card styles={{position: isMobile? 'static':'relative',top: card1Top,left: card1Left,}} ver={3} title="320+" smallText="Lenders"/>
                    <Card styles={{position: isMobile? 'static':'absolute',bottom: card2Bottom,right: Card2Right,}} ver={3} title="20+" smallText="Years Experience"/>
                </div>
            </div>
        </section>

        {/* SECTION 5 */}
        <section className={cx.section5} style={{...section5Style}} >
             <div className={cx.servicesTitle} style={{marginBottom:'5rem'}}>
                {/* <i className="fa-solid fa-people-roof"></i> */}
                <div className={`${cx.mask} ${cx.meetFounderIcon}`}></div>
                <h2 className={cx.servicesTitle}>Meet our Founder</h2>
            </div>
            <div className="row" style={{margin:'auto',justifyContent: 'center',maxWidth:'70vw'}}>
                <div className="col-md-3">
                    <Card ver={4} img={section5Img} title="Mr Pawan Punjabi" smallText={"Founder"}/>
                </div>
            </div>
        </section>

        {/* SECTION 6 */}
        <section  className={cx.section6}>
            <div className="row gy-3" style={{maxWidth:'70vw',margin:'auto'}}>
                <div ref={contactRef} className={`${inViewContact ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} col-md-6`}>
                    <div className={cx.s6left}>
                        <h3>Contact Us</h3>
                        <span className={cx.s6Text}>Please feel free to ask if you have any further questions.</span>
                        <Header1Icon isBold={true} iconCs='fa-solid fa-location-dot' text='Sydney, Austrailia'/>
                        <br />
                        <Header1Icon isBold={true} iconCs='fa-solid fa-phone' text='0468328227'/>
                        <br />
                        <Header1Icon isBold={true} iconCs='fa-solid fa-clock' text='Mon - Fri: 9:00am - 5:00pm'/>
                        <br />
                        <Header1Icon isBold={true} iconCs='fa-solid fa-clock' text='Weekends Appointments Only'/>
                    </div>
                    <div className="d-flex gap-2 ms-4">
                        <SocialLink iconcs={'fa-brands fa-facebook'}/>
                        <SocialLink iconcs={'fa-brands fa-instagram'}/>
                        <SocialLink iconcs={'fa-brands fa-square-twitter'}/>
                        <SocialLink iconcs={'fa-brands fa-x-twitter'}/>
                        <SocialLink iconcs={'fa-brands fa-whatsapp'}/>
                    </div>
                    
                </div>

                <div className={`${cx.paddingImp} ${inViewContact ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} col-md-6`}>
                    <img className={cx.s6Img} src={contactImg} alt="Contact Us.."/>
                </div>
            </div>
        </section>

        <CTASection />


        </>
    )
}

