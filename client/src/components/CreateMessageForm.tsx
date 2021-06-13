import React, { useState } from 'react'
import TimeStamp from 'time-stamp';

export default function CreateMessageForm({ getMessages, socket }) {
  const [messageText, setMessageText] = useState('')

  const submitNewMessage = () => {
    let time = (Number(TimeStamp('HH')) - 12) + ':' + TimeStamp('mm:ss');

    let newMessage = {
      userId: 0,
      userName: 'Anonymous',
      messageId: 0,
      timeStamp: time,
      messageContent: messageText
    }
    socket.emit('message', newMessage)
    getMessages();
  }
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      submitNewMessage();
    }}>
      <input type="text" onChange={e => setMessageText(e.target.value)}></input>
      <button>Submit</button>
    </form>
  )
}

//Message Object:
//userId
//userName
//messageId
//timeStamp
//messageContent