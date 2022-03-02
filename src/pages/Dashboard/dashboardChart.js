import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Chart({ title, data, dataKey, grid }) {
  return (
    <div item className='padding-2 border-radius-1 box-shadow-1'>
      <h3 className='bold'>{title}</h3>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={data}>
          <XAxis dataKey='name' stroke='#5550bd' />
          <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
