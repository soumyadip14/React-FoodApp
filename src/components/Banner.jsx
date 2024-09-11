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
const Banner = () => {
    return (
        <section>
            <div className='container py-24'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center'>
                    {/* image */}
                    <div className='relative'>
                        <motion.img
                            initial={{ opacity: 0, x: -100, y: 100 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            whileHover={{ scale: 1.2, rotate: 15, x: 50, y: -50 }}
                            transition={{ duration: 0.8, delay: 0.5, scale: { duration: 0.5 } }}

                            src={BannerPng} alt='Banner' className='relative z-10 w-full lg:max-w-[350px]  img-shadow' />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className='absolute top-[-65%] right-[50%] transform translate-x-[50%] translate-y-[50%] h-[320px] w-[320px] md:w-[400px] md:h-[400px] bg-lightYellow rounded-full'>


                        </motion.div>
                    </div>
                    {/* text content */}
                    <div className='space-y-5 lg:max-w-[400px]'>
                        <motion.h1
                            variants={SlideUp(1)}
                            initial="initial"
                            whileInView="animate"
                            className='font-semibold text-6xl uppercase font-league'>
                            The Best Yummy Food in the town
                        </motion.h1>
                        <motion.p
                            variants={SlideUp(1.5)}
                            initial="initial"
                            whileInView="animate"
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            anditiis soluta quisquam adipisci optio ipsum provident
                            nobis Bl ad atque deserunt dolores!
                        </motion.p>
                        <motion.button
                            variants={SlideUp(1.6)}
                            initial="initial"
                            whileInView="animate"
                            className='btn-primary'>
                            Order Now
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
