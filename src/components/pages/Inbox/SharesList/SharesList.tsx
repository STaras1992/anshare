import React from 'react';
import SharesListItem from './ShareListItem';
import './SharesList.scss';

export interface IShareItem {
  title: string;
  answersCount: number;
}

interface Props {
  shares: IShareItem[];
}

const SharesList = ({ shares }: Props) => {
  const items = shares.map((item: IShareItem) => (
    <li>
      <SharesListItem title={item.title} answersCount={item.answersCount} />
    </li>
  ));

  return (
    <div className='shares-wrapper'>
      <ul className='shares-list'>{items}</ul>
    </div>
  );
};

export default SharesList;
