import React, { useEffect, useRef } from 'react'

import MessageInstance from './MessageInstance'
import "./messages.css"

export default function Messages({ messagesArray }) {

  const messagesEndRef = useRef()

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messagesArray]);

  return (
    <div className="messages">
      {messagesArray.map((messageObject, index) => {
        return <MessageInstance
        key={index}
        messageObject={messageObject}/>
        }
      )}
      <div ref={messagesEndRef}></div>
    </div>
  )
}
