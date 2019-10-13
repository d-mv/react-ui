import React from 'react';
import { Loading } from './Loading.style';

export default function() {
  return (
    <Loading data-testid='loading'>
      <div data-testid='loading-outer' className='outer'></div>
      <div data-testid='loading-middle' className='middle'></div>
      <div data-testid='loading-inner' className='inner'></div>
    </Loading>
  );
}
