import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";

const slides = [
  { id: 1, title: "Basketball Duel Championship", image: '1.jpeg' },
  { id: 2, title: "Best of Lionel Messi", image: '2.jpeg' },
  { id: 3, title: "Tennis World Championship", image: '3.jpeg' },
  { id: 4, title: "Best of Lamin Yamal", image: '4.jpeg' },
  { id: 5, title: "American Football League", image: '5.jpeg' },
  { id: 6, title: "Basketball Pro Championship", image: '6.jpeg' },
  { id: 7, title: "Baseball Pro Championship", image: '7.jpeg' },
];

const getImage = (imageName) => {
  return require(`../../assets/${imageName}`);
};

const ContentSection = () => {
  return (
    <section style={{background: "linear-gradient(90deg, rgba(21,0,36,1) 0%, rgba(76,9,121,1) 70%)"}}
     className="content-section flex justify-center items-center min-h-screen px-12 bg-gradient-to-r from-[#3a6073] to-[#16222a] text-white">
      <div className="content flex flex-col text-center justify-center gap-4">
        <div className="info w-[600px]">
          <h2 className="text-4xl font-semibold mb-4">OJGames</h2>
          <p className="opacity-85 text-lg mb-6">
          Dive into a world of endless possibilities at OJGames, where every gamer finds their perfect match. Whether you're a console connoisseur, a PC pro, or a casual mobile player, we've got the latest games, gear, and gadgets to fuel your passion.
          </p>
          <button className="bg-white font-medium text-[#4c0979] py-3 px-6 rounded-full">
            Go Shopping
          </button>
        </div>

        <div className="carousel w-[600px] mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true,
            }}
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination]}
            className="swiper"
          >
          {slides.map((slide)=> (
            <SwiperSlide key={slide.id} className="bg-cover bg-center text-center flex items-end px-4 py-10"
              style={{ backgroundImage: `linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(${getImage(slide.image)})` }}>
              
              {({ isActive }) => (
                <div className={isActive ? 'active' : 'not-active'}>
                <div>
                <h2 className="text-lg font-semibold">{slide.title}</h2>
                <p>Current slide is {isActive ? 'active' : 'not active'}</p>
                <a href="/" className="text-black rounded bg-white px-4 py-1.5 mt-2 inline-block">
                  Explore
                </a>
              </div>
                </div>
              )}
            </SwiperSlide>
          ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;