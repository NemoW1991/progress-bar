import React from 'react';
import './index.scss';

const Button: React.FC<{
  readonly buttonText?: string;
  readonly handleClick?: () => void;
}> = ({
  buttonText,
	handleClick
}) =>
  <button className='btn' onClick={handleClick} >{buttonText}</button>

export default Button;