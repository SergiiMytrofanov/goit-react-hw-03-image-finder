import React from 'react';
import { Vortex } from 'react-loader-spinner'

const Loader = () => {
  return <div className="Loader"><Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['#107980', '#76A1A7', '#EDE1CF', '#D9C5BC', '#B6ADAF', '#66347F', '#fe777d', '#fecdc7']}
/></div>;
};

export default Loader;
