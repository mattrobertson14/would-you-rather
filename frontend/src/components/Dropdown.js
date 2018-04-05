import React from 'react';
import '../stylesheets/Dropdown.css';
import propTypes from 'prop-types';

const Dropdown = ({ children, width }) => {

  return (
    <div className="Dropdown" style={{ width : width + 'px'}}>
      { React.Children.map(children, child =>{
        return child
      })}
    </div>
  )
}

Dropdown.propTypes = {
  children : propTypes.node
}

export default Dropdown;
