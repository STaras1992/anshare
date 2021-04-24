import React from 'react';
import { IShareItem } from './SharesList';
import './SharesListItem.scss';

const ShareListItem = ({ title, answersCount }: IShareItem) => {
  return (
    <div className='item-container'>
      <h3 className='item-name'>{title}</h3>
      <h3>Answers: {answersCount}</h3>
      <button>Show</button>
    </div>
  );
};

export default ShareListItem;
