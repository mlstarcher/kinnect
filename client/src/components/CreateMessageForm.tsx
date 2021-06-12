import React, { useState } from 'react'

export default function CreateMessageForm({ getMessages }) {
  const [messageText, setMessageText] = useState('')
  return (
    <form>
      <input type="text"></input>
      <button>Submit</button>
    </form>
  )
}
