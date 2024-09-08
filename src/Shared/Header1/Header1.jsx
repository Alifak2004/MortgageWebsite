import Header1Icon from '../../Components/Header1Icon/Header1Icon';
import cx from './Header1.module.css'

const Header1 = function() {
      return (
    <section className={cx.cusContainer}>
      <Header1Icon iconCs='fa-solid fa-location-dot' text='Sydney, Austrailia'/>
      <Header1Icon iconCs='fa-solid fa-phone' text='0468328227'/>
      <Header1Icon iconCs='fa-solid fa-clock' text='Mon - Fri: 9:00am - 5:00pm'/>
      <Header1Icon iconCs='fa-solid fa-clock' text='Weekends Appointments Only'/>
    </section>
  );
}

export default Header1;