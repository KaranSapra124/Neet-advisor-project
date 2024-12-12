import React from 'react'
import { FaUsers, FaArrowRight } from "react-icons/fa6"
import { FaChalkboardTeacher } from "react-icons/fa";

import ReactOnScroll from "react-animate-on-scroll"
const CounsellingSection = () => {
    return (
        <>
            <div className='bg-gray-100 bg-fixed  p-20'>
                <div className="text-center mb-10">
                    {/* <ReactOnScroll animateOnce={true} animateIn='backInLeft' duration={1.5} offset={100} className='w-full'> */}
                        <h2 className="text-4xl font-bold mb-4 text-black">What We Have To <span className='text-yellow-400'>Offer</span> ?</h2>
                    {/* </ReactOnScroll> */}
                    {/* <ReactOnScroll animateOnce={true} animateIn='backInRight' duration={1.5} offset={100} className='w-full'> */}
                        <p className="text-lg text-black">Get personalized answers and ease your biggest doubts with Video Counselling from our curated experts.</p>
                    {/* </ReactOnScroll> */}
                </div>
                <div className="flex h-full mx-auto justify-between items-center">
                    <ReactOnScroll animateOnce={true} animateIn='backInLeft' duration={1.5} delay={0} offset={100} className='w-full'>
                        {/* <div className="w-full"> */}
                        <img src="https://img.freepik.com/free-photo/teenagers-with-textbooks-street_23-2147656226.jpg?semt=ais_hybrid" alt="" className="w-full h-[26rem]  object-cover rounded-lg" />
                        {/* </div> */}
                    </ReactOnScroll>

                    <div className="w-full flex flex-col justify-center items-center ">
                        <ReactOnScroll animateOnce={true} animateIn='backInDown' duration={1.5} delay={0} offset={100} className='w-full'>
                            <div className="w-full  p-4">
                                <div className="bg-white p-4 shadow-lg hover:scale-105 transition-all cursor-pointer rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FaChalkboardTeacher className="text-2xl mr-3 text-black" />
                                        <h2 className="text-2xl font-bold text-black">Expert Counselling</h2>
                                    </div>
                                    <p className="text-lg mb-4 text-black">Personalized Video Counselling from Curated Experts on Exams, Courses, Colleges and Career selection</p>
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded flex items-center">
                                        Start Now
                                    </button>
                                </div>
                            </div>
                        </ReactOnScroll>
                        <ReactOnScroll animateOnce={true} animateIn='backInUp' duration={1.5} delay={0} offset={100} className='w-full'>

                            <div className="w-full  p-4">
                                <div className="bg-white p-4 shadow-lg hover:scale-105 transition-all cursor-pointer rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FaUsers className="text-2xl mr-3 text-black" />
                                        <h2 className="text-2xl font-bold text-black">Career Guidance</h2>
                                    </div>
                                    <p className="text-lg mb-4 text-black">Get expert advice on choosing the right career path, creating a personalized career plan, and developing the skills you need to succeed.</p>
                                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded flex items-center">
                                        Explore Now <FaArrowRight className="ml-2" />
                                    </button>
                                </div>
                            </div>
                        </ReactOnScroll>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounsellingSection