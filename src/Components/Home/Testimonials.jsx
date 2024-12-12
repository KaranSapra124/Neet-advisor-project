import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonialsData = [
    {
        id: 1,
        name: 'John Doe',
        title: 'CEO, ABC Corporation',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Marketing Manager, DEF Agency',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 3,
        name: 'Bob Johnson',
        title: 'Founder, GHI Startup',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 4,
        name: 'Alice Brown',
        title: 'Product Manager, JKL Company',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
    {
        id: 5,
        name: 'Mike Davis',
        title: 'CTO, MNO Corporation',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.',
        image: 'https://picsum.photos/200/300',
    },
];

const Testimonials = () => {

    return (
        <div className="p-20 bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-10">What We Do , <span className='text-yellow-400'>We Prove It!</span></h1>
            {/* <div className="flex justify-between mb-4"> */}
           

            <Swiper
                spaceBetween={30} // Space between slides
                slidesPerView={2} // Only show one slide at a time
                autoplay={{
                    delay: 1000, // 3 seconds delay
                    disableOnInteraction: false, // Keep autoplay running after interaction
                }}
                loop={true} // Infinite loop
                pagination={{
                    clickable: true,
                }}
                // navigation={true}

                className="testimonial-swiper "

            >
                {testimonialsData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} >
                        <div className="bg-white shadow-lg shadow-black  rounded-xl mb-8 p-8 flex flex-col md:flex-row items-center text-center  mx-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-50   mb-4 md:mb-0 "
                            />
                            <div className="flex flex-col text-left p-5">
                                <p className="text-gray-700 text-justify mb-4">{testimonial.testimonial}</p>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{testimonial.name}</h2>
                                <p className="text-sm text-gray-500">{testimonial.title}</p>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Testimonials;    