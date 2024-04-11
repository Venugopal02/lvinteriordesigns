import './index.css'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => (
    <div className='footer-bg-container'>
        <div className='website-logo-icons-container'>
            <div className='website-logo-container'>
                <img className='website-logo2' src="./Images/website_logo.png" alt='logo'/>
                <p className='logo-text'>Interiors</p>  
            </div>
            <div className='icons-container'>
                <FaFacebook className='social-icon' />
                <FaInstagram className='social-icon' />
                <MdOutlineMail className='social-icon' />
            </div>
        </div>

        <div className='website-details-bg-container'>
            <h1 className='footers-heding'>LV Interiors</h1>
            <a href='/' target='_self' className='detail-name'>Get Estimate</a>
            <a href='/' target='_self' className='detail-name'>Team</a>
            <a href='/' target='_self' className='detail-name'>Design Ideas</a>
            <a href='/' target='_self' className='detail-name'>Privacy Policy</a>
            <a href='/' target='_self' className='detail-name'>About Us</a>
        </div>

        <div className='website-details-bg-container'>
            <h1 className='footers-heding'>Designs</h1>
            <a href='/' target='_self' className='detail-name'>Modular Kitchen</a>
            <a href='/' target='_self' className='detail-name'>Pooja Room</a>
            <a href='/' target='_self' className='detail-name'>Master Bedroom</a>
            <a href='/' target='_self' className='detail-name'>Children Bedroom</a>
            <a href='/' target='_self' className='detail-name'>Home Office</a>
            <a href='/' target='_self' className='detail-name'>Beds</a>
        </div>

        <div className='website-details-bg-container'>
            <h1 className='footers-heding'>Customer Support</h1>
            <a href='/' target='_self' className='detail-name'>Contact Us</a>
            <a href='/' target='_self' className='detail-name'>Terms & Conditions</a>
            <a href='/' target='_self' className='detail-name'>Privacy Policy</a>
            <a href='/' target='_self' className='detail-name'>Raise issue</a>
            <a href='/' target='_self' className='detail-name'>Track issues</a>
        </div>
    </div>
)

export default Footer