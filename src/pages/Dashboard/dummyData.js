// import React from 'react';
import faker from 'faker';
import { fDate } from '../../utils/formatTime';

export const userData = [
  {
    name: 'Jan',
    Transaction: 4000,
  },
  {
    name: 'Feb',
    Transaction: 3000,
  },
  {
    name: 'Mar',
    Transaction: 5000,
  },
  {
    name: 'Apr',
    Transaction: 4000,
  },
  {
    name: 'May',
    Transaction: 3000,
  },
  {
    name: 'Jun',
    Transaction: 2000,
  },
  {
    name: 'Jul',
    Transaction: 4000,
  },
  {
    name: 'Agu',
    Transaction: 3000,
  },
  {
    name: 'Sep',
    Transaction: 4000,
  },
  {
    name: 'Oct',
    Transaction: 1000,
  },
  {
    name: 'Nov',
    Transaction: 4000,
  },
  {
    name: 'Dec',
    Transaction: 3000,
  },
];

export const Data = [
  {
    id: 1,
    name: 'ABC Savings',
    amount: '₦10,000',
    type: 'debit',
    time: fDate(faker.date.past()),
  },
  {
    id: 2,
    name: 'MLK Savings',
    amount: '₦33,000',
    type: 'credit',
    time: fDate(faker.date.past()),
  },
  {
    id: 3,
    name: 'BHQ Savings',
    amount: '₦12,000',
    type: 'credit',
    time: fDate(faker.date.past()),
  },
  {
    id: 4,
    name: 'MKO Savings',
    amount: '₦110,000',
    type: 'debit',
    time: fDate(faker.date.past()),
  },
  {
    id: 5,
    name: 'XYZ Savings',
    amount: '₦33,000',
    type: 'debit',
    time: fDate(faker.date.past()),
  },
];
