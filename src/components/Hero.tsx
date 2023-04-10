/* eslint-disable jsx-a11y/media-has-caption */
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

import { heroapi } from 'src/data';

function Hero() {
  const { title, subtitle, img, btntext, sociallinks, logoImg, videos } =
    heroapi;
  return (
    <section className="mb-12 h-[50vh] bg-gradient-to-b from-blue-800 to-blue-400 px-6 py-6 md:h-[80vh]">
      <div className="flex items-center justify-between">
        <div className="w-20">
          <Image src={logoImg} alt="" />
        </div>
        <div className="flex gap-2 text-slate-100">
          <MagnifyingGlassIcon className="h-5 cursor-pointer duration-150 ease-in active:scale-110" />
          <HeartIcon className="h-5 cursor-pointer transition duration-150 ease-in active:scale-110" />
          <ShoppingBagIcon className="h-5 cursor-pointer duration-150 ease-in active:scale-110" />
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

      <div className="mt-12 flex items-center justify-between">
        <ul className="flex flex-col">
          {videos.map((v) => (
            <li className="relative h-16 w-16 rounded-lg">
              <Image src={v.imgsrc} alt="" className="relative" />
              <video
                autoPlay
                loop
                playsInline
                className="absolute h-full w-full"
              >
                <source src={v.clip} type="video/mp4" />
                <track
                  src="fgsubtitles_en.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
              </video>
            </li>
          ))}
        </ul>
        <div className="w-3/4 -rotate-[35deg] transition duration-300 ease-in hover:rotate-0">
          <Image src={img} alt="" priority />
        </div>
        <ul className="flex flex-col gap-3">
          {sociallinks.map((link) => (
            <li className="w-5 cursor-pointer transition duration-200 ease-in hover:scale-110">
              <Image src={link.icon} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
