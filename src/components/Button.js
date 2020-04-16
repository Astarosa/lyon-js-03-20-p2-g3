import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button (props) {
  return (
    <Link className='button-config' id={props.buttonId} to={props.link}>{props.linkName}</Link>
  );
}

export default Button;
