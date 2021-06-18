import React, { useState, useEffect } from 'react'

import Messages from "./Messages"
import CreateMessageForm from "./CreateMessageForm"
import "./chat.css"

export default function Chat({ socket, messagesArray, setMessagesArray }) {
  const [userName, setUserName] = useState('Anonymous')

  useEffect(() => {
    console.log('chat re rendered')
    socket.on("newMessage", (newMessage) => {
      // console.log('newMessage', newMessage)
      // setMessagesArray(oldMessagesArray => [...oldMessagesArray, newMessage])
      console.log('messagesArray', messagesArray)
    })
  }, [messagesArray])

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