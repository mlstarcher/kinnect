import React from 'react'

import MessageInstance from './MessageInstance'
import "./messages.css"

export default function Messages({ messagesArray }) {
  return (
    <div className="messages">
      {messagesArray.map((messageObject, index) => {
        return <MessageInstance
        key={index}
        messageObject={messageObject}/>
        }
      )}
    </div>
  )
}
