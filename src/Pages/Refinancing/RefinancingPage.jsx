import believeImg from '../../assets/Services/believe.jpg'
import ServicesHero from '../../Shared/ServicesHero/ServicesHero';
import ImageTextGrid from '../../Shared/ImageTextGrid/ImageTextGrid'
import DarkFullWidthCard from '../../Components/DarkFullWidthCard/DarkFullWidthCard';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import CardWrappedImage from '../../Components/CardWrappedImage/CardWrappedImage';

import img1 from '../../assets/Homeloan/img1.jpg'
import img2 from '../../assets/Homeloan/img2.jpg'
import img3 from '../../assets/Homeloan/img3.jpg'

export default function Refinancing() {
    const additionalServicesData = [
  {
    title: "Lower Your Interest Rates",
    description: "We analyze your existing loans to find opportunities for refinancing at lower interest rates, helping you save money and reduce your monthly payments."
  },
  {
    title: "Consolidate Multiple Loans for Simplicity",
    description: "If you have multiple loans, we can help you consolidate them into a single, more manageable payment plan, making it easier to keep track of your finances."
  },
  {
    title: "Adjust Your Loan Terms for Better Flexibility",
    description: "Whether you need to shorten or extend your loan term, we offer solutions to adjust your repayment plan according to your current financial situation and future goals."
  },
  {
    title: "Identify Hidden Costs and Fees",
    description: "Our detailed loan review process uncovers any hidden costs or fees in your current loans, allowing you to make informed decisions and potentially renegotiate terms."
  }
];

    return (
        <>
            <ServicesHero title={"Refinancing"}/>
            <ImageTextGrid title2="Refinancing Services We Offer" title="Refinancing at Alpha Financial Solutions" text="At Alpha Financial Solutions, we offer comprehensive refinancing services to help you optimize your current mortgage and achieve your financial goals. Whether you’re looking to lower your monthly payments, shorten your loan term, or access equity in your home, our team of experts is here to guide you through the refinancing process with ease and efficiency." MainImage={believeImg} withSmallText={false} content={additionalServicesData}/>
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