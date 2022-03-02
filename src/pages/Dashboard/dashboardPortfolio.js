import React from 'react';
import { Security, ShowChart, Group } from '@material-ui/icons';
import PortfolioItems from '../../components/portfolioitem';

function PortfolioRow() {
  return (
    <div className='PortfolioRow flex flex-col justify__space-between'>
      <PortfolioItems title='Ajo Groups' value='3' icon={<Group />} link='/ajo/join' />
      <PortfolioItems title='Total Savings' value='₦100,000' icon={<ShowChart />} second />
      <PortfolioItems title='Total Contributors' value='10' icon={<Security />} third />
    </div>
  );
}

export default PortfolioRow;
