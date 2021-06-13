import React from 'react'

import MessageInstance from './MessageInstance'

export default function Messages({ messagesArray }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid black",
      background: "white",
      height: "40vh",
      width: "80vh",
      overflow: "scroll"
    }}>
      {messagesArray.map((messageObject, index) => {
        return <MessageInstance
        key={index}
        messageObject={messageObject}/>
        }
      )}
    </div>
  )
}
