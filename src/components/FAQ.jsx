import React, { useState } from 'react';
import { data } from "../assets/faqs.js";
import FaqItem from './FaqItem.jsx';
import "./styles.css";
const FAQ = () => {

    return (
        <>
            <div className='bg-[#F2F6F8]'>
                <div className='w-[80%] m-auto flex flex-row p-5 justify-between ' id="one">
                    <div className='lg:w-[20%] sm:w-[100%] mt-12'>
                        <p className='text-2xl font-bold'>Frequently Asked Questions</p>
                        <p className='font-light text-[15px] mt-6'>Haven't found what you've looking fro? Try the <span className='text-[#6EACE1]'>Wix Help Center</span> or <span className='text-[#6EACE1]'>Contact Us</span></p>
                    </div>
                    <div className='lg:w-[70%] sm:w-[100%]' id="one">
                        {

                            data.map((item, index) => (

                                <FaqItem question={item.q1} answer={item.a1} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default FAQ
