import React from 'react';
import { useHistory } from 'react-router-dom';
import faker from 'faker';
import { fDate } from '../../utils/formatTime';
import './AjoDetail.css';

export default function AjoDetail() {
  const history = useHistory();
  return (
    <div className='main-container'>
      <div className='detail-container flex justify__space-between'>
        <div className='left-div'>
          <div className='border-container border-radius-3s'>
            <h2 className='h2-header uppercase bold'>Amount</h2>
            <span className='span-details'>₦5000.00</span>
          </div>

          <div className='flex-c flex justify__space-between'>
            <div className='mini border-container border-radius-3s'>
              <p className='bold text-content uppercase'>Ajo Name</p>
              <p className='bold text-content tx'>XYZ Savings</p>
            </div>
            <div className='mini border-container border-radius-3s'>
              <p className='bold text-content uppercase'>Creator's Name</p>
              <p className='bold text-content tx'>James Emeka</p>
            </div>
            <div className='mini border-container border-radius-3s'>
              <p className='bold text-content uppercase'>Duration</p>
              <p className='bold text-content tx'>6 Months</p>
            </div>
          </div>
        </div>
        <div className='right-div'>
          <div className='border-container border-radius-3s'>
            <h2 className='h2-header uppercase bold'>Time Frame</h2>
            <span className='span-details fw-light'>
              {fDate(faker.date.past())}
              {' - '} {fDate(faker.date.past())}
            </span>
          </div>
        </div>
      </div>

      <div className='bottom-div flex'>
        <button
          onClick={() => history.push('/ajo/join')}
          className='bottom-btn border-radius-3s text-center cursor-pointer'>
          BACK
        </button>
      </div>
    </div>
  );
}
