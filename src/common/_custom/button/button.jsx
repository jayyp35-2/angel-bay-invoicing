import React from 'react';
import './Button.scss';

function Button({
  text = "Button",
  className = "",
  onClick
}) {
  return (
    <button className={`button-74 ${className ?? ""}`} role="button" onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
