import React from 'react';
import { useHistory } from 'react-router-dom';
import './portfolioItem.css';

function PortfolioItems({ title, value, icon, second, third, link }) {
  const history = useHistory();
  return (
    <div
      className={`PortfolioItems ${second && 'second'} ${
        third && 'third'
      } grid box-shadow-2 cursor-pointer border-radius-1`}
      onClick={() => history.push(link)}>
      <span className='icon flex align-justify__center'>{icon}</span>
      <p className='uppercase bold'>{title}</p>
      <span className='value bold'>{value}</span>
    </div>
  );
}

export default PortfolioItems;
