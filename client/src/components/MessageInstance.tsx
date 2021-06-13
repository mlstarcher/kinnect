import React from 'react'

export default function MessageInstance({ messageObject }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-start",
      borderBottom: "1px solid black",
      width: "100%"
    }}>
      <p style={{
        paddingLeft: "15px"
      }}>{
        `${messageObject.userName}: ${messageObject.messageContent} @ ${messageObject.timeStamp}`}
      </p>
    </div>
  )
}
