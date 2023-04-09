import React from 'react';
import { highlight } from 'src/data';
import HighLights from './HighLights';

function HighLightsContainer() {
  const { btn, heading, img, text, title, url } = highlight;
  return (
    <HighLights
      btn={btn}
      heading={heading}
      img={img}
      text={text}
      title={title}
      url={url}
    />
  );
}

export default HighLightsContainer;
