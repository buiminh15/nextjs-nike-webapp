/* eslint-disable jsx-a11y/media-has-caption */
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

import { heroapi } from 'src/data';

function Hero() {
  const { title, subtitle, img, btntext, sociallinks, logoImg, videos } =
    heroapi;
  return (
    <section className="relative mb-12 h-[60vh] px-6 py-6 md:h-[70vh] md:px-10 lg:h-[80vh] lg:px-20">
      <div className="clip-path absolute inset-0 -z-20 bg-gradient-to-b from-blue-800 to-violet-300" />
      <div className="flex items-center justify-between">
        <div className="w-20 lg:w-24">
          <Image src={logoImg} alt="" />
        </div>
        <div className="flex gap-2 text-slate-100 lg:gap-4">
          <MagnifyingGlassIcon className="h-5 cursor-pointer duration-150 ease-in active:scale-110 lg:h-8" />
          <HeartIcon className="h-5 cursor-pointer transition duration-150 ease-in active:scale-110 lg:h-8" />
          <ShoppingBagIcon className="h-5 cursor-pointer duration-150 ease-in active:scale-110 lg:h-8" />
        </div>
      </div>

      <div className="mt-10 text-center text-slate-50">
        <p className="text-3xl font-extrabold">{title}</p>
        <p className="text-3xl font-extrabold">{subtitle}</p>
        <button
          className="mt-6 rounded-full bg-slate-100 px-6 py-1 text-sm text-black shadow-md shadow-slate-200 transition duration-200 ease-in-out active:scale-75"
          type="button"
        >
          {btntext}
        </button>
      </div>

      <div className="relative isolate h-fit w-full lg:px-28">
        <div className=" mt-12 flex h-full w-full items-center justify-between">
          <ul className="flex flex-col gap-2">
            {videos.map((v) => (
              <li
                key={`video-${v.id}`}
                className="group relative aspect-square h-16 cursor-pointer overflow-hidden rounded-2xl shadow md:h-20 lg:h-24"
              >
                <Image
                  src={v.imgsrc}
                  alt=""
                  className="relative z-10 h-full w-full transition duration-100 ease-in group-hover:opacity-0"
                />
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 h-full object-cover"
                >
                  <source src={v.clip} type="video/mp4" />
                </video>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-3">
            {sociallinks.map((link) => (
              <li
                key={`link-${link.id}`}
                className="w-5 cursor-pointer transition duration-200 ease-in hover:scale-110 md:w-8 lg:w-10"
              >
                <Image src={link.icon} alt="" />
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute left-1/2 top-0 -z-10 w-3/4 -translate-x-1/2 -rotate-[35deg] transition duration-300 ease-in md:w-1/2 lg:w-1/3 xl:w-2/5">
          <Image src={img} alt="" priority />
        </div>
      </div>
    </section>
  );
}

export default Hero;
