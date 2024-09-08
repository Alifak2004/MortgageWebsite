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
    const desc = "At Alphaa Financial Solutions, we offer a range of personal loan options designed to meet your unique financial needs.\nWhether you're looking to consolidate debt, fund a major purchase, or cover unexpected expenses, our team is dedicated to finding the right loan solution for you.\nWe provide personalized support throughout the application process, ensuring you secure the best rates and terms available.\nTrust us to make your financial goals more achievable with tailored, flexible personal loan solutions."
    const data = [
    {
        title: "Flexible Loan Amounts for Your Needs",
        description: "Borrow the exact amount you need, whether it’s for a small expense or a significant purchase. Our personal loans offer the flexibility to choose the loan amount that best suits your needs."
    },
    {
        title: "Quick and Easy Application Process",
        description: "Apply for a personal loan with ease through our streamlined application process. We prioritize fast approvals, so you can access the funds you need without delay."
    },
    {
        title: "Competitive Interest Rates for Affordable Repayments",
        description: "Our personal loans come with competitive interest rates that make repayments manageable, helping you achieve your financial goals without unnecessary stress."
    },
    {
        title: "Repayment Plans Tailored to Your Budget",
        description: "Choose from a variety of repayment plans that fit your budget and financial situation. We offer flexible terms to ensure your loan is repaid comfortably and on your terms."
    }
    ];



    return (
        <>
        <ServicesHero title={"Personal Loan"}/>
            <ImageTextGrid title="Achieve Your Personal Goals with Alphaa Financial Solutions' Personal Loans" text={desc} MainImage={believeImg} withSmallText={false} content={data}/>
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