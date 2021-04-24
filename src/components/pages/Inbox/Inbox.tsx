import * as React from 'react';
import ResponsesList from './ResponsesList/ResponsesList';
import SharesList from './SharesList/SharesList';
import './Inbox.scss';

const sharesData = [
  { title: 'First response ', answersCount: 2 },
  { title: 'Second response ', answersCount: 11 },
];

const responsesData = [
  { date: '11.11.21 15:22', text: 'Hello its Stas' },
  { date: '11.04.21 11:51', text: 'Its not bad' },
  { date: '12.08.21 12:22', text: 'Hey i think its awesome' },
];

const Inbox = () => {
  const [shares, setShares] = React.useState(sharesData);
  const [responses, setResponses] = React.useState(responsesData);
  const [shareIndex, setShareIndex] = React.useState(0);

  return (
    <div className='inbox-container'>
      <div className='inbox-title'>
        <h1>Inbox</h1>
      </div>
      <div className='inbox-shares-wrapper'>
        <h2>Your shares:</h2>
        <div className='inbox-shares-container'>
          <SharesList shares={shares} />
        </div>
      </div>
      <div className='inbox-responses-wrapper'>
        <ResponsesList responses={responses} />
      </div>
    </div>
  );
};

export default Inbox;
