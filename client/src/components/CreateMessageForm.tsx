import React, { useState } from 'react'

export default function CreateMessageForm({ getMessages, socket }) {
  const [messageText, setMessageText] = useState('')

  const submitNewMessage = () => {
    let newMessage = {
      userId: 0,
      userName: 'Anonymous',
      messageId: 0,
      timeStamp: 0,
      messageContent:
    }
    socket.emit('message', messageText)
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