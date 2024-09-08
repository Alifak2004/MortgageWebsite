import CardWrappedImage from '../../Components/CardWrappedImage/CardWrappedImage';
import DarkFullWidthCard from '../../Components/DarkFullWidthCard/DarkFullWidthCard';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import ServicesHero from '../../Shared/ServicesHero/ServicesHero';
import img1 from '../../assets/Homeloan/img1.jpg'
import img2 from '../../assets/Homeloan/img2.jpg'
import img3 from '../../assets/Homeloan/img3.jpg'
import ImageTextGrid from '../../Shared/ImageTextGrid/ImageTextGrid'
import { useInView } from 'react-intersection-observer';
export default function HomeLoan() {

   const data = [
  {
    title: "Fixed-Rate Home Loan",
    description: "Provides stability with fixed payments but may have higher total interest."
  },
  {
    title: "Variable-Rate Home Loan",
    description: "Offers potentially lower payments if rates decrease, but carries risk if rates rise."
  },
  {
    title: "Interest-Only Home Loan",
    description: "Lower initial payments but higher total interest payable."
  },
  {
    title: "Hybrid Home Loan",
    description: "Combines stability of fixed rate initially with potential savings of variable rate later."
  }
];



    return (
        <>
            <ServicesHero title={"Home Loans"}/>
            <SectionHeader mb={"2rem"} isSmall={true} text2={"We offer a variety of home loan options tailored to suit your individual needs"} text={"Alphaa Financial Solutions"}/>

            {/* SECTION 1 */}
            <section className='container-70-90' style={{margin:'1rem auto 10rem auto'}}>
                <h4  style={{textAlign:'center',fontSize:'31px',fontWeight:'700',marginBottom:'2.4rem'}}>Our Home Loan Services</h4>
                <div className='row gy-14'>
                <div className='col-md-4'>
                    <CardWrappedImage img={img1} title={"First home buyer"} text={"Frst home buyers represent a significant portion of the real estate market, often driven by the desire for stability, investment in property, and the opportunity to personalize a living space."}/>
                </div>
                 <div className='col-md-4'>
                    <CardWrappedImage img={img2} title={"First home buyer"} text={"Frst home buyers represent a significant portion of the real estate market, often driven by the desire for stability, investment in property, and the opportunity to personalize a living space."}/>
                </div>
                 <div className='col-md-4'>
                    <CardWrappedImage img={img3} title={"First home buyer"} text={"Frst home buyers represent a significant portion of the real estate market, often driven by the desire for stability, investment in property, and the opportunity to personalize a living space."}/>
                </div>
                </div>
            </section>

            {/* SECTION 2 */}
            <ImageTextGrid title={"Different Types Of Home Loans"} text="To help you determine the best loan option, we have four different types of home loans." withSmallText={true} MainImage={img3} content={data}/>

            <DarkFullWidthCard title={"How to Estimate Mortgage Payments"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}/>

            
        </>
    )
}
