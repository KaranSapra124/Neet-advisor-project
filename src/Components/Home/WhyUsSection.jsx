import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
const WhyUsSection = () => {
    const services = [
        {
            title: "Experienced Team",
            content: "Our team of experts has years of experience in guiding students through the NEET counselling process, ensuring you receive the best possible advice and support."
        },
        {
            title: "Personalised Assistance",
            content: "We understand that every student's needs are unique, which is why we offer personalized assistance to help you make informed decisions about your future."
        },
        {
            title: "Revolutionary Approach",
            content: "Our innovative approach to NEET counselling combines cutting-edge technology with expert guidance, making it easier for you to navigate the complex counselling process."
        },
        {
            title: "Comprehensive Support",
            content: "From filling out forms to securing admission, we provide comprehensive support throughout the entire NEET counselling process, ensuring you have a smooth and stress-free experience."
        }
    ]

    return (
        <ScrollAnimation animateIn='backInLeft' animateOnce={true} duration={1.5} className='p-20'>

            <div className="w-full flex flex-col justify-center items-center mx-auto   rounded-lg ">
                <h1 className="text-4xl font-bold mb-4 text-center">Why <span className='text-yellow-400'>Neet Advisor ?</span></h1>
                <p className="text-lg font-semibold text-gray-600 mb-6 text-center">Unlock Your Success in 4 Simple Steps: NEET Counselling Guidance</p>
                <div className="flex w-full justify-center">
                    <div className='w-1/2 flex flex-col'>
                        {services.slice(0, 2).map((service, index) => (
                            <div key={index} className={`cursor-pointer hover:scale-105 transition-all  w-full p-4 mb-4`}>
                                <div className=" rounded-lg shadow-xl bg-gray-100 p-4 group">
                                    <input type="checkbox" className="hidden peer" />
                                    <label className="text-xl font-bold cursor-pointer peer-checked:text-blue-600">{service.title}</label>
                                    <p className="text-gray-600 mt-2 peer-checked:block">{service.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='w-1/2 flex justify-center items-center'>
                        <img src="https://img.freepik.com/free-photo/attractive-female-doctor-standing-with-documents-hospital_1303-20688.jpg?ga=GA1.1.715862983.1733989251&semt=ais_hybrid" className='h-[20rem] rounded w-[20rem] m-auto' alt="" />
                    </div>
                    <div className='w-1/2 mt-auto flex flex-col'>
                        {services.slice(2, services.length).map((service, index) => (
                            <div key={index} className={`cursor-pointer hover:scale-105 transition-all w-full p-4 mb-4`}>
                                <div className="bg-gray-100 rounded-lg shadow-xl p-4 group">
                                    <input type="checkbox" className="hidden peer" />
                                    <label className="text-xl font-bold cursor-pointer peer-checked:text-blue-600">{service.title}</label>
                                    <p className="text-gray-600 mt-2 peer-checked:block">{service.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default WhyUsSection