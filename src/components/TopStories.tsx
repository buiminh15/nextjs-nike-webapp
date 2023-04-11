import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { story } from 'src/data';

import 'swiper/css/navigation';

import Story from './Story';

import 'swiper/css';

function TopStories() {
  const { title, news } = story;
  return (
    <div>
      <h1 className="mb-6 text-4xl font-bold lg:text-3xl">{title}</h1>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={20}
        loop
        navigation
        modules={[Navigation]}
      >
        {news.map((item) => (
          <SwiperSlide key={item.title}>
            <Story
              btn={item.btn}
              by={item.by}
              img={item.img}
              like={item.like}
              text={item.text}
              time={item.time}
              title={item.title}
              url={item.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopStories;
