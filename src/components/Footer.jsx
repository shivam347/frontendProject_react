import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    return (
        <div className='bg-slate-50 dark:bg-slate-900 pt-10 sm:pt-10
            mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
            {/* footer top */}

            <div className='flex justify-between lg:items-center
                max-lg:flex-col gap-10'>
                {/* One div for left */}
                <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
                    <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt='' className='w-32 sm:w-44' />
                    <p className='max-w-md'>From strategy to execution, we craft digital solutions
                        that move your business forward.
                    </p>
                    <ul className='flex gap-8'>
                        <li><a className='hover:text-primary' href="#hero">Home</a></li>
                        <li><a className='hover:text-primary' href="#services">Services</a></li>
                        <li><a className='hover:text-primary' href="#our-work">our work</a></li>
                        <li><a className='hover:text-primary' href="#contact">Contact Us</a></li>
                    </ul>

                </div>
                {/* one div for right */}
                <div className='text-gray-600 dark:text-gray-400'>
                    <h3 className='font-semibold'>Subscribe to our newsletter</h3>
                    <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly.</p>

                    <div className='flex text-sm gap-2'>
                        <input type='email' placeholder='Enter your email'
                            className='w-full text-sm dark:text-gray-200 bg-transparent outline-none border border-gray-300 rounded p-3
                    dark:border-gray-500'/>
                        <button className='bg-primary text-white rounded px-6'>Subscribe</button>
                    </div>

                </div>
            </div>

            <hr className='border-gray-300 dark:border-gray-600 my-6'/>
            <div className='flex justify-center pb-6 text-small text-gray-500 sm:justify-between gap-4 flex-wrap'>
                <p>Copyright 2026 &copy;  Shivam - All Right Reserved.</p>
                <div className='flex items-center justify-between gap-4'>
                    <a href='https://www.facebook.com/'><img src={assets.facebook_icon} alt=''/></a>
                    <a href='https://x.com/'><img src={assets.twitter_icon} alt=''/></a>
                    <a href='https://www.instagram.com/'><img src={assets.instagram_icon} alt=''/></a>
                    <a href='https://www.linkedin.com/in/shivam-yadav-5ab8b91b3/'><img src={assets.linkedin_icon} alt=''/></a>
                </div>
            </div>

        </div>
    )
}

export default Footer
