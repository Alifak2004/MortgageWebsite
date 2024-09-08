import cx from './AboutUs.module.css';
import SectionHeader from '../../Components/SectionHeader/SectionHeader.jsx'
import img1 from '../../assets/AboutUs/img1.jpg'
import img2 from '../../assets/AboutUs/img2.jpg'
import Testamonials from '../../Shared/Testamonials/Testamonials.jsx';
import CTASection from '../../Shared/CTASection/CTASection.jsx'
import { useInView } from 'react-intersection-observer';
export default function AboutUs() {

        const { ref, inView } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });

        
        const { ref:ref2, inView:inView2 } = useInView({
            triggerOnce: true, // The animation will trigger only once
            threshold: 0.1,    // The percentage of the element that must be visible to trigger the animation
        });


    return (
        <>

            <SectionHeader text="We believe you’re bright"/>
            <section ref={ref} className='row' style={{maxWidth:'1200px',margin:'2rem auto'}}>
                <div  className={`col-md-6 ${inView ? 'swipe-left-to-right' : ''}`}>

                    <div className={`${cx.s1leftSide} `}>
                        <img src={img1} className={cx.Image1}/>
                        <div>
                            <h5>Our Mission</h5>
                            <p>Our mission is to provide our clients with tailored financial solutions that cater to their unique needs. We strive to make the process of securing a mortgage as straightforward and stress-free as possible, guiding you through every step with transparency and integrity.</p>
                        </div>
                    </div>
                </div>
                <div className={`${cx.s1rightSide} col-md-6 ${inView ? 'swipe-right-to-left' : ''}`}>
                  <div>
                      <h5>Welcome to Alphaa Financial Solutions</h5>
                      <p>At Alphaa Financial Solutions, we believe in empowering your property dreams with our premium financial services. Established with a vision to provide seamless loan processing and financial advisory, we have grown to become a trusted name in the Australian mortgage industry.</p>
                  </div>
                  <div>
                    <h5>Our Story 🙂</h5>
                    <p> Alphaa Financial Solutions was born out of a desire to simplify the complexities of property financing. Our founder,
Mr. Pawan Punjabi, envisioned a company where customer-centricity and financial expertise go hand in hand. Over the years, we have helped thousands of Australians achieve their dream of owning a home, thanks to our unwavering commitment to excellence and innovation.</p>
                  </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <section style={{backgroundColor:'var(--primary-color)'}}>
                <div ref={ref2} className='row gx-5' style={{maxWidth:'1200px',margin:'auto',padding:'4rem 0'}}>
                    <div className={`${inView2 ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} col-md-6`}>
                        <img src={img2} className={`${cx.Image2}`} />
                    </div>
                     <div className={`${inView2 ? 'bottom-to-top-fade-in' : 'bottom-to-top-fade-out'} ${cx.s2Right} col-md-6`}>
                        <span><div className={cx.icon}></div>Why Choose Us</span>
                        <h4>Our Expertise</h4>
                        <p>
                            Expertise and Experience: With over 20 Years of experience in the industry, our team of financial experts brings a wealth of knowledge and expertise to the table.
                        </p>
                        <br />
                        <p>Customer-Centric Approach: We put our clients at the heart of everything we do, offering personalized advice and support to help you make informed financial decisions.</p>
                        <br />
                        <p>Innovative Solutions: We leverage the latest technology and financial products to provide innovative solutions that meet the evolving needs of our clients.</p>
                        <br />
                        <p>Transparency and Integrity: We pride ourselves on our ethical approach, ensuring transparency and integrity in all our dealings.</p>
                    </div>
                </div>
            </section>

            <Testamonials />
            <CTASection />

        </>
    )

}
