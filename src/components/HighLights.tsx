import React from 'react';
import Image, { StaticImageData } from 'next/image';

type HighLightsProps = {
  heading: string;
  title: string;
  btn: string;
  text: string;
  url: string;
  img: StaticImageData;
  isFeatured?: boolean;
};

function HighLights({
  btn,
  url,
  heading,
  img,
  title,
  text,
  isFeatured,
}: HighLightsProps) {
  return (
    <div
      className={`flex flex-col ${
        isFeatured ? 'md:flex-row' : 'md:flex-row-reverse'
      } md:items-center md:justify-between md:gap-4`}
    >
      <div className="text-center md:flex-1 md:text-left">
        <h1 className="text-3xl font-bold text-blue-500 md:text-4xl">
          {heading}
        </h1>
        <p className="text-2xl font-bold md:text-5xl">{title}</p>
        <p className="mt-4 md:text-lg">{text}</p>
        <div className="mt-4">
          <a
            href={url}
            className=" rounded bg-black px-6 py-2 text-slate-100 md:text-lg"
          >
            {btn}
          </a>
        </div>
      </div>
      <div className="xl:flex-1" />
      <div className="mt-10 rotate-6 transition duration-500 ease-in-out hover:-rotate-12 md:flex-1">
        <Image src={img} alt="" />
      </div>
    </div>
  );
}

export default HighLights;
