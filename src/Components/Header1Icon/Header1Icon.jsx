import cx from './Header1Icon.module.css';
import PropTypes from 'prop-types';

export default function Header1Icon({iconCs,text,isBold}) {
    return (
        <div style={{marginRight:'1rem'}}>
            <span className={cx.icon}><i className={iconCs}></i></span>
            <span style={{fontWeight:isBold ? '700' : 'initial'}} className={cx.text}>{text}</span>
        </div>
    )
}


// Props validation
Header1Icon.propTypes = {
  iconCs: PropTypes.string.isRequired, // iconCs should be a string and is required
  text: PropTypes.string.isRequired,   // text should be a string and is required
  isBold: PropTypes.bool,   // text should be a string and is required
};
