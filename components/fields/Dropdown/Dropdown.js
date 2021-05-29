import React from 'react';

const Dropdown = props => {
  return (
    <li className="dropdown">
      <a className="dropdown-toggle nowrap" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fa fa-globe"/>
        <span>TR</span>
        <i className="fa fa-caret-down"/>
      </a>
      <ul className="dropdown-menu dropdown-menu-right">
        <li><a href="#" lang="en">EN</a></li>
      </ul>
    </li>
  );
};

export default Dropdown;
