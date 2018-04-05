import React from 'react';
import './UI.css'
import propTypes from 'prop-types';

export { default as Avatar } from './Avatar';

export const MaterialButton = () => {

  return (
    <div className="MaterialButton">

    </div>
  )
}

MaterialButton.propTypes = {}

export const MaterialTextField = () => {

  return (
    <div className="MaterialTextField">

    </div>
  )
}

MaterialTextField.propTypes = {}

export const Appbar = () => {

  return(
    <div className="Appbar">

    </div>
  )
}

Appbar.propTypes = {}

export const Card = ({ children, style }) => {

  return (
    <div className="Card" style={style}>
      { children }
    </div>
  )
}

Card.propTypes = {
  children : propTypes.node,
  style : propTypes.object
}
