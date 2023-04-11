import React from 'react';
import { sneaker } from 'src/data';
import HighLights from './HighLights';

function FeaturedContainer() {
  const { heading, title, text, btn, img, url } = sneaker;
  return (
    <HighLights
      isFeatured
      btn={btn}
      heading={heading}
      img={img}
      text={text}
      title={title}
      url={url}
    />
  );
}

export default FeaturedContainer;
