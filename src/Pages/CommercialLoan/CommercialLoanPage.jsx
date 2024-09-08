import believeImg from '../../assets/Services/believe.jpg'
import ServicesHero from '../../Shared/ServicesHero/ServicesHero';
import ImageTextGrid from '../../Shared/ImageTextGrid/ImageTextGrid'
import DarkFullWidthCard from '../../Components/DarkFullWidthCard/DarkFullWidthCard';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import CardWrappedImage from '../../Components/CardWrappedImage/CardWrappedImage';

import img1 from '../../assets/Homeloan/img1.jpg'
import img2 from '../../assets/Homeloan/img2.jpg'
import img3 from '../../assets/Homeloan/img3.jpg'
import img4 from '../../assets/Services/img4.jpg'

export default function CommercialLoan() {
  const data = [
  {
    title: "Custom Loan Packages for Your Business Needs",
    description: "We offer a range of commercial loan packages tailored to suit the specific needs of your business, from real estate acquisitions to equipment financing."
  },
  {
    title: "Competitive Interest Rates for Sustainable Growth",
    description: "Our commercial loans come with competitive interest rates that help your business grow sustainably without compromising your cash flow."
  },
  {
    title: "Flexible Repayment Terms for Better Cash Flow Management",
    description: "Choose from a variety of repayment terms that align with your business’s cash flow, ensuring that loan repayments are manageable and predictable."
  },
  {
    title: "Expert Support Throughout the Loan Process",
    description: "Our team of commercial loan experts is dedicated to guiding you through every step of the loan process, from application to disbursement, ensuring a smooth and efficient experience."
  }
];

    return (
        <>
            <ServicesHero title={"Commercial Loan"}/>
            <ImageTextGrid smallText="Financing Solutions for Your Business Growth" title="Empower Your Business with Tailored Commercial Loans from Alphaa Financial Solutions" text="At Alphaa Financial Solutions, we specialize in providing comprehensive commercial and business loan solutions tailored to your unique needs. Whether you're seeking capital for expansion, equipment purchases, or working capital, our team is dedicated to finding the right financing option to fuel your growth.
We offer personalized service and expert guidance throughout the loan process, ensuring you secure competitive rates and terms that align with your business objectives.
Trust us to help you navigate the complexities of commercial financing and achieve your business goals with confidence." MainImage={img4} withSmallText={true} content={data}/>

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