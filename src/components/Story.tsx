import { ClockIcon } from '@heroicons/react/24/outline';
import { HeartIcon, PencilIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

type StoryProps = {
  title: string;
  text: string;
  img: string;
  like: string;
  time: string;
  url: string;
  by: string;
  btn: string;
};

function Story({ time, title, btn, by, img, like, text, url }: StoryProps) {
  return (
    <div className="overflow-hidden rounded-lg border-2 shadow-md">
      <Image
        src={img}
        alt=""
        width={500}
        height={300}
        className="overflow-hidden rounded-lg"
      />
      <div className="px-6 py-2">
        <div className="flex items-center justify-between font-semibold">
          <div className="flex items-center gap-1">
            <HeartIcon className="h-4 text-red-600" />
            <span>{like}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="h-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-1 text-blue-600">
            <PencilIcon className="h-4" />
            <span>{by}</span>
          </div>
        </div>
        <p className="mt-4 text-lg font-bold">{title}</p>
        <p className="line-clamp-3 text-sm">{text}</p>
        <div className="mt-6 cursor-pointer rounded-lg bg-black px-4 py-2 text-center">
          <a
            href={url}
            className=" block text-slate-100"
            target="_blank"
            rel="noreferrer"
          >
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Story;
