import React, { useState, useEffect } from 'react'

import Messages from "./Messages"
import CreateMessageForm from "./CreateMessageForm"
import "./chat.css"

export default function Chat({ socket }) {
  const [messagesArray, setMessagesArray] = useState([])
  const [userName, setUserName] = useState('Anonymous')

  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = () => {
    fetch('http://localhost:4242/messages', {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(res => res.json())
    .then(json => setMessagesArray(json))
    .catch(err => console.error(err));
  }

  return (
    <div className="chat-container">
      <h4>Username: {userName}</h4>
      <Messages messagesArray={messagesArray}/>
        <CreateMessageForm
          getMessages={getMessages}
          socket={socket}
          userName={userName}
          setUserName={setUserName}
        />
    </div>
  )
}