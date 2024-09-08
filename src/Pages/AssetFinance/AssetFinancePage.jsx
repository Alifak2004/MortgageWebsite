import believeImg from '../../assets/Services/believe.jpg'
import ServicesHero from '../../Shared/ServicesHero/ServicesHero';
import ImageTextGrid from '../../Shared/ImageTextGrid/ImageTextGrid'
import DarkFullWidthCard from '../../Components/DarkFullWidthCard/DarkFullWidthCard';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import CardWrappedImage from '../../Components/CardWrappedImage/CardWrappedImage';

import img1 from '../../assets/Homeloan/img1.jpg'
import img2 from '../../assets/Homeloan/img2.jpg'
import img3 from '../../assets/Homeloan/img3.jpg'


export default function x() {
    const desc = "At Alphaa Financial Solutions, we offer tailored asset and vehicle finance solutions to help you acquire the equipment or vehicle you need with ease.\nWhether you're looking to purchase a new car, upgrade your business equipment, or finance a fleet, our team provides expert advice and customized financing options.\nWe streamline the application process and work to secure competitive rates, ensuring you get the best possible terms to support your personal or business objectives.\nTrust us to simplify your asset and vehicle financing, so you can focus on what matters most.";

    const data = [
  {
    title: "Flexible Financing for a Wide Range of Assets",
    description: "From machinery to vehicles, we provide financing options that cover a broad spectrum of business assets, ensuring you have the right tools to succeed."
  },
  {
    title: "Preserve Cash Flow with Tailored Repayment Plans",
    description: "Our asset finance solutions offer flexible repayment plans that align with your cash flow, allowing you to maintain liquidity while investing in essential assets."
  },
  {
    title: "Competitive Rates for Cost-Effective Asset Acquisition",
    description: "Benefit from competitive interest rates that make it easier and more affordable to finance the assets your business needs to grow and thrive."
  },
  {
    title: "Expert Guidance Throughout the Financing Process",
    description: "Our team of asset finance specialists is here to guide you through the entire financing process, providing personalized support to ensure a seamless experience."
  }
];


    return (
        <>
        <ServicesHero title={"Asset Finance"}/>
            <ImageTextGrid title="Secure the Equipment and Assets Your Business Needs with Alphaa Financial Solutions" text={desc} MainImage={believeImg} withSmallText={false} content={data}/>
            <DarkFullWidthCard containerStyle={{marginTop:'3rem'}} title={"How To Estimate Mortgage Payments"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}  />
            <SectionHeader subText={"Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} mb={"2rem"} isSmall={true} text2={"Many resources can help you make informed decisions during homebuying"} text={"Lendevi services"}/>
            
            {/* SECTION 1 */}
            <section className='container-70-90' style={{margin:'1rem auto 10rem auto'}}>
                <h4  style={{textAlign:'center',fontSize:'31px',fontWeight:'700',marginBottom:'2.4rem'}}>Our Home Loan Services</h4>
                <div className='row gy-14'>
                <div className='col-md-4'>
                    <CardWrappedImage img={img1} title={"House payment"} text={"Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}/>
                </div>
                 <div className='col-md-4'>
                    <CardWrappedImage img={img2} title={"Industrial payment"} text={"Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}/>
                </div>
                 <div className='col-md-4'>
                    <CardWrappedImage img={img3} title={"Corporate payment"} text={"Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}/>
                </div>
                </div>
            </section>
        </>
    )
}