import React from 'react';
import './UI.css';
import propTypes from 'prop-types';

const Avatar = ({ image, size }) => {
  let pixels;
  if (!size) { size = "medium" }
  switch (size) {
    case "small" :
      pixels = 50;
      break;
    case "medium" :
      pixels = 75;
      break;
    case "large" :
      pixels = 100;
      break;
    default:
      pixels = size;
  }

  let style = {
    borderRadius : `${ pixels }px`,
    height : `${ pixels }px`,
    width : `${ pixels }px`,
    fontSize : `${ pixels }px`
  }

  return (
    <div className="Avatar" style={ style }>
      {image? <img src={ image } alt="avatar" />
        : <i className="material-icons">account_circle</i>
      }
    </div>
  )
}

Avatar.propTypes = {
  image : propTypes.string,
  size : propTypes.oneOfType([propTypes.string, propTypes.number])
}

export default Avatar;
