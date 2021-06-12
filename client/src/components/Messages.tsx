import React from 'react'

import MessageInstance from './MessageInstance'

export default function Messages({ messagesArray }) {
  return (
    <div style={{
      border: "1px solid black",
      background: "white",
      height: "40vh",
      width: "80vh"
    }}>
      {messagesArray.map((messageObject, index) => {
        return <MessageInstance />
        }
      )}
    </div>
  )
}
