import React, { useState, useEffect } from 'react'

import Messages from "./Messages"
import CreateMessageForm from "./CreateMessageForm"
import "./chat.css"

export default function Chat({ socket, messagesArray }) {
  const [userName, setUserName] = useState('Anonymous')

  return (
    <div className="chat-container">
      <h4>Username: {userName}</h4>
      <Messages
        socket={socket}
        messagesArray={messagesArray}
      />
      <CreateMessageForm
        socket={socket}
        userName={userName}
        setUserName={setUserName}
      />
    </div>
  )
}