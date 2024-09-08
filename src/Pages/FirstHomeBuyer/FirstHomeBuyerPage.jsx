import DarkFullWidthCard from '../../Components/DarkFullWidthCard/DarkFullWidthCard';
import cx from './FirstHomeBuyer.module.css';
import ImageTextGrid from '../../Shared/ImageTextGrid/ImageTextGrid'
import MainImage from '../../assets/Services/img1.jpg'
import ServicesHero from '../../Shared/ServicesHero/ServicesHero';
export default function FirstHomeBuyer() {
    const servicesData = [
  {
    title: "Personalized Mortgage Options",
    description: "We offer a range of mortgage products specifically designed for first-time buyers, including fixed-rate and adjustable-rate mortgages. Our financial advisors work with you to find the best loan that fits your budget and long-term goals."
  },
  {
    title: "Pre-Approval Assistance",
    description: "Getting pre-approved for a mortgage is a critical first step. We guide you through the pre-approval process, helping you understand how much you can afford and giving you a competitive edge when making an offer on a home."
  },
  {
    title: "Down Payment Solutions",
    description: "Struggling with the down payment? Alpha Financial Solutions provides access to various programs and strategies to help you secure the funds needed for your down payment, whether through savings plans, grants, or special loan products."
  },
  {
    title: "First-Time Buyer Incentives",
    description: "We help you take advantage of government programs and incentives specifically designed for first home buyers, such as tax credits, reduced-interest loans, and grants that can lower the overall cost of purchasing your home."
  },
  {
    title: "Expert Financial Guidance",
    description: "Our team of experienced financial advisors is here to support you at every step of the home-buying process. From understanding your budget to exploring mortgage options and closing the deal, we provide the expert advice you need to make confident decisions."
  },
  {
    title: "Credit Counseling",
    description: "If you’re concerned about your credit score, we offer credit counseling services to help you improve your credit profile, making it easier to qualify for favorable mortgage terms."
  }
];


    return (
        <>
            <ServicesHero title={"First Home Buyer"}/>
            <ImageTextGrid title2={"Services Offered to First Home Buyers"} title={"First Home Buyer at Alpha Financial Solutions"} text={"At Alpha Financial Solutions, we understand that purchasing your first home is one of the most significant financial decisions you’ll ever make. As a first-time homebuyer, navigating the complexities of the real estate market and mortgage options can be overwhelming. That’s why we offer tailored financial solutions and expert guidance to help you make informed decisions and achieve your dream of homeownership."} MainImage={MainImage} withSmallText={false} content={servicesData}/>
            <DarkFullWidthCard title={"How to estimate mortgage payments"}/>
        </>
    )
}