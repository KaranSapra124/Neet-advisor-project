import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { CiStar } from "react-icons/ci";

const Hero = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center py-20">
            <h1 className="text-4xl font-bold mb-5">
                Complete Handholding for <br /> <span className="text-yellow-400">NEET Counselling Guidance</span>
            </h1>
            <div className="mt-5 text-lg">
                <p className="mb-3">
                    <strong> 23,33,863</strong> students in India aspire to study MBBS and BDS & AYUSH.Only 8.3% could achieve it in 2024.
                </p>
                <p>
                    Complete NEET Counselling Guidance till Admission. NEET UG & NEET PG Counselling Experts Since 2016.
                </p>
            </div>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-5">
                Book a Free session
            </button>
            <div className="flex justify-center mt-10">
                <div className="mr-10">
                    <h1 className="text-3xl font-bold mb-2">
                        50K+
                    </h1>
                    <p className="text-lg">
                        Sessions Completed
                    </p>
                </div>
                <div className="flex items-center">
                    <FcGoogle className="text-4xl mr-3" />
                    <div className="flex flex-col">
                        <div className="flex mb-2">
                            {Array.from({ length: 5 }, () => {
                                return <CiStar className="fill-yellow-500" />
                            })}
                        </div>
                        <p className="font-bold text-lg">
                            4.6/ 5 | 4406 Reviews
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero