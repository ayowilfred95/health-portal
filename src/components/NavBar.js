import React,{useState} from 'react';
import Frame3 from '../assets/Frame3.png';
import Group from '../assets/Group17.png';
import vector from '../assets/Vector.png';
import vector2 from '../assets/Vector2.png';
import vector3 from '../assets/Vector3.png';
import vector4 from '../assets/Vector4.png';
import vector5 from '../assets/Vector5.png';
import bullet1 from '../assets/Bullet1.png';
import bullet2 from '../assets/Bullet2.png';
import bullet3 from '../assets/Bullet3.png';
import portal from '../assets/Dashboard-Patient1.png';
import facebook from '../assets/facebook_logo.png';
import twitter from '../assets/twitter1.png';
import linkedin from '../assets/linkedin1.png';
import copy from '../assets/copyright.png';
import {Link } from 'react-router-dom';

import handleSubscribe from '../props/handleSubscribe';


function NavBar() {
  const [email, setEmail] = useState('');

  const handleSubscription = (e) => {
    e.preventDefault();
    const email = 'ayowilfred1995@gmail.com'; 
    handleSubscribe(email);
    setEmail('');
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  

  return (
    <div className="w-screen h-screen">
      <div className="bg-gradient-to-br from-white to-cyan-200">

        {/**Navbar session */}
        <nav className="flex flex-row justify-between items-center gap-10 md:gap-0 w-full h-16 md:h-20 lg:h-24 px-4 md:px-8 ">
          <a href="/" className="ml-4 md:ml-0">
            <img src={Frame3} alt="" className="h-10 md:h-12 lg:h-14" />
          </a>
          <div className="flex justify-end mr-4 md:mr-0">
            <Link to='/login' className="ml-4 inline-block hover:bg-green-600 hover:text-white hover:border-8 hover:border-green-600 hover:rounded-md px-4 py-2 group text-[#008753] text-[16px] font-[700]">
            <span className="group-hover:bg-transparent">Login</span>
            </Link>
            <a
              href="/signup"
              className="ml-4 bg-green-600 rounded-md h-[56px] w-[139px] px-[16px] py-[16px] text-center hover:bg-green-700  hover:border-green-700 hover:rounded-md text-white text-[16px]"
            >
              Signup
            </a>
          </div>
        </nav>
        {/* first body should go here */}
        <div className="flex flex-col md:flex-row md:ml-4 md:mr-4">
          <div className="flex-1">
            <img className="w-full md:w-auto h-auto" src={Group} alt="" />
          </div>
          <div className="flex-1 flex-col justify-start px-4 md:px-8">
            <div className="py-8 md:pt-24 md:pl-4">
              <h1 className="font-inter font-[900] text-2xl md:text-4xl text-black text-opacity-20 md:text-green-800">
                Your health record
              </h1>
              <h1 className="font-inter font-[900] text-2xl md:text-4xl text-black text-opacity-20 md:text-green-800 py-4">
                in one place
              </h1>
              <div className="font-Source Sans Pro font-normal text-base md:text-lg mt-4 text-gray-700">
                <h4>You don't have to keep creating new files and health records anytime</h4>
                <h4>you visit the hospital. You can now store, manage and access your</h4>
                <h4>health records anywhere, anytime with NG-X.</h4>
              </div>
              <div className="flex flex-row mt-8 items-center">
                <button className="bg-[#008753] rounded-md px-4 md:px-8 py-2 md:py-4 text-white">Get Started</button>
                <Link to="/work" className="ml-4">see how it works</Link>
              </div>
            </div>
          </div>
        </div>
        {/** What we offer section */}
        <div className='mt-[104.24px]'>
          <div className='flex justify-center'>
          <h1 className='text-[#008753] font-inter font-[900] text-2xl md:text-4xl text-opacity-20 md:text-green-800'>What we offer</h1>
          </div>
          {/** Our Cards goes here */}
          
        <div className="container mx-auto">
  <div className="flex flex-wrap justify-center">
    <div className="w-[359px] h-[308px] p-4">
      <div className="bg-white shadow rounded-lg h-full">
        <div className="flex items-center justify-center">
          <img src={vector} alt="" className="w-[36.42px] mt-[54px] h-auto object-cover rounded-t-lg" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center">Ease of Access</h3>
          <p className="text-gray-500 text-center">NG-X allows you to easily access your healthcare records directly from your mobile phone and laptops</p>
        </div>
      </div>
    </div>
    <div className="w-[359px] h-[308px] p-4">
      <div className="bg-white shadow rounded-lg h-full">
        <div className="flex items-center justify-center">
          <img src={vector2} alt="" className="w-[36.42px] mt-[54px]  h-auto object-cover rounded-t-lg" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center">Information Integrity</h3>
          <p className="text-gray-500 text-center">You don't have to worry about your information being tampered with or modified by unauthorized third parties.</p>
        </div>
      </div>
    </div>
    <div className="w-[359px] h-[308px] p-4">
      <div className="bg-white shadow rounded-lg h-full">
        <div className="flex items-center justify-center">
          <img src={vector3} alt="" className="w-[36.42px] mt-[54px]  h-auto object-cover rounded-t-lg" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center">Privacy & Security</h3>
          <p className="text-gray-500 text-center">With NG-X, your information is safe from prying eyes and attacks.</p>
        </div>
      </div>
    </div>
    {/**Second cards goes here */}
    <div className="flex flex-wrap justify-center">
    <div className="w-[359px] h-[308px] p-4">
      <div className="bg-white shadow rounded-lg h-full">
        <div className="flex items-center justify-center">
          <img src={vector4} alt="" className="w-[36.42px] mt-[54px]  h-auto object-cover rounded-t-lg" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center">Interoperatibility</h3>
          <p className="text-gray-500 text-center">You can now share your information with a Doctor anywhere in Nigeria, no need for new health record. You can also access your prescriptions and purchase at any pharmacy.</p>
        </div>
      </div>
    </div>
    <div className="w-[359px] h-[308px] p-4">
      <div className="bg-white shadow rounded-lg h-full">
        <div className="flex items-center justify-center">
          <img src={vector5} alt="" className="w-[36.42px] mt-[54px]  h-auto object-cover rounded-t-lg" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-center">Dependencies</h3>
          <p className="text-gray-500 text-center">NG-X allows you to manage your son, daughter, husband, grandparents and even allows health records.</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>
        </div>
         {/** How to get started session */}
      <div className='flex mt-[160px] ml-[120px]'>
        {/**left flex */}
        <div className='flex-1'>
          {/** text contents. 3 Columns */}
        <div className='flex flex-col '>
          <h1 className='mt-[107px] text-[#008753] font-Inter font-[900] text-[27px] md:text-[54px] '>How to get started</h1>
          <h3 className='mt-[32px] text-86px] text-[#404040] font-[400] font-sans  md:text-[16px]'>Start managing yours and your family health records with NG-X. It is easy to
              get start.</h3>
            {/** Bullets text */}
          <div className='flex mt-[32px] md:mt-6 '>
            <img src={bullet1} alt="" className='w-6 h-6 md:w-8 md:h-8' />
            <h4 className='ml-[16px] md:ml-4'>Signup with your NIN and email address</h4>
          </div>
          <div className='flex mt-[16px] md:mt-6'>
            <img src={bullet2} alt="" className='w-6 h-6 md:w-8 md:h-8'  />
            <h4 className='ml-[16px] md:ml-4'>Receive your unique ID and access code</h4>
          </div>
          <div className='flex mt-[16px] md:mt-6'>
            <img src={bullet3} alt="" className='w-6 h-6 md:w-8 md:h-8'  />
            <h4 className='ml-[16px] md:ml-4'>Log in and start using NG-X</h4>
          </div>
        </div>
        </div>
        {/**right flex */}
        <div className='flex-1'> 
        <img src={portal} alt="" />
        </div>

      </div>
      {/** Newsletter session */}
    <div class="flex ml-[120px] mx-[120px] mt-[160.71px] ">
  <div class="flex-1">
    <img src={Frame3} alt="" />
  </div>
  <div class="flex flex-1 justify-end space-x-4">
    <img src={facebook} alt="" />
    <img src={twitter} alt="" />
    <img src={linkedin} alt="" />
  </div>
</div>
{/** border line goes here */}
<div class="border border-green-600  mx-[120px] mt-[24px]"></div>


<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 md:mt-12 mx-[120px] ">
 {/**Newsletter signup */}
  <div class="bg-white-200 p-4">
    <h2 class="text-[#008753] text-[29.9641px] font-[600]">Newsletter Signup</h2>
    <div class="flex mt-2">
      <input value={email} onChange={handleChange} type="email" class="w-2/3 px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none" placeholder="Enter your email" />
      <button onClick={handleSubscription} class="w-1/3 px-4 py-1 bg-green-600 text-white rounded-r-md focus:outline-none">Subscribe</button>
    </div>
  </div>
  
  {/** Solution */}
  <div className="bg-white-200 p-4">
    <h2 className="text-[#008753] text-[24px] font-[600] ">Solutions</h2>
    <ul className="mt-2">
      <li className="mb-2"><a href="/personal" class="text-[#404040] text-[16px] hover:underline">Personal</a></li>
      <li className="mb-2"><a href="/business" class="text-[#404040] text-[16px]  hover:underline">Business</a></li>
      <li><a href="government" class="text-[#404040] text-[16px] hover:underline">Government</a></li>
    </ul>
  </div>

 {/**About us */}
  <div className="bg-white-200 p-4">
    <h2 className="text-[#008753] text-[24px] font-[600]">About Us</h2>
    <ul className="mt-2">
      <li className="mb-2"><a href="/story" class="text-[#404040] text-[16px] hover:underline">Our Story</a></li>
      <li className="mb-2"><a href="/benefits" class="text-[#404040] text-[16px] hover:underline">Benefits</a></li>
      <li className="mb-2"><a href="/teams" class="text-[#404040] text-[16px] hover:underline">Teams</a></li>
      <li><a href="/career" class="text-[#404040] text-[16px]hover:underline">Careers</a></li>
    </ul>
  </div>
  
 {/**Help section */}
  <div className="bg-white-200 p-4">
    <h2 className="text-[#008753] text-[24px] font-[600]">Help</h2>
    <ul className="mt-2">
      <li className="mb-2"><a href="faq" class="text-[#404040] text-[16px] hover:underline">FAQ</a></li>
      <li><a href="/contact" class="text-[#404040] text-[16px] hover:underline">Contact Us</a></li>
    </ul>
  </div>
</div>

{/** last page border */}
<div className="border border-green-500 border-opacity-50 mx-[120px] mt-[158px]"></div>

<div className='flex mt-[12px] mx-[120px] mb-[36px]'>
  {/** first flex left */}
  <div className='flex-1 flex space-x-8 mb-[20px]'>
    <h1 className='text-[16px] text-[#404040] font-[600] font-sans'>Terms and Conditions</h1>
    <h1 className='text-[16px] text-[#404040] font-[600] font-sans ml-[32px]'>Privacy Policy</h1>
  </div>
  {/** right flex */}
  <div className='flex-1 flex items-center justify-end space-x-4 mb-[36px]'>
    <img src={copy} alt="" className="w-8" />
    <h3 className='text-[16px] text-[#404040] font-[600] font-sans'>NG-X All rights reserved.</h3>
  </div>
</div>
      </div>
    </div>
  );
}

export default NavBar;

