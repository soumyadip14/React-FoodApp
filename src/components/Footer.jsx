import React from 'react'
import logo from "/src/assets/logo.png"
import  {motion} from "framer-motion";
const Footer = () => {
    return (
        <motion.footer
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        className='bg-lightYellow rounded-t-3xl'>
            <div className='container py-15'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 relative'>
                    {/* brand info */}
                    <div className='space-y-3 lg:max-w-[300px] '>
                        <img src={logo} alt='' className='w-24' />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate quod labore velit culpa excepturi
                            omnis dolores inventore eum ipsa suscipit.
                        </p>
                        <a href='#' className='inline-block mt-6 text-sm font-semibold'> Contact@food.com</a>
                    </div>
                    {/* links */}
                    <div className=' col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                <li className='footer-links'>Home</li>
                                <li className='footer-links'>About</li>
                                <li className='footer-links'>Contact</li>
                                <li className='footer-links'>Food</li>
                            </ul>
                        </div>
                        {/* second col link */}
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                <li className='footer-links'>Home</li>
                                <li className='footer-links'>About</li>
                                <li className='footer-links'>Contact</li>
                                <li className='footer-links'>Food</li>
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                            <ul className='space-y-3'>
                                <li className='footer-links'>Home</li>
                                <li className='footer-links'>About</li>
                                <li className='footer-links'>Contact</li>
                                <li className='footer-links'>Food</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>

        </motion.footer >
    )
}

export default Footer
