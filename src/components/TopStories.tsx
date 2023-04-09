import { story } from 'src/data';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import Story from './Story';
function TopStories() {
  const { title, news } = story;
  return (
    <div>
      <h1>{title}</h1>
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
        // slidesPerView={4}
        spaceBetween={20}
        loop
        navigation={true}
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
        {/* <div
          onClick={() => swiper?.slidePrev()}
          className="absolute left-5 top-1/2 z-10 cursor-pointer rounded-full p-2 transition duration-200 ease-in hover:bg-slate-100"
        >
          <ChevronLeftIcon className="h-8" />
        </div>
        <div
          onClick={() => swiper?.slideNext()}
          className="absolute right-5 top-1/2 z-10 cursor-pointer rounded-full  p-2 transition duration-200 ease-in hover:bg-slate-100"
        >
          <ChevronRightIcon className="h-8" />
        </div> */}
      </Swiper>
    </div>
  );
}

export default TopStories;
