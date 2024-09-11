import React from 'react'
import BannerPng from "/src/assets/banner.png";
import { motion } from "framer-motion";

const SlideUp = (delay) => {
    return {
        initial: {
            y: "100%",
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                delay: delay,
            },
        },
    };
};
const Testimonial = () => {
    return (
        <section>
            <div className='container py-24'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center'>
                    {/* text content */}
                    <div className='space-y-5 lg:max-w-[400px]'>
                        <motion.h1
                            variants={SlideUp(0.5)}
                            initial="initial"
                            whileInView="animate"
                            className='text-xl font-serif relative z-10'>
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Porro culpa nisi suscipit iure neque unde eligendi placeat
                            laudantium! Exercitationem id quia ipsam quidem illum aspernatur
                            culpa facilis placeat dolores eligendi"
                        </motion.h1>
                        <div className='flex items-center gap-3'>
                            <motion.img
                                variants={SlideUp(1.5)}
                                initial="initial"
                                whileInView="animate"
                                src='https://picsum.photos/id/237/536/354'
                                className='w-14 h-14 rounded-full object-cover'
                                alt='photo' />
                            <div>
                                <h2 className='text-xl font-bold'>
                                    Doggy Bhai
                                </h2>
                                <p className='text-sm'>
                                    Designation
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* image */}
                    <div className='relative'>
                        <motion.img
                            initial={{ opacity: 0, x: -100, y: 100 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            whileHover={{ scale: 1.2, rotate: 15, x: 50, y: -50 }}
                            transition={{ duration: 0.8, delay: 0.5, scale: { duration: 0.5 } }}

                            src={BannerPng} alt='Banner' className='relative z-10 w-full lg:max-w-[290px]  img-shadow' />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className='absolute top-[-65%] right-[50%] transform translate-x-[50%] translate-y-[50%] h-[320px] w-[320px] bg-lightYellow rounded-full'>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
