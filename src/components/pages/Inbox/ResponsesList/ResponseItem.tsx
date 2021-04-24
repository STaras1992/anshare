import React from 'react';
import { IDataItem } from './ResponsesList';
import './ResponseItem.scss';

const Responseitem = ({ date, text }: IDataItem) => {
  return (
    <div className='response-wrapper'>
      <div className='response-content'>
        <p className='response-content-date'>{date}</p>
        <p className='response-content-text'>{text}</p>
      </div>
    </div>
  );
};

export default Responseitem;
