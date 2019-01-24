import React from 'react';
import Typing from 'react-typing-animation';

const text = "' corner"

const AnimatedTitleComponent = () => (
  <Typing speed={125} className='im-fell-english'>
    <span>teachers corner</span>
    <Typing.Backspace count={7} />
    <span>{text}</span>
  </Typing>


);

export default AnimatedTitleComponent;
