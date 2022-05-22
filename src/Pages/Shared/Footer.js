import React from 'react';
import facebook from '../../assets/logo/facebook.png';
import instagram from '../../assets/logo/instagram.png';
import twitter from '../../assets/logo/twitter.png';
import youtube from '../../assets/logo/youtube.png';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <div className='mx-auto'>
    <img src="https://opencart.opencartworks.com/themes/so_monota/layout12/image/catalog/logo11.png" alt="" />
    <p>MONOTA Auto Parts Ltd.<br/>Providing reliable Car Tools & Parts 1992</p>
    <p className="text-xl font-semibold text-secondary">Follow Us On Social Networks</p>
    <div className='flex justify-center items-center'>
        <a className='mr-6' href="https://www.facebook.com/shadek.shah.9/" target={'_blank'}><img src={facebook} alt="" /></a>
        <a className='mr-6' href="https://www.instagram.com/shadek_hossain/" target={'_blank'}><img src={instagram} alt="" /></a>
        <a className='mr-6' href="https://twitter.com/SHadek007" target={'_blank'}><img src={twitter} alt="" /></a>
        <a className='mr-6' href="https://www.youtube.com/c/ProgrammingHero" target={'_blank'}><img src={youtube} alt="" /></a>
    </div>
  </div> 
  <div className='mx-auto'>
    <span className="text-xl font-semibold text-secondary">Services</span> 
    <a className="link link-hover">Head Parts</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Body Parts</a> 
    <a className="link link-hover">Manufacturers</a>
  </div> 
  <div className='mx-auto'>
    <span className="text-xl font-semibold text-secondary">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div className='mx-auto'>
    <span className="text-xl font-semibold text-secondary">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;