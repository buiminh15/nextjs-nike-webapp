import React from 'react';
import { footerAPI } from 'src/data';

function Footer() {
  const { titles, links } = footerAPI;
  return (
    <div
      className="mt-12 flex flex-col gap-6 
    bg-gradient-to-b
    from-indigo-600 to-blue-500 px-6 py-8"
    >
      <div className="grid grid-cols-3 md:mx-auto md:w-2/3">
        {titles.map((item, index) => (
          <div key={`footer-col-${index}`}>
            <h3 className="text-lg font-bold text-slate-200">{item.title}</h3>
            <ul className="mt-4 flex flex-col gap-1">
              {links[index].map((item) => (
                <li
                  key={item.link}
                  className="text-sm font-semibold text-slate-200"
                >
                  {item.link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-center text-slate-200">
        Copyright© All Reserved Rights minhdev 2023
      </p>
    </div>
  );
}

export default Footer;
