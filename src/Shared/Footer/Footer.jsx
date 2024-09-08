import SocialLink from '../../Components/SocialLink/SocialLink';
import cx from './Footer.module.css';
export default function Footer() {
    return (
        
        <section className={` ${cx.container}`} style={{}}>
        <div className='d-flex align-items-center justify-content-lg-between flex-wrap gap-4 justify-content-md-center' style={{maxWidth:'1100px',margin:'auto'}}>
            <div>
                <div className="d-flex gap-2 ms-4">
                    <SocialLink iconcs={'fa-brands fa-facebook'}/>
                    <SocialLink iconcs={'fa-brands fa-instagram'}/>
                    <SocialLink iconcs={'fa-brands fa-square-twitter'}/>
                    <SocialLink iconcs={'fa-brands fa-x-twitter'}/>
                    <SocialLink iconcs={'fa-brands fa-whatsapp'}/>
                </div>
            </div>
            <div>
                2024 © All Rights Reserved | Developed with ❤️ by <a href='#' style={{color:'var(--secondary-color)'}}> Ali Alfakih</a>
            </div>
        </div>
        </section>
    )
}