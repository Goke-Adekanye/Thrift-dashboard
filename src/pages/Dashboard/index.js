import React from 'react';

import PageTitle from '../../components/pageTitle';
import PortfolioRow from './dashboardPortfolio';
import { Chart } from './dashboardChart';
import DashboardTabs from './dashboardTabs';
import { Data, userData } from './dummyData';

export default function Dashboard() {
  return (
    <div className='main-container flow'>
      <PageTitle text='Welcome,' />
      <PortfolioRow />
      <Chart data={userData} title='Transaction Analytics' grid dataKey='Transaction' />
      <div className='padding-2 border-radius-1 box-shadow-1'>
        <DashboardTabs data={Data} />
      </div>
    </div>
  );
}
