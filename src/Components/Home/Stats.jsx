import React, { useEffect, useRef, useState } from 'react'

const Stats = () => {
    const statistics = [
        {
            title: "Seminars & Webinars",
            count: 1000
        },
        {
            title: "Students Impacted",
            count: 1000
        },
        {
            title: "Counselling Sessions",
            count: 1000
        },
        {
            title: "Successful Clients",
            count: 1000
        },
    ]
    return (
        <>
            <div className='flex flex-col p-20  w-full'>
                <h1 className='text-4xl font-bold text-center mb-[5rem]'>Stats Which <span className='text-yellow-400'>Defines Us!</span></h1>
                <div className='flex justify-evenly'>
                    {statistics?.map((elem, index) => {
                        return <>
                            <div>
                                <CountUp num={elem.count} className={"text-4xl text-center font-extrabold"} />
                                <h2 className='text-xl mt-4 font-semibold'>{elem.title}</h2>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    )
}

// import { useState, useEffect, useRef } from 'react';

const CountUp = ({ num, className }) => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 10)

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (count === num) clearInterval(intervalRef.current);
    }, [count, num]);

    return <h1 className={className}>{count}</h1>
}
export default Stats