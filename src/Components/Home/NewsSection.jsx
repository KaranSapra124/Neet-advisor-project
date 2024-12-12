import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ScrollAnimation from 'react-animate-on-scroll';
const NewsSection = () => {
    const newsData = [
        {
            headline: "Scientists Discover New Species of Ancient Human in the Philippines",
            description: "The discovery of a new species of ancient human in the Philippines has shed new light on human evolution and migration patterns.",
            time: "1 hour ago",
            image: {
                url: "https://picsum.photos/200/300",
                alt: "Ancient human fossil"
            }
        },
        {
            headline: "Global Stock Markets Plummet Amid Fears of Economic Downturn",
            description: "Global stock markets have plummeted in recent days amid fears of an economic downturn, with investors scrambling to sell off shares and bonds.",
            time: "3 hours ago",
            image: {
                url: "https://picsum.photos/200/301",
                alt: "Stock market graph"
            }
        },
        {
            headline: "New Study Reveals the Devastating Impact of Climate Change on Coral Reefs",
            description: "A new study has revealed the devastating impact of climate change on coral reefs, with rising sea temperatures and acidification causing widespread damage and destruction.",
            time: "5 hours ago",
            image: {
                url: "https://picsum.photos/200/302",
                alt: "Coral reef damage"
            }
        },
        {
            headline: "NASA's Artemis Mission Aims to Return Humans to the Moon by 2024",
            description: "NASA's Artemis mission aims to return humans to the moon by 2024, with the goal of establishing a sustainable presence on the lunar surface.",
            time: "7 hours ago",
            image: {
                url: "https://picsum.photos/200/303",
                alt: "Artemis mission logo"
            }
        },
        {
            headline: "New Breakthrough in the Treatment of Parkinson's Disease",
            description: "Scientists have made a major breakthrough in the treatment of Parkinson's disease, developing a new medication that can slow down the progression of the disease.",
            time: "9 hours ago",
            image: {
                url: "https://picsum.photos/200/304",
                alt: "Parkinson's disease medication"
            }
        },
        {
            headline: "Global Leaders Meet to Discuss the Growing Threat of Cybersecurity",
            description: "Global leaders are meeting in Tokyo today to discuss the growing threat of cybersecurity, with the goal of developing new strategies and technologies to protect against cyber attacks.",
            time: "11 hours ago",
            image: {
                url: "https://picsum.photos/200/305",
                alt: "Cybersecurity conference"
            }
        },
        {
            headline: "New Study Reveals the Benefits of Meditation for Mental Health",
            description: "A new study has revealed the benefits of meditation for mental health, with regular practice shown to reduce stress and anxiety and improve mood and cognitive function.",
            time: "13 hours ago",
            image: {
                url: "https://picsum.photos/200/306",
                alt: "Person meditating"
            }
        },
        {
            headline: "Scientists Discover New Species of Giant Squid in the Deep Sea",
            description: "Scientists have discovered a new species of giant squid in the deep sea, with the massive creature measuring over 20 feet in length.",
            time: "15 hours ago",
            image: {
                url: "https://picsum.photos/200/307",
                alt: "Giant squid"
            }
        },
        {
            headline: "New Breakthrough in the Development of Quantum Computing",
            description: "Scientists have made a major breakthrough in the development of quantum computing, with the goal of creating a new generation of supercomputers that can solve complex problems and simulate complex systems.",
            time: "17 hours ago",
            image: {
                url: "https://picsum.photos/200/308",
                alt: "Quantum computer"
            }
        },
        {
            headline: "Global Economic Growth Slows Down Amid Trade Tensions",
            description: "Global economic growth has slowed down in recent months amid trade tensions and rising interest rates, with investors and policymakers scrambling to respond.",
            time: "19 hours ago",
            image: {
                url: "https://picsum.photos/200/309",
                alt: "Global economic graph"
            }
        }
    ];
    return (
        <>
            {/* <ScrollAnimation animateIn='backInRight' duration={1.5} delay={0} className='bg-gray-100'> */}

            <div className='p-20 flex flex-col justify-center bg-gray-100'>
                <h1 className='text-4xl font-bold text-center'>Get the <span className='text-yellow-400'>Latest News and Updates</span> , all at One place !</h1>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        autoplay={{
                            delay: 1000, // delay between transitions in milliseconds
                            disableOnInteraction: false, // autoplay will not be disabled after user interactions
                        }}
                        className="mySwiper"
                    >
                        {newsData?.map((elem, index) => {
                            return (
                                <SwiperSlide key={index} >
                                    <div className="w-full   p-4 h-[30rem] shadow-xl m-7">
                                        <img src={elem.image.url} alt={elem.image.alt} className="w-full h-48 object-cover rounded-t-md" />
                                        <h1 className="text-2xl font-bold mt-4">{elem.headline}</h1>
                                        <p className="text-lg text-gray-600">{elem.description}</p>
                                        <p className="text-sm text-gray-500">{elem.time}</p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            {/* </ScrollAnimation> */}
        </>
    );
}

export default NewsSection