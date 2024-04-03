import React from 'react';
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faYoutube,
    faPinterest,
    faInstagram,
    faLinkedin,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='container mx-auto w-[80%] mb-20'>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-x-16 gap-y-8 font-light mt-32'>
                <div>
                    <p className='font-normal'>PRODUCT</p>
                    <br />
                    <br />
                    <ul className='space-y-2'>
                        <li>Templates</li>
                        <li>Explore</li>
                        <li>Features</li>
                        <li>Website Builder</li>
                        <li>Web Accessibility</li>
                        <li>Velo</li>
                        <li>Wix Playground</li>
                        <li>My Sites</li>
                        <li>Premium Plans</li>
                        <li>Wix SEO</li>
                        <li>Logo Maker</li>
                        <li>Create a Blog</li>
                        <li>Online Store</li>
                        <li>Wix Bookings</li>
                        <li>Restaurants</li>
                        <li>App Market</li>
                        <li>Domains</li>
                        <li>Business Email</li>
                        <li>Web Hosting</li>
                        <li>Developers</li>
                        <li>Enterprise</li>
                        <li>Email Marketing</li>
                        <li>Website Design</li>
                        <li>Professional Tools</li>
                        <li>Email Marketing</li>
                        <li>Website Design</li>
                        <li>Professional Tools</li>
                    </ul>
                </div>
                <div>
                    <p className='font-normal'>COMPANY</p>
                    <br />
                    <br />
                    <ul className='space-y-2'>
                        <li>About Wix</li>
                        <li>Press Room</li>
                        <li>Investor realtions</li>
                        <li>Wix Jobs</li>
                        <li>Design Assets</li>
                        <li>Terms of Use</li>
                        <li>App Market Terms</li>
                        <li>Privacy Policy</li>
                        <li>Accessibility Statement</li>
                        <li>Abuse</li>
                        <li>Affiliates</li>
                        <li>Wix Capital</li>
                        <li>Updates & Releases</li>
                        <li>Contact Us</li>
                        <li>Patent Notice</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div>
                    <p className='font-normal'>COMMUNITY</p>
                    <br />
                    <br />
                    <ul className='space-y-2'>
                        <li>Wix Blog</li>
                        <li>Wix Marketplace</li>
                        <li>Student Website</li>
                        <li>Wix Encycopledia</li>
                        <li>Partner Community</li>
                    </ul>
                </div>
                <div>
                    <p className='font-normal'>SUPPORT</p>
                    <br />
                    <br />
                    <ul className='space-y-2'>
                        <li>Support center</li>
                        <li>Getting Started Guide</li>
                        <li>Wix Learn</li>
                        <li>Status Page</li>
                    </ul>
                </div>
                <div className='relative bottom-4 lg:col-span-1'>
                    <img src={logo} alt='logo' className='w-16' />
                    <br />
                    <p>
                        The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and mareting tools-enabling
                        anyone to create and grow online.
                        <br />
                        <br />
                        c 2006-2022 Wix.com, Inc
                    </p>
                    <div className='mt-3 text-gray-600'>

                        <FontAwesomeIcon icon={faFacebookF} className='mr-1 text-[14px]' />
                        <FontAwesomeIcon icon={faTwitter} className='mx-1 text-[14px]' />
                        <FontAwesomeIcon icon={faYoutube} className='mx-1 text-[14px]l' />
                        <FontAwesomeIcon icon={faPinterest} className='mx-1 text-[14px]' />
                        <FontAwesomeIcon icon={faInstagram} className='mx-1 text-[14px]' />
                        <FontAwesomeIcon icon={faLinkedin} className='mx-1 text-[14px]' />
                        <FontAwesomeIcon icon={faTiktok} className='mx-1 text-[14px]' />

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
