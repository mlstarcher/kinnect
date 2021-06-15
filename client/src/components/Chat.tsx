import React, { useState, useEffect } from 'react'

import Messages from "./Messages"
import CreateMessageForm from "./CreateMessageForm"
import "./chat.css"

export default function Chat({ socket }) {
  const [messagesArray, setMessagesArray] = useState([])
  const [userNameInput, setUserNameInput] = useState('')
  const [userName, setUserName] = useState('Anonymous')

  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = () => {
    console.log('getMessages ran')
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
      <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
      <h1>Username: {userName}</h1>
        <Messages messagesArray={messagesArray}/>
        <form onSubmit={(e) => {
      e.preventDefault()
      setUserName(userNameInput)
      e.target.reset();
    }}>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={e => setUserNameInput(e.target.value)}
      >

      </input>
      <button>
        Submit
      </button>
    </form>
        <CreateMessageForm
          getMessages={getMessages}
          socket={socket}
          userName={userName}
        />
      </div>
    </div>
  )
}

//In state, store:
//Array of all message objects
//Current UserName
//

//Message Object:
//userId
//userName
//messageId
//timeStamp
//messageContent

//Component structure:
//Chat
//Create Message Form
//Messages (map)
//Message (instance)