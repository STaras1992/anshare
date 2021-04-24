import * as React from 'react';
import ResponseItem from './ResponseItem';
import './ResponsesList.scss';

export interface IDataItem {
  date: string;
  text: string;
}

interface Props {
  responses: Array<IDataItem>;
}

const ResponsesList = ({ responses }: Props) => {
  const items = responses.map((response: IDataItem) => (
    <li>
      <ResponseItem date={response.date} text={response.text} />
    </li>
  ));

  return (
    <div className='list-container'>
      <div className='list-content'>
        <ul>{items}</ul>
      </div>
    </div>
  );
};

export default ResponsesList;
