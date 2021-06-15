import React, { useState } from 'react'
import TimeStamp from 'time-stamp';

export default function CreateMessageForm({ getMessages, socket, userName }) {
  const [messageText, setMessageText] = useState('')

  const submitNewMessage = () => {
    let time = (Number(TimeStamp('HH')) - 12) + ':' + TimeStamp('mm:ss');

    let newMessage = {
      userId: 0,
      userName: userName || 'Anonymous',
      messageId: 0,
      timeStamp: time,
      messageContent: messageText
    }
    socket.emit('message', newMessage)
    getMessages();
    setMessageText('');
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      submitNewMessage();
      e.target.reset();
    }}>
      <input
        type="text"
        placeholder="Enter Message"
        onChange={e => setMessageText(e.target.value)}
      >
      </input>
      <button>
        Submit
      </button>
    </form>
  )
}