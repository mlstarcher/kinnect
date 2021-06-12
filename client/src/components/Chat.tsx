import React, { useState, useEffect } from 'react'

import Messages from "./Messages"
import CreateMessageForm from "./CreateMessageForm"

export default function Chat({ socket }) {
  const [messagesArray, setMessagesArray] = useState([])
  const [userName, setUserName] = useState('Anonymous')

  useEffect(() => {
    getMessages()
  }, [])

  const getMessages = () => {
    fetch('/messages', {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(res => res.json())
    .then(json => setMessagesArray(json))
    .catch(err => console.error(err));
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}>
        <Messages messagesArray={messagesArray}/>
        <CreateMessageForm getMessages={getMessages}/>
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