import React from 'react';
import EmojiDetails from './component/EmojiDetails';
import Card from './component/Card';
import './App.css';


function createEntry(EmojiDetails){
  return <Card
    key = {EmojiDetails.id}
    emoji = {EmojiDetails.emoji}
    name = {EmojiDetails.name}
    description = {EmojiDetails.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>Emoji Details</span>
      </h1>
      <dl className="dictionary">{EmojiDetails.map(createEntry)}</dl>
    </div>
  );
}

export default App;
