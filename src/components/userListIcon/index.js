import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

export default function UserListIcon({ title, link, icon }) {
  return (
    <Tooltip title={title} placement='top'>
      <Link to={link}>
        <span className='icon-span flex align-justify__center cursor-pointer'>{icon}</span>
      </Link>
    </Tooltip>
  );
}
