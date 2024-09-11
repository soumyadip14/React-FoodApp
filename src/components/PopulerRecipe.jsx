import React from 'react'
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
const PopulerRecipeData = [
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

const PopulerRecipe = () => {
    return (
        <section>
            <div className='container py-24'>
                <motion.h3
                    variants={SlideUp(0.6)}
                    initial="initial"
                    whileInView="animate"
                    className='text-4xl text-center font-league font-semibold uppercase py-8'>
                    Our Populer Recipe
                </motion.h3>
                {/* card section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center'>
                    {PopulerRecipeData.map((item) => {
                        return (

                            <motion.div
                                key={item.id}
                                variants={SlideUp(item.delay)}
                                initial="initial"
                                animate="animate"
                                className='group bg-white/50 shadow-xl p-3 space-y-3 text-center rounded-xl '>
                                <img src={item.img} alt='img' className='w-44 mx-auto rounded-full img-shadow group-hover: scale-x-110 group-hover:translate-y-[-50px] group-hover:translate-x-10 transition-all duration-400 group-hover:rotate-[55deg] ' />
                                <div>
                                    <button className='btn-primary group-hover:mb-3 opacity-0 group-hover:opacity-100'>Buy Now</button>
                                    <h2 className='text-xl font-semibold'>{item.name}</h2>
                                    <p className='text-xl font-bold text-yellow-500'>{item.price}</p>
                                </div>

                            </motion.div>

                        )

                    })}
                </div>
            </div>
        </section>
    )
}

export default PopulerRecipe
