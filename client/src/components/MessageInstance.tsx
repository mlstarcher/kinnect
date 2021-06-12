import React from 'react'

export default function MessageInstance({ messageObject }) {
  console.log('message instance: ', messageObject)
  return (
    <div>
      <p>{messageObject.messageContent}</p>
    </div>
  )
}
