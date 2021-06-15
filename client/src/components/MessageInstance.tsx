import React from 'react'
import "./messageInstance.css"

export default function MessageInstance({ messageObject }) {
  return (
    <div className="message-instance">
      <p>{
        `${messageObject.userName}: ${messageObject.messageContent} @ ${messageObject.timeStamp}`}
      </p>
    </div>
  )
}
