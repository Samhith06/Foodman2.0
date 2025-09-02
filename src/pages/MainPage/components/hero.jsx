import React from "react";
import basepicture from '../../../assets/images/pic1.png';
const Hero = () => {
    return (
    <section className="flex flex-row items-center justify-center  bg-white p-4 m-4 mt-6 pt-6 text-center gap-8">
        <div className="max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-start text-left ">
            <h1 className="text-4xl tracking-tighter lg:w-md lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight text-left">
                Meet, Eat & Enjoy The{' '}
                <span className="text-orange-500">True Taste</span>.
            </h1>
            <p className="text-lg tracking-tight lg:w-lg lg:text-xl text-gray-600 mb-8 leading-relaxed font-[500] text-left">
                Discover the true essence of culinary delight as you meet eat and savor the authentic flavors that define our passion for food.
            </p>
            <button className="bg-orange-500 hover:bg-orange-500 hover:text-black text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-300 ">
                Order Now
            </button>
        </div>
        <div>
            <img src={basepicture} alt="Delicious Food" className='rounded-full' />
        </div>
    </section>
    );
};

export default Hero;