import React from 'react';
import Food1 from "/src/assets/food.png";
import Food2 from "/src/assets/food2-plate.png";
import Food3 from "/src/assets/banner.png";
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
const DesertData = [
    {
        id: 1,
        name: "Hot Desert",
        img: Food1,
        price: "$5.66",
        delay: 0.4,
    },
    {
        id: 2,
        name: "Hot Cake",
        img: Food2,
        price: "$5.00",
        delay: 0.8,
    },
    {
        id: 3,
        name: "Hot Cake",
        img: Food3,
        price: "$5.99",
        delay: 1.2,
    },
];
const Desert = () => {
    return (
        <section>
            <div className='container py-12'>
                <motion.h3
                    variants={SlideUp(.5)}
                    initial="initial"
                    animate="animate"
                    className='text-2xl font-semibold text-darkGreen uppercase py-8'>Hot Desert</motion.h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    {DesertData.map((item) => {
                        return (
                            <motion.div
                                key={item.id}
                                variants={SlideUp(item.delay)}
                                initial="initial"
                                animate="animate"
                                className='group bg-white/50 shadow-md p-3 flex items-center gap-3 '>
                                <img src={item.img} alt='img' className='w-24 rounded-full img-shadow group-hover: scale-110 transition-all duration-700 group-hover:rotate-[55deg] ' />
                                <div>
                                    <h2 className='text-xl font-bold'>{item.name}</h2>
                                    <p className='text-sm font-semibold text-yellow-500'>{item.price}</p>
                                </div>

                            </motion.div>

                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Desert
